import Link from "next/link";
import Image from "next/image";

interface Props {
  player1_id: string;
  player2_id: string;
  player1_name: string;
  player2_name: string;
  player1_image: string;
  player2_image: string;
}

const Item = ({ item }: { item: Props }) => {
  return (
    <div className="flex items-center flex-row gap-y-2 gap-x-3 lg:gap-x-5">
      <article className="flex items-center gap-x-2">
        <div className="w-12 h-12 rounded-full overflow-hidden hover:opacity-70">
          <Link href={`/jugadores/${item.player1_id}`}>
            <Image
              src={item.player1_image}
              alt={item.player1_name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </Link>
        </div>
        <Link
          href={`/jugadores/${item.player1_id}`}
          className="hover:text-primary font-medium"
        >
          {item.player1_name}
        </Link>
      </article>
      <article className="flex items-center gap-x-2">
        <div className="w-12 h-12 rounded-full overflow-hidden hover:opacity-70">
          <Link href={`/jugadores/${item.player2_id}`}>
            <Image
              src={item.player2_image}
              alt={item.player2_name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </Link>
        </div>
        <Link
          href={`/jugadores/${item.player2_id}`}
          className="hover:text-primary font-medium"
        >
          {item.player2_name}
        </Link>
      </article>
    </div>
  );
};

export default Item;
