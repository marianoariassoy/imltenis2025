import Title from "@/components/Title";
import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

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
        emoji="⭐️"
      />

      <div className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-2 w-full max-w-4xl mx-auto">
        {data.map((item, index) => (
          <Link
            href={`/torneos/${item.tournament_slug}`}
            key={index}
            className="flex items-center gap-3 p-4 bg-black/10 rounded-xl shadow hover:bg-black/20 transition-all"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden bg-white/20 shrink-0">
              <Image
                src={item.team_image}
                alt={item.team_name}
                width={56}
                height={56}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="font-medium leading-5 text-secondary">
              <span className="text-foreground">{item.team_name}</span>{" "}
              {item.tournament_name} {item.season_name}
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default page;
