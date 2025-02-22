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
    <div className="flex flex-col gap-y-3 items-center w-32">
      <Link href={link} className="hover:opacity-70 transition-opacity">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image
            src={image}
            width="80"
            height="80"
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="px-3 flex flex-col text-sm">
        <Link
          href={link}
          className="hover:underline text-primary font-semibold"
        >
          {title}
        </Link>
        <span className="text-secondary">{subtitle}</span>
      </div>
    </div>
  );
};

export default TeamItem;
