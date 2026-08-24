import Title from "@/components/Title";
import { Container } from "@/components/Container";
import Image from "next/image";
import { Instagram } from "@/lib/icons";

export const metadata = {
  title: "Cuentas oficiales de equipos",
  description: "Cuentas oficiales de equipos de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/datos-y-records/redes-sociales",
    title: "Cuentas oficiales de equipos",
    description: "Cuentas oficiales de equipos de la liga de clubes IML Tenis",
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

interface Data {
  id: number;
  name: string;
  image: string;
  slug: string;
  ig: string;
}

const Page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/teams/ig", {
    cache: "no-store",
  });

  const data = (await response.json()) as Data[];

  if (!data) return null;

  function getInstagramUsername(url: string): string | null {
    const match = url.match(
      /^https?:\/\/(?:www\.)?instagram\.com\/([a-zA-Z0-9._]+)\/?(?:\?.*)?$/,
    );

    return match ? match[1] : null;
  }

  return (
    <Container>
      <div className="flex flex-col gap-y-2 items-center">
        <span className="text-primary">
          <Instagram />
        </span>

        <Title
          title="Cuentas oficiales"
          description="El tenis también se vive fuera de la cancha. En esta sección reunimos las cuentas oficiales de Instagram de los equipos que participan de IML Tenis, para que puedas conocerlos, seguir sus novedades y acompañar cada fecha del torneo."
        />
      </div>

      <div className="w-full mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
          {data.map((item) => (
            <article
              className="flex items-center gap-x-2 min-w-0"
              key={item.id}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white/20 shadow-md shrink-0">
                {item.image ? (
                  <a href={item.ig} target="_blank" rel="noreferrer">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="object-cover h-full w-full hover:opacity-70 transition-opacity"
                    />
                  </a>
                ) : null}
              </div>

              <a
                href={item.ig}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary flex flex-col leading-5 min-w-0"
              >
                <span className="font-semibold truncate">{item.name}</span>

                <span className="truncate">
                  @{getInstagramUsername(item.ig)}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Page;
