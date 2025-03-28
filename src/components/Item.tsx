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
          <Link href={link}>
            <Image
              src={image}
              alt={title}
              width={56}
              height={56}
              className="w-full h-full object-cover hover:opacity-70 transition-opacity"
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
