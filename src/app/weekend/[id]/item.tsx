import Link from "next/link";

const item = ({
  player1_id,
  player2_id,
  player1_name,
  player2_name,
}: {
  player1_id: string;
  player2_id: string;
  player1_name: string;
  player2_name: string;
}) => {
  return (
    <div className="flex flex-wrap gap-x-1">
      <Link
        href={`/jugadores/${player1_id}`}
        className="hover:underline font-medium"
      >
        {player1_name}
      </Link>
      <span className="hidden lg:block"> / </span>
      <Link
        href={`/jugadores/${player2_id}`}
        className="hover:underline font-medium"
      >
        {player2_name}
      </Link>
    </div>
  );
};

export default item;
