import Link from "next/link";

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
  club_slug,
}: {
  image: string;
  name: string;
  num: number;
  club_slug: string;
}) => {
  return (
    <article className="shrink-0">
      <div className="flex flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <div
            className={`font-bold mr-1 text-sm ${num < 5 ? "text-primary" : null}`}
          >
            {num}
          </div>
          <Link
            href={`/clubes/${club_slug}`}
            className="hover:opacity-80 transition-opacity"
          >
            <img
              className="rounded-full w-11 h-11 md:w-14 md:h-14"
              width="56"
              height="56"
              alt={name}
              src={image}
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Clubes = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/clubes",
    {
      next: { revalidate: 600 },
    },
  );
  const data = (await response.json()) as data[];
  if (!data) return;

  return (
    <div className="flex flex-col gap-y-5">
      <Link
        href="/rankings/clubes"
        className="font-medium hover:text-primary text-secondary text-center"
      >
        Ranking de clubes (Top 10)
      </Link>
      <div className="w-full overflow-x-auto mx-auto">
        <div className="w-full flex md:justify-center gap-x-4 md:gap-x-6 pb-4">
          {data.slice(0, 10).map((item, index) => (
            <ReviewCard key={index} {...item} num={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubes;
