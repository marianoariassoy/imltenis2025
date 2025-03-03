import Fixture from "./fixture";
import { Group } from "@/types";
import Table from "./table";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const groups = async ({ id_tournament }: { id_tournament: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/groups/${id_tournament}`
  );
  const data = (await response.json()) as Group[];
  if (!data) return null;

  return data.map((item) => (
    <div key={item.id} className="flex flex-col gap-y-6">
      <h1 className="italic font-black text-center text-primary text-xl">
        {item.name}
      </h1>

      {+item.type === 1 && (
        <Suspense fallback={<Loader />}>
          <Fixture id_group={item.id} title={false} />
        </Suspense>
      )}
      {+item.type === 3 && (
        <Suspense fallback={<Loader />}>
          <Table group={item} type={3} />
          <Fixture id_group={item.id} title={true} />
        </Suspense>
      )}
      {+item.type === 0 && (
        <Suspense fallback={<Loader />}>
          <Table group={item} type={0} />
          <Fixture id_group={item.id} title={true} />
        </Suspense>
      )}
    </div>
  ));
};

export default groups;
