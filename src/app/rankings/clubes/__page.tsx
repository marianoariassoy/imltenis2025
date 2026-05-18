import Title from "@/components/Title";
import Info from "@/components/Info";
import Barra from "@/components/Barra";
import Link from "next/link";

export const metadata = {
  title: "Ranking de Clubes",
  description: "Ranking de Clubes de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/rankings/clubes",
    title: "Ranking de Clubes",
    description: "Ranking de Clubes de la liga de clubes IML Tenis",
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
  image: string;
  name: string;
  club_id: string;
  club_slug: string;
  matches_won: string;
  series_won: string;
  series_total: string;
  matches_total: string;
}

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/clubes",
    {
      cache: "no-store",
    },
  );

  const data = (await response.json()) as data[];

  if (!data) return;

  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-4 justify-center">
        <Title title="Ranking de Clubes 2026" emoji="🏆" />
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div
          className="
            hidden
            md:grid
            grid-cols-[80px_minmax(0,1fr)_100px_100px_100px_140px]
            items-center
            px-2
            mb-2
            text-xs
            uppercase
            tracking-wider
            text-zinc-500
          "
        >
          <div className="pl-2">Pos</div>
          <div className="px-4">Club</div>
          <div className="text-center">Pts.</div>
          <div className="text-center">SG</div>
          <div className="text-center">SJ</div>
          <div></div>
        </div>

        <div className="flex flex-col gap-2">
          {data.map((item, index) => {
            const progress =
              (+item.matches_won / (+item.series_total * 3)) * 100;

            return (
              <Link
                href={`/clubes/${item.club_slug}`}
                key={index}
                className="
                  relative
                  grid
                  grid-cols-[60px_minmax(0,1fr)_80px]
                  md:grid-cols-[80px_minmax(0,1fr)_100px_100px_100px_140px]
                  items-center
                  rounded-2xl
                  border
                  border-white/5
                  bg-zinc-900/70
                  py-4
                  transition-all
                  hover:bg-zinc-900
                  hover:border-white/10
                  hover:scale-[1.01]
                  shadow-[0_0_20px_rgba(0,0,0,.2)]
                "
              >
                {/* TOP 4 */}
                {index < 4 && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-l-2xl" />
                )}

                {/* POSICION */}
                <div
                  className={`
                    pl-4
                    text-2xl
                    font-black
                    ${index < 4 ? "text-primary" : "text-zinc-500"}
                  `}
                >
                  {index + 1}
                </div>

                {/* CLUB */}
                <div className="flex items-center gap-4 px-4 min-w-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                      border
                      border-white/10
                      bg-black/20
                      shrink-0
                    "
                  />

                  <div className="flex flex-col min-w-0 leading-tight">
                    <span
                      className="
                        font-semibold
                        text-base
                        md:text-xl
                      "
                    >
                      {item.name}
                    </span>

                    {index < 4 && (
                      <span className="text-xs text-primary font-medium mt-1">
                        Clasificación Interclubes
                      </span>
                    )}
                  </div>
                </div>

                {/* PTS DESKTOP */}
                <div
                  className={`
                    hidden
                    md:flex
                    items-center
                    justify-center
                    text-lg
                    font-bold
                    ${index < 4 ? "text-primary" : "text-white"}
                  `}
                >
                  {item.matches_won}
                </div>

                {/* SG */}
                <div
                  className="
                    hidden
                    md:flex
                    items-center
                    justify-center
                    text-lg
                  "
                >
                  {item.series_won}
                </div>

                {/* SJ */}
                <div
                  className="
                    hidden
                    md:flex
                    items-center
                    justify-center
                    text-lg
                  "
                >
                  {item.series_total}
                </div>

                {/* BARRA */}
                <div className="hidden md:block px-4">
                  <Barra end={progress} />
                </div>

                {/* MOBILE PTS */}
                <div className="md:hidden pr-4 text-right">
                  <div className="text-primary font-bold text-xl">
                    {item.matches_won}
                  </div>

                  <div className="text-[10px] uppercase text-zinc-500">Pts</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* INFO */}
      <Info
        text="Los cuatro (4) clubes mejor ubicados competirán en las finales de interclubes al cierre de la temporada 2026."
        color="primary"
      />

      {/* CAMPEONES */}
      <div className="p-6 rounded-2xl bg-black/10">
        <h2 className="font-bold text-primary text-center mb-4">
          Campeones Interclubes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
          <div>
            <h2 className="font-bold text-primary">2025</h2>

            <span className="font-semibold">⭐️ Caza y Pesca</span>
          </div>

          <div>
            <h2 className="font-bold text-primary">2024</h2>

            <span className="font-semibold">⭐️ SAG</span>
          </div>

          <div>
            <h2 className="font-bold text-primary">2023</h2>

            <span className="font-semibold">⭐️ San Miguel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
