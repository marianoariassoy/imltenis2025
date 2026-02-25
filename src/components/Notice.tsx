import Link from "next/link";

const Notice = () => {
  return (
    <div className="absolute left-8 top-30 lg:left-20">
      <Link
        href="/presentacion"
        className="w-32 h-32 bg-background text-white flex flex-col items-center justify-center rounded-full text-center font-medium leading-4 text-sm hover:bg-black/70 transition-all"
      >
        <span>Presentación</span>
        <span>Apertura</span>
        <span>2026</span>
      </Link>
    </div>
  );
};

export default Notice;
