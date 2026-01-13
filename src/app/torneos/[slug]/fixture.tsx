import { Serie } from "@/types";
import Fixture from "@/components/Fixture";

const fixture = async ({
  id_tournament,
  title,
}: {
  id_tournament: string;
  title: boolean;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournament/${id_tournament}/series`
  );
  const data = (await response.json()) as Serie[];
  if (!data) return null;

  return <Fixture data={data} title={title} />;
};

export default fixture;
