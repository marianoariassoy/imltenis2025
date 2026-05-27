import Link from "next/link";
import Image from "next/image";
import { obtenerAbreviado } from "@/lib/abbreviations";

interface Item {
  image: string;
  title: string;
  link: string;
}

const TitleRow = ({ image, title, link }: Item) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-11 h-11 rounded-full overflow-hidden bg-white/10 shadow-md">
        {image ? (
          <Link href={link}>
            <Image
              src={image}
              alt={title}
              width={44}
              height={44}
              className="object-cover h-full w-full hover:opacity-70 transition-opacity"
            />
          </Link>
        ) : null}
      </div>
      <Link href={link} className="hover:text-primary font-semibold pr-2">
        <span className="hidden md:block">{title}</span>
        <span className="block md:hidden">{obtenerAbreviado(title)}</span>
      </Link>
    </div>
  );
};

export default TitleRow;
