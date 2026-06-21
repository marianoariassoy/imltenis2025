import Title from "@/components/Title";
import Link from "next/link";
import { Container } from "@/components/Container";

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
    <Container>
      <Title title="IML Weekend" />

      <div className="flex flex-col gap-y-3 items-center mt-8">
        {data.map((item) => (
          <Link
            href={`/weekend/${item.id}`}
            className="hover:text-primary flex flex-col items-center"
            key={item.id}
          >
            <span className="text-primary font-bold">{item.title}</span>
            <span>
              {item.date} {item.hour}
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default page;
