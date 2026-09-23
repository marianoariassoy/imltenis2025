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
        <div
          className={`font-bold mr-2 ${active ? "text-primary" : "text-secondary"}`}
        >
          {num}
        </div>
      )}

      <div className="w-14 h-14 lg:w-[3.7rem] lg:h-[3.7rem] rounded-full overflow-hidden bg-white/10">
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
        className="hover:text-primary text-nowrap font-semibold pr-2"
      >
        {title}
      </Link>
    </div>
  );
};

export default TitleRow;
