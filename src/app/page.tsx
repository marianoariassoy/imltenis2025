export default function Home() {
  return (
    <section>
      <div className="absolute top-1/2 left-1/2 fade-in-slow text-center flex flex-col -translate-x-1/2 -translate-y-1/2 px-4 z-30 opacity-0 ">
        <h1 className="text-5xl md:text-[5.5rem] font-black text-primary leading-none tracking-tight flex flex-col -mt-10">
          <span>Torneo</span>
          <span>Interclubes</span>
          <span>Apertura</span>
          <span>Yuka 2026</span>
        </h1>
        <button className="font-medium mt-8 hover:underline">
          Ver información →
        </button>
      </div>
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
    </section>
  );
}
