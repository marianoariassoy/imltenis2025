import Link from "next/link";
import { SpinningText } from "@/components/ui/spinning-text";

const Notice = () => {
  return (
    <div className="absolute left-8 top-24 lg:left-1/2 lg:-translate-x-100 z-30 animate-in">
      <Link
        href="/docs/imlweekendpinamar2027.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-34 h-34 border-2 border-foreground text-foreground flex flex-col items-center justify-center rounded-full text-center font-medium text-sm hover:scale-105 transition-all"
      >
        <SpinningText>IML Weekend Pinamar 5,6,7 Marzo 2027</SpinningText>
      </Link>
    </div>
  );
};

export default Notice;
