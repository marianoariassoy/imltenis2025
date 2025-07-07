import Title from "@/components/Title";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Campeon from "./campeon";
import Torneo from "./torneo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/weekend/tournaments/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: `${data.title}`,
    description: `Torneo ${data.title} de IML Weekend`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://imltenis.com.ar/weekend/${id}`,
      title: `${data.title}`,
      description: `Torneo ${data.title} de IML Weekend`,
      images: [
        {
          url: "https://imltenis.com.ar/assets/imltenis.jpg",
          width: 500,
          height: 500,
          alt: "IML Tenis Liga de clubes de Buenos Aires",
        },
      ],
    },
  };
}

async function getServerSideProps(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/weekend/tournaments/${id}`
  );
  const data = await response.json();
  if (!data) return null;
  return data;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getServerSideProps(id);
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-6">
      <Title title={data.title} description={`${data.date} ${data.hour}`} />

      {data.champion ? (
        <Suspense fallback={<Loader />}>
          <Campeon id={data.champion} />
        </Suspense>
      ) : null}

      <Suspense fallback={<Loader />}>
        <Torneo id_tournament={id} description={data.description} />
      </Suspense>
    </section>
  );
};

export default Page;
