import Title from "@/components/Title";
// import { Suspense } from "react";
// import Loader from "@/components/Loader";
// import Table from "./table";
import Filter from "./filter";

export const metadata = {
  title: "Ranking de Jugadores",
  description: "Ranking de Jugadores de la liga de clubes IML Tenis",
};

const page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;

  return (
    <section className="fade-in flex flex-col gap-y-6">
      <Title title="Ranking de Jugadores" description="Clausura 2024" />

      <Filter category={category} />

      <div>Muy pronto</div>

      {/* <Suspense fallback={<Loader />}>
        <Table category={category} />
      </Suspense> */}
    </section>
  );
};

export default page;
