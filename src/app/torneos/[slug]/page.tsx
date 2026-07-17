import Title from "@/components/Title";
import Campeon from "./campeon";
import Groups from "./groups";
import Fixture from "./fixture";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { Container } from "@/components/Container";
import Marquee from "./marquee";

async function fetchTournament(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/${slug}`,
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const text = await response.text();

    console.log("API ERROR:");
    console.log("STATUS:", response.status);
    console.log("BODY:", text);

    return null;
  }

  return response.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await fetchTournament(slug);
  if (!data) return null;

  return {
    title: `${data.name} ${data.season}`,
    description: `Torneo ${data.name} ${data.season} de la liga de clubes IML Tenis`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://imltenis.com.ar/torneos/${slug}`,
      title: `${data.name} ${data.season}`,
      description: `Torneo ${data.name} ${data.season} de la liga de clubes IML Tenis`,
      images: [
        {
          url: "https://imltenis.com.ar/assets/imltenis.jpg",
          width: 500,
          height: 500,
          alt: "IML Tenis Liga de clubes de Buenos Aires",
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await fetchTournament(slug);
  if (!data) return null;

  return (
    <Container>
      <Title title={data.name} subtitle={data.season} />
      <Marquee id_tournament={data.id} />

      {data.team_champion_id && <Campeon data={data} />}

      <Suspense fallback={<Loader />}>
        <Groups id_tournament={data.id} twoMatches={+data.mode === 3} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Fixture title={true} id_tournament={data.id} />
      </Suspense>
    </Container>
  );
};

export default Page;
