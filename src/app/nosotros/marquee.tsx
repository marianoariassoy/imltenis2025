import Marquee from "@/components/Marquee";

const MarqueeComponent = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/stadistics",
    {
      cache: "no-store",
    },
  );
  const data = await response.json();
  if (!data) return null;

  const text =
    "Temporadas: " +
    data.seasons +
    " - Torneos: " +
    data.tournaments +
    " - Zonas: " +
    data.groups +
    " - Equipos: " +
    data.teams +
    " - Clubes: " +
    data.clubes +
    " - Series: " +
    data.series +
    " - Partidos: " +
    data.matches +
    " - Jugadores: " +
    data.players +
    " - Seguidores: " +
    data.followers +
    " -";

  return (
    <div className="-mt-4 -mb-2">
      <Marquee text={text} />
    </div>
  );
};

export default MarqueeComponent;
