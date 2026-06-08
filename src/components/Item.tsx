import Link from "next/link";
import Image from "next/image";
import { obtenerAbreviado } from "@/lib/abbreviations";

interface Item {
  num?: number;
  image: string;
  title: string;
  link: string;
  active: boolean;
}

const TitleRow = ({ num, image, title, link, active }: Item) => {
  return (
    <div className="flex items-center gap-x-3">
      {num && (
        <div className={`font-bold mr-1 ${active ? "text-primary" : null}`}>
          {num}
        </div>
      )}

      <div className="w-[3.7rem] h-[3.7rem] rounded-full overflow-hidden bg-white/10">
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
        className="hover:text-primary text-nowrap font-semibold pr-4"
      >
        <span className="hidden md:block">{title}</span>
        <span className="block md:hidden">{obtenerAbreviado(title)}</span>
      </Link>
    </div>
  );
};

export default TitleRow;
