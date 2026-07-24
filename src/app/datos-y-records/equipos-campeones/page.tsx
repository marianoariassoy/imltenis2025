import Title from "@/components/Title";
import Item from "@/components/ItemMedium";
import { Container } from "@/components/Container";
import Link from "next/link";
import { Star } from "@/lib/icons";

export const metadata = {
  title: "Equipos campeones",
  description: "Equipos campeones de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/datos-y-records/jugadores",
    title: "Equipos campeones",
    description: "Equipos campeones de la liga de clubes IML Tenis",
    images: [
      {
        url: "https://imltenis.com.ar/assets/imltenis.jpg",
        width: 500,
        height: 500,
        alt: "IML Tenis",
      },
    ],
  },
};

interface data {
  id: number;
  season_name: string;
  tournament_name: string;
  tournament_slug: string;
  team_name: string;
  team_slug: string;
  team_image: string;
  club_name: string;
  club_slug: string;
}

const page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/champions", {
    cache: "no-store",
  });
  const data = (await response.json()) as data[];
  if (!data) return;

  return (
    <Container>
      <Title
        title={`Equipos campeones`}
        description={`${data.length} equipos`}
        emoji="🏆"
      />

      <div className="overflow-x-auto flex flex-col items-start gap-y-4 max-w-3xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <Item
              image={item.team_image}
              title={item.team_name}
              link={`/equipos/${item.team_slug}`}
            />
            <Link
              href={`/torneos/${item.tournament_slug}`}
              className="text-secondary font-medium hover:text-primary text-nowrap"
            >
              {item.tournament_name} {item.season_name}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default page;
