"use client";
import Notice from "@/components/Notice";

export default function Home() {
  const handleMenu = () => {
    const nav = document.querySelector("#menu") as HTMLElement;
    nav.classList.toggle("hidden");
  };

  return (
    <section>
      <h1
        className="fade-in font-black text-center text-[3.9rem] leading-none lg:text-8xl text-primary flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer lg:hover:brightness-125 transition-all"
        onClick={handleMenu}
      >
        <span>Torneo</span>
        <span>Apertura</span>
        <span>
          Yuka <span className="block lg:inline">2025</span>
        </span>
      </h1>
      <div className="fade-in blur-sm fixed h-screen w-screen left-0 top-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="opacity-50 h-full w-full object-cover"
        >
          <source src="/videos/video.webm" type="video/webm" />
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </div>

      <Notice />
    </section>
  );
}
