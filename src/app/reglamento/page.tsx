import Title from "@/components/Title";
import Filter from "./Filter";
import { reglamento } from "@/data/reglamento-2026";

export const metadata = {
  title: "Reglamento IML Tenis",
  description: "Reglamento IML Tenis Clausura 2025",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/rankings/campeones",
    title: "Reglamento IML Tenis",
    description: "Reglamento IML Tenis Clausura 2025",
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

const page = () => {
  return (
    <section className="flex flex-col gap-y-6">
      <Title title="Reglamento Clausura 2026" emoji="🤝" description="" />
      <Filter data={reglamento} />
    </section>
  );
};

export default page;
