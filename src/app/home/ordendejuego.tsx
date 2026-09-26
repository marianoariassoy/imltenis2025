import Item from "@/components/ItemExtraSmall";
import { Serie } from "@/types/";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";

interface TournamentDate {
  title: string;
  date: Date | string;
}

const page = async ({ date }: { date: TournamentDate }) => {
  let data: Serie[] = [];

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/series/upcoming",
      {
        next: { revalidate: 600 },
      },
    );

    if (!response.ok) {
      console.error(
        "Error series/upcoming Home:",
        response.status,
        response.statusText,
      );
      return null;
    }

    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      console.error("series/upcoming Home no devolvió JSON:", contentType);
      return null;
    }

    data = (await response.json()) as Serie[];
  } catch (error) {
    console.error("Error obteniendo series/upcoming Home:", error);
    return null;
  }

  if (!data.length) return null;

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
    <div className="flex flex-col gap-2 mb-6">
      <div className="text-center text-secondary">
        <Link href="/orden-de-juego" className="font-medium hover:text-primary">
          {date.title} — {day} y {nextDay.getDate()} de {month}
        </Link>
      </div>

      <Marquee pauseOnHover={true} className="[--duration:200s]">
        <div className="flex items-center gap-1">
          {filteredData.map((item) => (
            <Link
              href={`/series/${item.id}`}
              key={item.id}
              className="flex items-center gap-2 px-4 py-2 bg-black/20 rounded-xl hover:bg-black/35 transition-all text-sm"
            >
              <div className="text-secondary font-medium flex gap-x-1">
                <span>{item.date}</span>

                {!item.score &&
                  (item.hour ? (
                    <span className="text-primary">{item.hour} hs.</span>
                  ) : (
                    "—"
                  ))}
              </div>

              <div className="flex items-center gap-2">
                <Item title={item.home_name} image={item.home_image} />

                {item.score ? (
                  <span className="font-medium">{item.score}</span>
                ) : (
                  <div>⚡️</div>
                )}

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
