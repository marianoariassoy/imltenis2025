import Title from "@/components/Title";
import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

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

interface data {
  id: number;
  name: string;
  image: string;
  slug: string;
  ig: string;
}

const page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/teams/ig", {
    cache: "no-store",
  });
  const data = (await response.json()) as data[];
  if (!data) return;

  const labels = [
    {
      name: "Nombre",
      value: "Nombre del equipo",
    },
    {
      name: "Cuenta",
      value: "Cuenta oficial",
    },
  ];

  return (
    <Container>
      <Title title="Cuentas oficiales" emoji="🌎" />

      <div className="overflow-x-auto">
        <div className="flex flex-col gap-y-6 max-w-2xl mx-auto">
          {data.map((item, index) => (
            <article className="flex items-center gap-x-3" key={index}>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 shadow-md shrink-0">
                {item.image ? (
                  <Link href={`/teams/${item.slug}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover h-full w-full hover:opacity-70 transition-opacity"
                    />
                  </Link>
                ) : null}
              </div>
              <a
                href={item.ig}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary flex flex-col"
              >
                <span className="font-semibold whitespace-nowrap">
                  {item.name}
                </span>
                <span>{item.ig}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default page;
