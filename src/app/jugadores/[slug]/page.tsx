import Estadisticas from "./estadisticas";
import Singles from "./singles";
import Doubles from "./dobles";
import Equipos from "./equipos";
import Aviso from "@/components/Aviso";
import { Verified } from "@/lib/icons";
import { Container } from "@/components/Container";
import Foto from "./foto";

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
    <Container>
      <header className="items-center flex flex-col gap-y-2">
        <Foto src={data.image} alt={data.name} />

        <div className="text-center">
          <div className="flex items-center justify-center gap-x-1">
            <h1 className="font-semibold text-primary text-base">
              {data.name}
            </h1>
            {data.image !== null && (
              <span className="text-primary">
                <Verified />
              </span>
            )}
          </div>
          <div className="flex gap-x-2 items-center justify-center text-secondary">
            {data.age ? data.age : null}
            <span>—</span>
            <span>ID {+data.id + 1000}</span>
          </div>
        </div>
      </header>
      {data.image === null && (
        <Aviso
          text="Enviar foto de perfil a hola@imltenis.com.ar"
          type="atention"
        />
      )}
      {data.description && (
        <div className="text-center bg-white/5 p-2 rounded-xl text-secondary">
          ⭐️ {data.description}
        </div>
      )}
      <Estadisticas id={data.id} category_name={data.category_name} />
      <Singles id={data.id} />
      <Doubles id={data.id} />
      <Equipos id={data.id} />

      <Aviso text="En caso de existir algún error en la información o querer modificar la foto de perfil, envianos un correo a hola@imltenis.com.ar" />
    </Container>
  );
};

export default Page;
