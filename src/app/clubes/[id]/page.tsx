import Image from "next/image";
import Equipos from "./equipos";
import { Club } from "@/types";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Estadisticas from "./estadisticas";
import Stars from "./stars";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clubes/${id}`
  );
  const data = (await response.json()) as Club[];
  if (!data) return {};

  return {
    title: data[0].name,
    description: `Perfil del club ${data[0].name} de la liga de clubes IML Tenis`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://imltenis.com.ar/clubes/${id}`,
      title: data[0].name,
      description: `Perfil del club ${data[0].name} de la liga de clubes IML Tenis`,
      images: [
        {
          url: data[0].image,
          width: 500,
          height: 500,
          alt: data[0].name,
        },
      ],
    },
  };
}

async function getServerSideProps(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clubes/${id}`
  );
  const data = await response.json();
  if (!data) return null;
  return data;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = (await getServerSideProps(id)) as Club[];
  if (!data) return null;

  return (
    <section className="fade-in flex flex-col gap-y-6">
      <header className="items-center flex flex-col gap-y-2">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image
            src={data[0].image}
            alt={data[0].name}
            width={80}
            height={80}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-base text-primary">
            {data[0].name}
          </h1>
          <Suspense fallback={<Loader />}>
            <Stars id={id} />
          </Suspense>
        </div>

        <div className="text-sm text-center font-medium">
          {data[0].location}
        </div>

        {data[0].googlemaps && (
          <div
            className="py-3 w-full [&>iframe]:w-full [&>iframe]:h-64"
            dangerouslySetInnerHTML={{ __html: data[0].googlemaps }}
          />
        )}

        <div className="flex flex-wrap gap-3 items-center justify-center font-medium text-sm text-primary">
          {data[0].phone && <span>Tel. {data[0].phone}</span>}
          {data[0].googlemapslink && (
            <a
              href={data[0].googlemapslink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Map
            </a>
          )}
          {data[0].whatsapp && (
            <a
              href={`https://wa.me/${data[0].whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              WhatsApp
            </a>
          )}
          {data[0].instagram && (
            <a
              href={data[0].instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          )}
          {data[0].facebook && (
            <a
              href={data[0].facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
          )}
          {data[0].web && (
            <a
              href={data[0].web}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Web
            </a>
          )}
        </div>
      </header>

      <Suspense fallback={<Loader />}>
        <Estadisticas id={id} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Equipos id={id} />
      </Suspense>
    </section>
  );
};

export default Page;
