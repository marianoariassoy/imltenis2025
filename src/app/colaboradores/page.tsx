import Title from "@/components/Title";
import Item from "./Item";

export const metadata = {
  title: "Colaboradores",
};

interface Data {
  title: string;
  text: string;
  url?: string;
}

const page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/partners");
  const data = (await response.json()) as Data[];

  return (
    <section className="fade-in flex flex-col gap-y-6 max-w-2xl mx-auto">
      <Title
        title="Colaboradores"
        emoji="🤝"
        description="Gracias al apoyo y la contribucion de los siguientes colaboradores nuestra liga y comunidad tenistica continua creciendo."
      />

      <div className="grid grid-cols-2 gap-3 lg:gap-6">
        {data.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default page;
