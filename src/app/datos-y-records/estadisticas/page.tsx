import { Container } from "@/components/Container";
import Count from "@/components/Count";
import Title from "@/components/Title";

export const metadata = {
  title: "Estadísticas",
};

const Estadisticas = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/stadistics",
    {
      cache: "no-store",
    },
  );
  const data = await response.json();
  if (!data) return null;

  return (
    <Container>
      <Title title="Estadísticas" description="Desde 2023" />

      <div className="w-full p-6 rounded-xl bg-black/15 mt-4">
        <div className="w-full grid grid-cols-2 items-start gap-y-2 gap-x-4">
          <div>
            <div>Temporadas</div>
            <Count end={data.seasons} duration={10} percent={false} />
          </div>
          <div>
            <div>Torneos</div>
            <Count end={data.tournaments} duration={4} percent={false} />
          </div>
          <div>
            <div>Grupos</div>
            <Count end={data.groups} duration={4} percent={false} />
          </div>
          <div>
            <div>Series</div>
            <Count end={data.series} duration={2} percent={false} />
          </div>
          <div>
            <div>Partidos</div>
            <Count end={data.matches} duration={4} percent={false} />
          </div>
          <div>
            <div>Equipos</div>
            <Count end={data.teams} duration={2} percent={false} />
          </div>
          <div>
            <div>Jugadores</div>
            <Count end={data.players} duration={4} percent={false} />
          </div>
          <div>
            <div>Seguidores</div>
            <Count end={data.followers} duration={6} percent={false} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Estadisticas;
