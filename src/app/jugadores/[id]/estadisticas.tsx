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
    <div className="w-full text-sm p-4 lg:p-6 bg-black/10 rounded-xl">
      <table className="w-full">
        <tbody>
          <tr>
            <td colSpan={3} className="py-2 font-semibold text-primary">
              Efectividad {percent.toFixed(0)}%
            </td>
          </tr>
          <tr>
            <td className="py-2">
              <div>Partidos jugados</div>
              <div className="text-primary">{data.matches_total}</div>
            </td>
            <td>
              <div>Partidos ganados</div>
              <div className="text-primary">{data.matches_won}</div>
            </td>
            <td>
              <div>Partidos perdidos</div>
              <div className="text-primary">
                {data.matches_total - data.matches_won}
              </div>
            </td>
          </tr>
          <tr>
            <td className="py-2">
              <div>Set jugados</div>
              <div className="text-primary">{data.sets_total}</div>
            </td>
            <td>
              <div>Set ganados</div>
              <div className="text-primary">{data.sets_won}</div>
            </td>
            <td>
              <div>Set perdidos</div>
              <div className="text-primary">
                {data.sets_total - data.sets_won}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default estadisticas;
