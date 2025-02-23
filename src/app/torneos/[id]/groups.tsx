import Fixture from "./fixture";
import { Group } from "@/types";
import Table from "./table";

const groups = async ({ id_tournament }: { id_tournament: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/groups/${id_tournament}`
  );
  const data = (await response.json()) as Group[];
  if (!data) return null;

  return data.map((item) => (
    <div key={item.id} className="flex flex-col gap-y-6">
      <h1 className="italic font-black text-center text-primary">
        {item.name}
      </h1>

      {+item.type === 1 && <Fixture id_group={item.id} title={false} />}
      {+item.type === 3 && (
        <>
          <Table group={item} type={3} />
          <Fixture id_group={item.id} title={true} />
        </>
      )}
      {+item.type === 0 && (
        <>
          <Table group={item} type={0} />
          <Fixture id_group={item.id} title={true} />
        </>
      )}
    </div>
  ));
};

export default groups;
