interface data {
  club_id: number;
  gold: number;
}

const estadisticas = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rankings/champions`
  );
  const data = (await response.json()) as data[];
  if (!data) return null;
  const stadistics = data.filter((x) => x.club_id === +id);
  if (stadistics.length === 0) return null;

  return stadistics[0].gold ? (
    <div className="flex gap-x-1 justify-center">
      {[...Array(+stadistics[0].gold)].map((_, index) => (
        <span key={index}>⭐️</span>
      ))}
    </div>
  ) : null;
};

export default estadisticas;
