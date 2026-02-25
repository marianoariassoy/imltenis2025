import Count from "./count";
import Barra from "@/components/Barra";

const estadisticas = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/stats/${id}`,
  );
  const data = await response.json();
  if (!data) return null;

  if (data.matches_total === 0) return null;

  const calcularPorcentaje = (
    partidosGanados: number,
    partidosJugados: number,
  ): number => {
    if (partidosJugados === 0) {
      return 0;
    }
    return (partidosGanados / partidosJugados) * 100;
  };

  const percent = calcularPorcentaje(data.matches_won, data.matches_total);

  return (
    <div className="w-full p-6 rounded-2xl mb-2 bg-black/15 shadow-md">
      <div className="w-full grid grid-cols-2 items-center gap-y-2 gap-x-4">
        <div>
          <div>Partidos jugados</div>
          <Count end={data.matches_total} duration={2} percent={false} />
        </div>
        <div>
          <div>Partidos ganados</div>
          <Count end={data.matches_won} duration={4} percent={false} />
        </div>

        <div>
          <div>Sets jugados</div>
          <Count end={data.sets_total} duration={2} percent={false} />
        </div>
        <div>
          <div>Sets ganados</div>
          <Count end={data.sets_won} duration={4} percent={false} />
        </div>

        <div>
          <div>Efectividad</div>
          <div className="flex flex-col gap-y-2">
            <Count end={+percent.toFixed(0)} duration={4} percent={true} />
            <Barra end={+percent.toFixed(0)} />
          </div>
        </div>
        <div>
          <div>ID de jugador</div>
          <span className="text-primary text-2xl font-semibold">
            {+id + 1000}
          </span>
        </div>
      </div>
    </div>
  );
};

export default estadisticas;
