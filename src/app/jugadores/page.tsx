import Title from "@/components/Title";
import Filter from "./Filter";
import { Container } from "@/components/Container";
import { Search } from "@/lib/icons";

export const metadata = {
  title: "Jugadores",
};

const Page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/players", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <Container>
      <div className="w-full max-w-md mx-auto flex flex-col gap-y-8">
        <Title title="Jugadores" emoji="🙋🏻" />
        <Filter data={data} />
      </div>
    </Container>
  );
};

export default Page;
