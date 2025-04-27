import Equipos from "./equipos";
import { Club } from "@/types";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Estadisticas from "./estadisticas";
import Stars from "./stars";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clubes/${id}`
  );
  const data = (await response.json()) as Club;
  if (!data) return {};

  return {
    title: data.name,
    description: `Perfil del club ${data.name} de la liga de clubes IML Tenis`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://imltenis.com.ar/clubes/${id}`,
      title: data.name,
      description: `Perfil del club ${data.name} de la liga de clubes IML Tenis`,
      images: [
        {
          url: data.image,
          width: 500,
          height: 500,
          alt: data.name,
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
  const data = (await getServerSideProps(id)) as Club;
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-6">
      <header className="items-center flex flex-col gap-y-2">
        <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
          <Image
            src={data.image}
            alt={data.name}
            width={96}
            height={96}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-base text-primary">{data.name}</h1>
          <Suspense fallback={<Loader />}>
            <Stars id={id} />
          </Suspense>
        </div>

        <div className="text-sm text-center font-medium">{data.location}</div>

        {data.googlemaps && (
          <div
            className="py-3 w-full [&>iframe]:w-full [&>iframe]:h-64"
            dangerouslySetInnerHTML={{ __html: data.googlemaps }}
          />
        )}

        <div className="flex flex-wrap gap-3 items-center justify-center font-medium text-sm text-primary">
          {data.phone && <span>Tel. {data.phone}</span>}
          {data.googlemapslink && (
            <a
              href={data.googlemapslink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Map
            </a>
          )}
          {data.whatsapp && (
            <a
              href={`https://wa.me/${data.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              WhatsApp
            </a>
          )}
          {data.instagram && (
            <a
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          )}
          {data.facebook && (
            <a
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
          )}
          {data.web && (
            <a
              href={data.web}
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
