import Count from "./count";

const estadisticas = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/stats/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  if (data.matches_total === 0) return null;

  const calcularPorcentaje = (
    partidosGanados: number,
    partidosJugados: number
  ): number => {
    if (partidosJugados === 0) {
      return 0;
    }
    return (partidosGanados / partidosJugados) * 100;
  };

  const percent = calcularPorcentaje(data.matches_won, data.matches_total);

  return (
    <div className="w-full p-4 lg:p-6 border border-primary rounded-xl">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="py-1">
              <div className="text-primary font-semibold">Partidos jugados</div>
              <Count end={data.matches_total} duration={2} />
            </td>
            <td>
              <div className="text-primary font-semibold">Partidos ganados</div>
              <Count end={data.matches_won} duration={4} />
            </td>
          </tr>
          <tr>
            <td className="py-1">
              <div className="text-primary font-semibold">Set jugados</div>
              <Count end={data.sets_total} duration={2} />
            </td>
            <td>
              <div className="text-primary font-semibold">Set ganados</div>
              <Count end={data.sets_won} duration={4} />
            </td>
          </tr>
          <tr>
            <td className="py-1">
              <div className="text-primary font-semibold">Efectividad</div>
              <div className="font-medium flex">
                <Count end={+percent.toFixed(0)} duration={4} />
                <span className="text-lg font-medium">%</span>
              </div>
            </td>
            <td>
              <div className="text-primary font-semibold">ID Jugador</div>
              <span className="text-lg font-medium"> {+id + 1000}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default estadisticas;
