import { Marquee } from "@/components/ui/marquee";

const marquee = async ({ id_tournament }: { id_tournament: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournament/${id_tournament}/info`,
  );
  const data = await response.json();
  if (!data) return null;

  return <Marquee className="text-secondary -mt-8 -mb-4">{data.text}</Marquee>;
};

export default marquee;
