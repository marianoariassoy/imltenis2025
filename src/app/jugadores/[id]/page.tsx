import Estadisticas from "./estadisticas";
import Singles from "./singles";
import Doubles from "./dobles";
import Equipos from "./equipos";
import Aviso from "@/components/Aviso";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/players/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: data.name,
    description: `Perfil del jugador ${data.name} de la liga de clubes IML Tenis`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://imltenis.com.ar/jugadores/${id}`,
      title: data.name,
      description: `Perfil del jugador ${data.name} de la liga de clubes IML Tenis`,
      images: [
        {
          url: data.image,
          width: 500,
          height: 500,
          alt: data.name,
        },
      ],
    },
  };
}

async function getServerSideProps(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/players/${id}`
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
      <header className="items-center flex flex-col gap-y-2">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-white/10 dark:bg-black/10 shadow-lg">
          {data.image && (
            <Image
              src={data.image}
              alt={data.name}
              width={96}
              height={96}
              className="object-cover h-full w-full"
            />
          )}
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-primary">{data.name}</h1>
          <h2 className="text-secondary text-sm">
            {data.age ? data.age : null}
          </h2>
        </div>
      </header>

      <Estadisticas id={id} />
      <Singles id={id} />
      <Doubles id={id} />
      <Equipos id={id} />

      <Aviso text="En caso de existir algún error en la información o queres agregar o cambiar tu foto de perfil, envianos un correo a hola@imltenis.com.ar" />
    </section>
  );
};

export default Page;
