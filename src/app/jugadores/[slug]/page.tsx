import Estadisticas from "./estadisticas";
import Singles from "./singles";
import Doubles from "./dobles";
import Equipos from "./equipos";
import Aviso from "@/components/Aviso";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/players/${slug}`,
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: data.name,
    description: `Perfil del jugador ${data.name} de la liga de clubes IML Tenis`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://imltenis.com.ar/jugadores/${slug}`,
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

async function getServerSideProps(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/players/${slug}`,
  );
  const data = await response.json();
  if (!data) return null;
  return data;
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getServerSideProps(slug);
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-6">
      <header className="items-center flex flex-col gap-y-2">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-white/10 dark:bg-black/10">
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
          <h1 className="font-semibold text-primary text-lg">{data.name}</h1>
          <div className="flex gap-x-2 items-center justify-center text-secondary">
            {data.age ? data.age : null}
            <span>—</span>
            <span>ID {+data.id + 1000}</span>
          </div>
        </div>
      </header>
      {data.image === null && (
        <Aviso
          text="Enviar foto de perfil del jugador a hola@imltenis.com.ar"
          type="atention"
        />
      )}
      <Estadisticas id={data.id} />
      <Singles id={data.id} />
      <Doubles id={data.id} />
      <Equipos id={data.id} />

      <Aviso text="En caso de existir algún error en la información o querer modificar la foto de perfil, envianos un correo a hola@imltenis.com.ar" />
    </section>
  );
};

export default Page;
