import { Marquee } from "@/components/ui/marquee";
import Item from "@/components/ItemExtraSmall";
import Link from "next/link";

interface Data {
  id: string;
  player_slug: string;
  player_image: string;
  player_name: string;
  matches_won: string;
  category: string;
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
    <div className="flex flex-col gap-2">
      <Link
        href="/rankings/jugadores/damas-intermedia-30-clausura-2026"
        className="font-medium text-secondary text-center hover:text-primary"
      >
        Ranking de Jugadores
      </Link>
      <Marquee pauseOnHover={true} className={`[--duration:100s]`}>
        <div className="flex items-center gap-1">
          {data.slice(0, 10).map((item) => (
            <Link
              href={`/jugadores/${item.player_slug}`}
              key={item.id}
              className="flex items-center gap-1 px-4 py-2 bg-black/20 rounded-xl  hover:bg-black/35 transition-all text-sm"
            >
              <Item title={item.player_name} image={item.player_image} />
              <div className="font-medium text-secondary">
                {item.player_name}
              </div>
              <div className="font-medium text-primary">{item.category}</div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Jugadores;
