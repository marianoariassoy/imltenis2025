import Link from "next/link";
import Image from "next/image";

interface Item {
  num?: number;
  image: string;
  title: string;
  link: string;
}

const TitleRow = ({ num, image, title, link }: Item) => {
  return (
    <div className="flex items-center gap-x-3 text-sm">
      {num && <div className="font-semibold">{num}</div>}

      <div className="w-14 h-14 rounded-full overflow-hidden bg-white/10">
        {image ? (
          <Link href={link} className="hover:opacity-70 transition-opacity">
            <Image
              src={image}
              alt={title}
              width={120}
              height={120}
              className="w-full h-full object-cover"
            />
          </Link>
        ) : null}
      </div>

      <Link
        href={link}
        className="hover:text-primary font-semibold text-nowrap pr-3"
      >
        {title}
      </Link>
    </div>
  );
};

export default TitleRow;
