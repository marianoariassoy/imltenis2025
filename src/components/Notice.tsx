import Link from "next/link";

const Notice = () => {
  return (
    <div className="absolute left-4 top-20 lg:left-20">
      <Link
        href="/presentacion"
        className="w-32 h-32 bg-black text-white flex flex-col items-center justify-center rounded-full text-center font-medium leading-4 text-sm hover:bg-black/70 transition-all"
      >
        <span>Torneo</span>
        <span>Clausura</span>
        <span>2025</span>
      </Link>
    </div>
  );
};

export default Notice;
