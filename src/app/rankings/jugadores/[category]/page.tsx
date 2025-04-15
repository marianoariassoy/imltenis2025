import Title from "@/components/Title";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Table from "./table";
import Filter from "./filter";

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
        url: "/assets/imltenis.jpg",
        width: 500,
        height: 500,
        alt: "IML Tenis",
      },
    ],
  },
};

const page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;

  return (
    <section className="flex flex-col gap-y-3">
      <Title title="Ranking de Jugadores Mito Gafas" />

      <Filter category={category} />

      <Suspense fallback={<Loader />}>
        <Table category={category} />
      </Suspense>
    </section>
  );
};

export default page;
