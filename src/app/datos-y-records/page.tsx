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
        emoji="💪🏻"
        description="Todos los datos que forman parte de la historia de IML Tenis, reunidos en un solo lugar. Estadísticas, marcas y récords que reflejan los grandes momentos, las grandes actuaciones y la evolución del torneo a lo largo de sus temporadas."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center mt-4">
        {nav.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="border border-primary rounded-xl p-4  font-medium text-primary hover:text-foreground hover:border-foreground"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default page;
