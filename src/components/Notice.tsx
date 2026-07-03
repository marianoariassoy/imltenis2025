import Link from "next/link";
import { SpinningText } from "@/components/ui/spinning-text";

const Notice = () => {
  return (
    <div className="absolute left-8 top-32 lg:left-1/2 lg:-translate-x-100 z-30 animate-in">
      <Link
        href="/presentacion"
        className="w-34 h-34 border-3 border-primary text-foreground flex flex-col items-center justify-center rounded-full text-center font-medium text-sm hover:scale-105 transition-all"
      >
        <SpinningText>Torneo Clausura 2026 • Inscripciones •</SpinningText>
      </Link>
    </div>
  );
};

export default Notice;
