import Link from "next/link";
import { SpinningText } from "@/components/ui/spinning-text";

const Notice = () => {
  return (
    <div className="absolute left-8 top-32 lg:left-20 z-30">
      <Link
        href="/presentacion"
        className="w-34 h-34 border-2 border-foreground text-foreground flex flex-col items-center justify-center rounded-full text-center font-medium text-sm hover:scale-105 transition-all"
      >
        <SpinningText>Torneo Clausura 2026 • Inscripciones •</SpinningText>
      </Link>
    </div>
  );
};

export default Notice;
