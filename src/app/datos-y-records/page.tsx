import Title from "@/components/Title";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Datos y Records",
};

const nav = [
  {
    title: "Clubes campeones",
    description: "Ranking de copas y finales disputadas por clubes.",
    url: "/rankings/campeones",
  },
  {
    title: "Jugadores destacados",
    description: "Ranking de jugadores com más partidos jugados.",
    url: "/datos-y-records/jugadores",
  },
  {
    title: "Cuentas oficiales",
    description: "Redes sociales oficiales de equipos.",
    url: "/datos-y-records/redes-sociales",
  },
];

const page = () => {
  return (
    <Container>
      <Title title="Datos y Records" />

      <div className="flex flex-col gap-y-4 items-center mt-4 text-center">
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
