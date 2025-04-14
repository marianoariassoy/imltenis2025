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
    <div className="flex items-center gap-x-3 text-sm">
      {num && (
        <div className={`font-medium ${active ? "text-primary" : ""}`}>
          {num}
        </div>
      )}

      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 dark:bg-black/10 shadow">
        {image ? (
          <Link href={link}>
            <Image
              src={image}
              alt={title}
              width={64}
              height={64}
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
