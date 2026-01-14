import Fixture from "@/components/Fixture";

const FixtureEquipos = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}/fixture`
  );
  const data = await response.json();
  if (!data) return null;

  return <Fixture data={data} title={true} />;
};

export default FixtureEquipos;
