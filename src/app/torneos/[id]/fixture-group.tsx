import { Serie } from "@/types";
import Fixture from "@/components/Fixture";

const fixture = async ({
  id_group,
  title,
}: {
  id_group: string;
  title: boolean;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/groups/${id_group}/series`
  );
  const data = (await response.json()) as Serie[];
  if (!data) return null;

  return <Fixture data={data} title={title} />;
};

export default fixture;
