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
    `${process.env.NEXT_PUBLIC_API_URL}/groups/series/${id_group}`
  );
  const data = (await response.json()) as Serie[];
  if (!data) return null;

  return <Fixture data={data} title={title} />;
};

export default fixture;
