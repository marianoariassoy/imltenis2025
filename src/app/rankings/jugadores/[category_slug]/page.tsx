import Title from "@/components/Title";
import Filter from "./filter";
import Aviso from "@/components/Aviso";
import { Container } from "@/components/Container";
import Loader from "@/components/Loader2";
import Table from "./table";
import { Suspense } from "react";

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

const Page = async ({
  params,
}: {
  params: Promise<{ category_slug: string }>;
}) => {
  const { category_slug } = await params;

  return (
    <Container>
      <Title title="Ranking de Jugadores" description="Mito Gafas Top 50" />

      <Filter category_slug={category_slug} />

      <Suspense fallback={<Loader />}>
        <Table category_slug={category_slug} />
      </Suspense>

      <Aviso
        type="info"
        text="Al finalizar el torneo, el ganador o la ganadora de cada categoría recibirá un obsequio especial, gentileza de Mito Gafas.
"
      />
    </Container>
  );
};

export default Page;
