import Link from "next/link";
import Image from "next/image";
import { obtenerPrimerNombreYApellido } from "@/lib/abbreviations";

interface Item {
  image: string;
  title: string;
  link: string;
}

const TitleRow = ({ image, title, link }: Item) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-13 h-13 rounded-full overflow-hidden bg-white/20 shadow-md">
        {image ? (
          <Link href={link} className="shrink-0">
            <Image
              src={image}
              alt={title}
              width={52}
              height={52}
              className="object-cover h-full w-full hover:opacity-70 transition-opacity"
            />
          </Link>
        ) : null}
      </div>
      <Link
        href={link}
        className="hover:text-primary pr-4 font-semibold whitespace-nowrap"
      >
        {obtenerPrimerNombreYApellido(title)}
      </Link>
    </div>
  );
};

export default TitleRow;
