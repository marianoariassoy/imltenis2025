import Link from "next/link";
import Image from "next/image";

interface Item {
  image: string;
  title: string;
  link: string;
}

const TitleRow = ({ image, title, link }: Item) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-14 h-14 rounded-full overflow-hidden bg-white/10 dark:bg-black/10 shadow-md">
        {image ? (
          <Link href={link}>
            <Image
              src={image}
              alt={title}
              width={56}
              height={56}
              className="object-cover h-full w-full hover:opacity-70 transition-opacity"
            />
          </Link>
        ) : null}
      </div>
      <Link href={link} className="hover:text-primary font-medium pr-4">
        {title}
      </Link>
    </div>
  );
};

export default TitleRow;
