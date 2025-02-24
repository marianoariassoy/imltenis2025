import Link from "next/link";
import Image from "next/image";
import Confetti from "@/components/confetti";

const Champion = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/weekend/tournaments/${id}/champion`
  );
  const data = await response.json();
  if (!data) return null;

  return (
    <div className="flex flex-col items-center gap-y-3">
      <Confetti />
      <h1 className="italic font-black text-primary">Campeones</h1>
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={data.player1_image}
            alt={data.player1_name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={data.player2_image}
            alt={data.player2_name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex gap-1 items-center font-medium text-sm">
        <Link
          href={`/jugadores/${data.player1_id}`}
          className="hover:text-primary hover:opacity-100"
        >
          {data.player1_name}
        </Link>
        <span> / </span>
        <Link
          href={`/jugadores/${data.player2_id}`}
          className="hover:text-primary hover:opacity-100"
        >
          {data.player2_name}
        </Link>
      </div>
    </div>
  );
};

export default Champion;
