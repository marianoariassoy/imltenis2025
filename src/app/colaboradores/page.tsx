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
      {/* 
      <div className="text-sm text-center mt-3">
        📢 Comunicate al{" "}
        <a
          href="https://wa.me/5491130171475"
          className="underline hover:text-primary"
          target="_blank"
        >
          {" "}
          +54 9 11 3017-1475
        </a>{" "}
        para anunciar
      </div> */}
    </section>
  );
};

export default page;
