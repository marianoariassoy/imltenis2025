import Link from "next/link";

const ButtonIA = () => {
  return (
    <Link
      href="/chatiml"
      className="fixed bottom-40 md:bottom-30 right-4 text-foreground bg-background/80 w-16 h-16 rounded-full 
        text-3xl transition-all flex items-center justify-center  hover:scale-105"
    >
      🤖
    </Link>
  );
};

export default ButtonIA;
