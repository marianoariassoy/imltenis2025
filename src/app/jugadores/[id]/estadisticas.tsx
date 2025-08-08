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
    <div className="w-full text-sm p-4 lg:p-6 bg-black/10 rounded-xl shadow-lg">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="py-1">
              <div>Partidos jugados</div>
              <Count end={data.matches_total} duration={2} />
            </td>
            <td>
              <div>Partidos ganados</div>
              <Count end={data.matches_won} duration={4} />
            </td>
          </tr>
          <tr>
            <td className="py-1">
              <div>Set jugados</div>
              <Count end={data.sets_total} duration={2} />
            </td>
            <td>
              <div>Set ganados</div>
              <Count end={data.sets_won} duration={4} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="py-1">
              <div>Efectividad</div>
              <div className="font-semibold text-primary flex">
                <Count end={+percent.toFixed(0)} duration={4} />
                <span className="text-primary text-lg font-bold">%</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default estadisticas;
