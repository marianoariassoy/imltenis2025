import Link from "next/link";
import Image from "next/image";

interface Item {
  num?: number;
  image: string;
  title: string;
  link: string;
  active: boolean;
}

const TitleRow = ({ num, image, title, link, active }: Item) => {
  return (
    <div className="flex items-center gap-x-2">
      {num && (
        <div className={`font-medium mr-1 ${active ? "text-primary" : null}`}>
          {num}
        </div>
      )}

      <div className="w-[3.5rem] h-[3.5rem] lg:w-16  lg:h-16 rounded-full overflow-hidden bg-white/10">
        {image ? (
          <Link href={link}>
            <Image
              src={image}
              alt={title}
              width={48}
              height={48}
              className="w-full h-full object-cover hover:opacity-70 transition-opacity"
            />
          </Link>
        ) : null}
      </div>

      <Link
        href={link}
        className="hover:text-primary text-nowrap font-medium pr-3"
      >
        {title}
      </Link>
    </div>
  );
};

export default TitleRow;
