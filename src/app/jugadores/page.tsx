import Title from "@/components/Title";
import Filter from "./Filter";

export const metadata = {
  title: "Jugadores",
};

const Page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/players");
  const data = await response.json();

  return (
    <section className="flex flex-col gap-y-6 max-w-md mx-auto">
      <Title title="Jugadores" emoji="🧑👩" />
      <Filter data={data} />
    </section>
  );
};

export default Page;
