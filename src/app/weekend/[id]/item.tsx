import Link from "next/link";

const item = ({
  player1_slug,
  player2_slug,
  player1_name,
  player2_name,
}: {
  player1_slug: string;
  player2_slug: string;
  player1_name: string;
  player2_name: string;
}) => {
  return (
    <div className="flex flex-wrap gap-x-1">
      <Link
        href={`/jugadores/${player1_slug}`}
        className="hover:underline font-medium"
      >
        {player1_name}
      </Link>
      <span className="hidden lg:block"> / </span>
      <Link
        href={`/jugadores/${player2_slug}`}
        className="hover:underline font-medium"
      >
        {player2_name}
      </Link>
    </div>
  );
};

export default item;
