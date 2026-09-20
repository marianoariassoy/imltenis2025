import Link from "next/link";
import Image from "next/image";

interface Item {
  link: string;
  title: string;
  subtitle: string;
  image: string;
}

const TeamItem = ({ link, title, subtitle, image }: Item) => {
  return (
    <div className="flex flex-col gap-2 items-center w-32">
      <Link href={link} className="hover:opacity-70 transition-opacity">
        <div className="w-18 h-18 md:w-20 md:h-20 rounded-full overflow-hidden">
          <Image
            src={image}
            width="80"
            height="80"
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="px-3 flex flex-col">
        <Link
          href={link}
          className="hover:underline text-primary font-semibold leading-5"
        >
          {title}
        </Link>
        <span className="text-secondary">{subtitle}</span>
      </div>
    </div>
  );
};

export default TeamItem;
