import Link from "next/link";
import { Robot } from "../lib/icons";

const ButtonIA = () => {
  return (
    <Link
      href="/chatiml"
      className="fixed bottom-40 md:bottom-32 right-4 text-foreground bg-background/80 w-16 h-16 rounded-full 
        text-3xl transition-all flex items-center justify-center  hover:scale-105 "
    >
      <Robot />
    </Link>
  );
};

export default ButtonIA;
