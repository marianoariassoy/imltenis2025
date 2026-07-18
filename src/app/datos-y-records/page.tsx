import Title from "@/components/Title";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Datos y Records",
};

const nav = [
  {
    title: "Clubes campeones",
    description: "Ranking histórico de clubes.",
    url: "/rankings/campeones",
  },
  {
    title: "Equipos campeones",
    description: "Listado de equipos campeones.",
    url: "/datos-y-records/equipos-campeones",
  },
  {
    title: "Salón de la fama",
    description: "Jugadores con más partidos.",
    url: "/datos-y-records/salon-de-la-fama",
  },
  {
    title: "Cuentas oficiales",
    description: "Redes sociales oficiales de equipos.",
    url: "/datos-y-records/redes-sociales",
  },
  {
    title: "Estadísticas",
    description: "Estadísticas de del torneo.",
    url: "/datos-y-records/estadisticas",
  },
];

const page = () => {
  return (
    <Container>
      <Title
        title="Datos y Records"
        description="Información que no sabias que necesitabas"
      />

      <div className="flex flex-col gap-y-4 items-center text-center">
        {nav.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="hover:text-primary flex flex-col items-center"
          >
            <span className="font-semibold">{item.title}</span>
            <span className="text-secondary">{item.description}</span>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default page;
