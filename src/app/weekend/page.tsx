import Title from "@/components/Title";
import Link from "next/link";

export const metadata = {
  title: "IML Weekend",
};

interface Props {
  id: string;
  title: string;
  date: string;
  hour: string;
}

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/weekend/tournaments",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as Props[];

  return (
    <section className="flex flex-col gap-y-6">
      <Title title="IML Weekend" emoji="😎" />

      <div className="flex flex-col gap-y-3 items-center text-sm">
        {data.map((item) => (
          <Link
            href={`/weekend/${item.id}`}
            className="hover:underline flex flex-col items-center"
            key={item.id}
          >
            <span className="text-primary font-semibold">{item.title}</span>
            <span>
              {item.date} {item.hour}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
