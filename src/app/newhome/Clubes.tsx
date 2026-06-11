import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

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
  // username,
  // body,
}: {
  image: string;
  name: string;
  // username: string;
  // body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-white/10 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-white/10 bg-white/15",
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img
          className="rounded-full"
          width="42"
          height="42"
          alt=""
          src={image}
        />
        <div className="flex flex-col ">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
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

  const firstRow = data.slice(0, data.length / 2);
  const secondRow = data.slice(data.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  );
};

export default asyncMarqueeDemo;
