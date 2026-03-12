import Fixture from "@/components/FixtureClubes";

const FixtureEquipos = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clubes/${id}/fixture`,
  );
  const data = await response.json();
  if (!data) return null;

  return <Fixture data={data} title={true} club_id={id} />;
};

export default FixtureEquipos;
