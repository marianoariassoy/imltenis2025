import Marquee from "@/components/Marquee";

const MarqueeComponent = async ({
  id_tournament,
}: {
  id_tournament: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournament/${id_tournament}/info`,
  );
  const data = await response.json();
  if (!data) return null;

  return <Marquee text={data.text} />;
};

export default MarqueeComponent;
