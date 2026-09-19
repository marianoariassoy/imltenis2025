import Item from "@/components/ItemExtraSmall";
import { Serie } from "@/types/";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";

interface TournamentDate {
  title: string;
  date: Date | string;
}

const page = async ({ date }: { date: TournamentDate }) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/series/upcoming",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as Serie[];
  if (!data) return null;

  const tournamentDate = new Date(date.date);
  const day = tournamentDate.getDate();
  const nextDay = new Date(tournamentDate);
  nextDay.setDate(nextDay.getDate() + 1);
  const month = tournamentDate.toLocaleString("es-AR", {
    month: "long",
  });

  const today = new Date().getDate();

  const filteredData = data.filter((item) => {
    const itemDay = parseInt(item.date.split(".")[0], 10);
    return itemDay === today;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-2 text-center px-4 text-secondary">
        <Link href="/orden-de-juego" className="font-medium hover:text-primary">
          {date.title} — {day} y {nextDay.getDate()} de {month}
        </Link>
      </div>

      <Marquee pauseOnHover={true} className="[--duration:200s] ">
        <div className="flex items-center gap-1">
          {filteredData.map((item) => (
            <Link
              href={`/series/${item.id}`}
              key={item.id}
              className="flex items-center gap-2 px-4 py-2 bg-black/20 rounded-xl shadow hover:bg-black/35 transition-all text-sm"
            >
              <div className="text-secondary font-medium flex gap-x-1">
                {/* <span >{item.date}</span> */}
                <span className="text-primary">
                  {item.hour ? <span>{item.hour} hs.</span> : "—"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Item title={item.home_name} image={item.home_image} />
                <span>⚡️</span>
                <Item title={item.away_name} image={item.away_image} />
              </div>

              <div className="font-medium text-secondary">
                {item.tournament_name}
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default page;
