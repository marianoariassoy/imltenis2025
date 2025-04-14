import Link from "next/link";
import Image from "next/image";

interface Item {
  image: string;
  title: string;
  link: string;
}

const TitleRow = ({ image, title, link }: Item) => {
  return (
    <div className="flex items-center gap-x-2 text-sm">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 dark:bg-black/10 shadow-md">
        {image ? (
          <Link href={link}>
            <Image
              src={image}
              alt={title}
              width={48}
              height={48}
              className="object-cover h-full w-full hover:opacity-70 transition-opacity"
            />
          </Link>
        ) : null}
      </div>
      <Link href={link} className="hover:text-primary font-semibold pr-3">
        {title}
      </Link>
    </div>
  );
};

export default TitleRow;
