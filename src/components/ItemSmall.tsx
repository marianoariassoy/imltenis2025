import Link from "next/link";
import Image from "next/image";

interface Item {
  image: string;
  title: string;
  link: string;
}

const TitleRow = ({ image, title, link }: Item) => {
  return (
    <div className="flex items-center gap-x-3 text-sm">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        {image ? (
          <Link href={link} className="hover:opacity-70 transition-opacity">
            <Image
              src={image}
              alt={title}
              width={120}
              height={120}
              className="object-cover h-full w-full"
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
