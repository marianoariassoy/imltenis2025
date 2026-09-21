import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Link from "next/link";
import { obtenerPrimerNombreYApellido } from "@/lib/abbreviations";

interface Data {
  id: string;
  player_slug: string;
  player_image: string;
  player_name: string;
  matches_won: string;
  category: string;
  category_slug: string;
}

const Jugadores = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/players-top",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as Data[];
  if (!data) return null;
  return (
    <div className="w-full flex flex-col gap-y-3">
      <Link
        href="/rankings/jugadores/damas-intermedia-30-clausura-2026"
        className="font-medium text-secondary text-center hover:text-primary"
      >
        Ranking de jugadores
      </Link>
      <Marquee pauseOnHover={true} className="[--duration:50s]">
        <div className="w-full flex gap-x-4 pb-4">
          {data.map((item) => (
            <article key={item.id} className="flex items-center gap-2 shrink-0">
              <Link
                href={`/jugadores/${item.player_slug}`}
                className="w-11 h-11 rounded-full overflow-hidden bg-white/10 shrink-0 hover:opacity-80 transition-all"
              >
                {item.player_image && (
                  <Image
                    src={item.player_image}
                    alt={item.player_name}
                    width={56}
                    height={56}
                    className="object-cover h-full w-full"
                  />
                )}
              </Link>
              <div className="flex flex-col font-medium text-secondary text-sm">
                <span className="font-medium leading-4">
                  {obtenerPrimerNombreYApellido(item.player_name)}
                </span>
                <Link
                  href={`/rankings/jugadores/${item.category_slug}`}
                  className="text-primary leading-4 hover:underline"
                >
                  {item.category}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Jugadores;
