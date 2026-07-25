import { Marquee } from "@/components/ui/marquee";
import { obtenerAbreviado } from "@/lib/abbreviations";

interface data {
  id: string;
  image: string;
  name: string;
  club_id: string;
  club_slug: string;
  matches_won: string;
  series_won: string;
  series_total: string;
  matches_total: string;
}

const ReviewCard = ({
  image,
  name,
  num,
}: {
  image: string;
  name: string;
  num: number;
}) => {
  return (
    <article className=" h-full cursor-pointer px-2">
      <div className="flex flex-row items-center gap-2">
        <div className="font-bold">{num}.</div>
        <div className="flex items-center gap-2">
          <img
            className="rounded-full"
            width="42"
            height="42"
            alt=""
            src={image}
          />
          <div className="font-semibold">{obtenerAbreviado(name)}</div>
        </div>
      </div>
    </article>
  );
};

const asyncMarqueeDemo = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/clubes",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as data[];
  if (!data) return;

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-8">
      <h1 className="mb-2 font-semibold text-secondary">Ranking de clubes</h1>
      <Marquee pauseOnHover className="[--duration:200s]">
        {data.slice(0, 20).map((item, index) => (
          <ReviewCard key={item.id} {...item} num={index + 1} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  );
};

export default asyncMarqueeDemo;
