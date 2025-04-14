import Image from "next/image";

interface Item {
  image: string;
  title: string;
}

const TitleRow = ({ image, title }: Item) => {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10 shadow">
      {image ? (
        <Image
          src={image}
          alt={title}
          width={32}
          height={32}
          className="object-cover h-full w-full"
        />
      ) : null}
    </div>
  );
};

export default TitleRow;
