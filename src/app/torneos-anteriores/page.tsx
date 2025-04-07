import Title from "@/components/Title";
import Link from "next/link";
import { Tournament } from "../../types";

export const metadata = {
  title: "Torneos anteriores",
};

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/tournaments"
  );
  const data = (await response.json()) as Tournament[];

  return (
    <section className="flex flex-col gap-y-6">
      <Title title="Torneos Anteriores" emoji="👴" />

      <div className="flex flex-col gap-y-1 items-center font-medium text-sm">
        {data &&
          data
            .filter((item) => item.season !== 5)
            .map((item) => (
              <Link
                key={item.id}
                href={`/torneos/${item.id}`}
                className="hover:text-primary"
              >
                <span>{item.name}</span> {item.season_name}
              </Link>
            ))}
      </div>
    </section>
  );
};

export default page;
