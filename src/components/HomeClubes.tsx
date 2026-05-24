import Link from "next/link";
import Image from "next/image";

interface data {
  image: string;
  name: string;
  club_id: string;
  club_slug: string;
  matches_won: string;
  series_won: string;
  series_total: string;
  matches_total: string;
}

const HomeClubes = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/clubes",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as data[];
  if (!data) return;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="font-bold text-primary text-xl">Clubes</h2>
        <Link
          href="/rankings/clubes"
          className="font-medium hover:border-secondary hover:text-secondary border border-primary rounded-md px-4 py-2 text-primary"
        >
          Ver Ranking
        </Link>
      </div>
      <div className="flex gap-6 overflow-hidden">
        {data
          .filter((item) => +item.matches_won > 0)
          .map((item, index) => (
            <article key={index} className="flex gap-3">
              <span
                className={`font-bold text-2xl mt-4 ${index < 4 ? "text-primary" : ""}`}
              >
                {index + 1}
              </span>
              <div className="flex flex-col items-center gap-1">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10">
                  <Link href={`/clubes/${item.club_slug}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover hover:opacity-70 transition-opacity"
                    />
                  </Link>
                </div>
                <span className="text-secondary text-center text-sm">
                  {item.matches_won} pts.
                </span>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default HomeClubes;
