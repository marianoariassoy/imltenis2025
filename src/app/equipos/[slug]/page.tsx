import Link from "next/link";
import Jugadores from "./jugadores";
import Fixture from "./fixtures";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${slug}`,
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: data.name + " " + data.tournament_name,
    description: `Perfil del equipo ${data.name} ${data.tournament_name} de la liga de clubes IML Tenis`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://imltenis.com.ar/equipos/${slug}`,
      title: data.name,
      description: `Perfil del equipo ${data.name} ${data.tournament_name} de la liga de clubes IML Tenis`,
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

async function getServerSideProps(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${slug}`,
  );
  const data = await response.json();
  if (!data) return null;
  return data;
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getServerSideProps(slug);
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-6">
      <header className="items-center flex flex-col gap-y-2">
        <Link href={`/clubes/${data.club_slug}`}>
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
            <Image
              src={data.image}
              alt={data.name}
              width={96}
              height={96}
              className="object-cover h-full w-full hover:opacity-80 transition-opacity"
            />
          </div>
        </Link>
        <div className="text-center">
          <h1 className="font-bold text-xl tracking-tight text-primary">
            {data.name}
          </h1>
          <Link
            href={`/torneos/${data.tournament_slug}`}
            className="font-medium hover:underline"
          >
            {data.tournament_name}
          </Link>
        </div>
        <div className="flex justify-center gap-x-4 items-center">
          <Link
            href={`/clubes/${data.club_slug}`}
            className="flex gap-x-1 font-medium items-center text-primary hover:underline"
          >
            <FontAwesomeIcon icon={faCircleInfo} size="lg" width={20} />
            Info de la sede
          </Link>
        </div>
      </header>

      <Suspense fallback={<Loader />}>
        <Jugadores id={data.id} captain_name={data.captain_name} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Fixture id={data.id} />
      </Suspense>
    </section>
  );
};

export default Page;
