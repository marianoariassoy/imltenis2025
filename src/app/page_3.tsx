import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="absolute top-1/2 left-1/2 fade-in-slow text-center flex flex-col -translate-x-1/2 -translate-y-1/2 px-20 z-30 opacity-0 gap-y-2 lg:gap-y-4 w-full max-w-xl">
        <h2 className="uppercase tracking-wide font-semibold text-[1.2rem] lg:text-2xl">
          I n t e r c l u b e s
        </h2>
        <span>
          <img src="/assets/hero.svg" alt="" />
        </span>
        <h1 className="uppercase font-semibold text-[1.2rem] lg:text-[1.7rem] tracking-wide">
          Torneo Apertura Yuka
        </h1>
        <button className="font-medium mt-2 hover:underline">
          Ver información →
        </button>
      </div>

      <div className="fixed top-0 left-0 w-screen h-screen fade-in">
        <div className="absolute w-full h-full top-0 left-0  bg-gradient-to-b from-black/40 via-black/0 to-transparent z-20"></div>

        <Image
          src="/images/2.png"
          width={1920}
          height={1280}
          alt="1"
          className="w-full h-full object-cover blur-sm"
        />
      </div>
    </section>
  );
}
