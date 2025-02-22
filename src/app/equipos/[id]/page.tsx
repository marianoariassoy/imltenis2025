import Image from "next/image";
import Link from "next/link";
import { WhatsApp, Pin } from "@/lib/icons";
import Jugadores from "./jugadores";
import Fixture from "./fixtures";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: `${data.name}`,
    description: `Perfil del equipo ${data.name} de la liga de clubes IML Tenis`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://imltenis.com.ar/equipos/${id}`,
      title: `${data.name}`,
      description: `Perfil del equipo ${data.name} de la liga de clubes IML Tenis`,
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
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return (
    <section className="fade-in flex flex-col gap-y-6">
      <header className="items-center flex flex-col gap-y-2">
        <Link href={`/clubes/${data.club_id}`}>
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={data.image}
              alt={data.name}
              width={80}
              height={80}
              className="object-cover h-full w-full hover:opacity-80 transition-opacity"
            />
          </div>
        </Link>
        <div className="text-center">
          <h1 className="font-semibold text-primary">{data.name}</h1>
          <h2>
            <Link
              href={`/torneos/${data.tournament_id}`}
              className="font-medium hover:underline"
            >
              {data.tournament_name}
            </Link>
          </h2>
        </div>
      </header>

      <div className="flex justify-center gap-x-3 items-center text-sm">
        <a
          href={data.googlemaplink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-x-1 font-medium items-center text-primary hover:underline"
        >
          <Pin /> Ubicación del club
        </a>
        <a
          href={`https://wa.me/${data.captain_phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-x-1 font-medium items-center text-primary hover:underline"
        >
          <WhatsApp /> WhatsApp
        </a>
      </div>

      <Jugadores id={id} captain_name={data.captain_name} />
      <Fixture id={id} />
    </section>
  );
};

export default Page;
