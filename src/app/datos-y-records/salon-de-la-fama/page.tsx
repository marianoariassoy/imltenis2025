import Title from "@/components/Title";
import Labels from "@/components/Labels";
import Info from "@/components/Aviso";
import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Ranking de partidos jugados",
  description: "Ranking de partidos jugados de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/datos-y-records/jugadores",
    title: "Ranking de partidos jugados",
    description:
      "En este ranking podrás conocer a los jugadores con mayor cantidad de partidos disputados a lo largo de su participación en el torneo, destacando su trayectoria, compromiso y presencia dentro de la competencia.",
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
  name: string;
  image: string;
  slug: string;
  matches: number;
  teams: number;
}

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/players/played",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as data[];
  if (!data) return;

  const labels = [
    {
      name: "Jugador",
      value: "",
    },
    {
      name: "Partidos",
      value: "Partidos jugados",
    },
    {
      name: "Equipos",
      value: "Equipos Integrados",
    },
  ];

  return (
    <Container>
      <Title
        title="Salón de la Fama"
        emoji="😎"
        description="En este ranking podrás conocer a los jugadores con mayor cantidad de partidos disputados a lo largo de su participación en el torneo, destacando su trayectoria, compromiso y presencia dentro de la competencia."
      />

      <div className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-2 w-full max-w-4xl mx-auto">
        {data
          .filter((item) => item.image !== null)
          .map((item, index) => (
            <Link
              href={`/jugadores/${item.slug}`}
              key={index}
              className="flex gap-2 items-center justify-between p-4 bg-black/10 rounded-xl shadow hover:bg-black/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`font-medium ${index === 0 ? "text-primary" : null}`}
                >
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white/20 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="font-medium leading-5">{item.name}</div>
              </div>
              <div className=" shrink-0 text-primary font-bold text-xl">
                {item.matches}
              </div>
            </Link>
          ))}
      </div>
      <Labels labels={labels} />
      <Info text="Solo se muestra jugadores con foto de perfil y al menos un partido jugado" />
    </Container>
  );
};

export default page;
