import Title from "@/components/Title";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Table from "./table";
import Filter from "./filter";
import Aviso from "@/components/Aviso";

export const metadata = {
  title: "Ranking de Jugadores Mito Gafas",
  description: "Ranking de Jugadores de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/rankings/jugadores/damas-tercera",
    title: "Ranking de Jugadores Mito Gafas",
    description: "Ranking de Jugadores de la liga de clubes IML Tenis",
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

const page = async ({
  params,
}: {
  params: Promise<{ category_slug: string }>;
}) => {
  const { category_slug } = await params;

  return (
    <section className="flex flex-col gap-y-4">
      <Title
        title="Ranking de Jugadores"
        emoji="😎"
        description="Mito Gafas Top 50"
      />
      <Filter category_slug={category_slug} />
      <Suspense fallback={<Loader />}>
        <Table category_slug={category_slug} />
      </Suspense>
      <Aviso
        type="info"
        text="Al final del torneo el ganador o la ganadora de cada categoría recibirá un obsequio, gentileza de Mito Gafas 🕶️"
      />
      <Aviso
        type="atention"
        text="Los datos se actualizan los días martes de cada semana"
      />
    </section>
  );
};

export default page;
