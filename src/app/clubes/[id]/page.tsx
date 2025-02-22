import Image from "next/image";
import Link from "next/link";
import Equipos from "./equipos";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clubes/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: `${data.name}`,
    description: `Perfil del club ${data.name} de la liga de clubes IML Tenis`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://imltenis.com.ar/clubes/${id}`,
      title: `${data.name}`,
      description: `Perfil del club ${data.name} de la liga de clubes IML Tenis`,
      images: [
        {
          url: `https://imltenis.com.ar/images/${data.image}`,
          width: 500,
          height: 500,
          alt: `${data.name}`,
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clubes/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return (
    <section className="fade-in flex flex-col gap-y-6">
      <header className="items-center flex flex-col gap-y-2">
        <Link href={`/clubes/${data[0].club_id}`}>
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={data[0].image}
              alt={data[0].name}
              width={80}
              height={80}
              className="object-cover h-full w-full hover:opacity-80 transition-opacity"
            />
          </div>
        </Link>
        <h1 className="font-semibold text-base text-primary">{data[0].name}</h1>

        <div className="text-sm text-center font-medium flex flex-col items-center">
          <span>{data[0].location}</span>
          {data[0].phone && <span>Tel. {data[0].phone}</span>}
        </div>

        <div className="flex flex-col items-center font-medium text-sm">
          {data[0].googlemaps && (
            <a
              href={data[0].googlemaps}
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

      <Equipos id={id} />
    </section>
  );
};

export default Page;
