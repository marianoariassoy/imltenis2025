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
    " - Jugadores: " +
    data.players +
    " - Partidos: " +
    data.matches +
    " - Jugadores: " +
    data.players +
    " - Partidos:" +
    data.matches +
    " - Seguidores: " +
    data.followers +
    " -";

  return <Marquee text={text} />;
};

export default MarqueeComponent;
