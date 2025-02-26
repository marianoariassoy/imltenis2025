interface data {
  id: number;
  image: string;
  name: string;
  club_id: number;
  gold: number;
  silver: number;
  supercopa: number;
  finals: number;
}

const estadisticas = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clubes/champions`
  );
  const data = (await response.json()) as data[];
  if (!data) return null;
  const stadistics = data.filter((x) => x.club_id === +id);

  return (
    (stadistics[0].gold ||
      stadistics[0].silver ||
      stadistics[0].supercopa ||
      stadistics[0].finals) && (
      <div className="text-center text-sm">
        🔥 El club
        {stadistics[0].gold ||
        stadistics[0].silver ||
        stadistics[0].supercopa ? (
          <span> ha obtenido </span>
        ) : null}
        {stadistics[0].gold ? (
          <>
            {stadistics[0].gold}
            {stadistics[0].gold > 1 ? " campeonatos" : " campeonato"}
          </>
        ) : null}
        {stadistics[0].silver ? (
          <>
            {stadistics[0].gold && ", "}
            {stadistics[0].silver}
            {stadistics[0].silver > 1 ? " copas plata" : " copa plata"}
          </>
        ) : null}
        {stadistics[0].supercopa ? (
          <>
            {(stadistics[0].gold || stadistics[0].silver > 0) && ", "}
            {stadistics[0].supercopa}
            {stadistics[0].supercopa > 1 ? " supercopas" : " supercopa"}
          </>
        ) : null}
        {stadistics[0].finals ? (
          <>
            {(stadistics[0].gold || stadistics[0].silver > 0) && " y "}
            <span> ha disputado {stadistics[0].finals} </span>
            {stadistics[0].finals > 1 ? " finales" : " final"}
          </>
        ) : null}
        .
      </div>
    )
  );
};

export default estadisticas;
