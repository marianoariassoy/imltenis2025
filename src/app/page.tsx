export default function Home() {
  return (
    <section className="h-full flex items-center justify-center">
      <h1 className="fade-in font-black text-center text-[3.9rem] leading-none lg:text-8xl text-primary flex flex-col">
        <span>Torneo</span>
        <span>Apertura</span>
        <span>
          Yuka <span className="block lg:inline">2025</span>
        </span>
      </h1>
      <div className="blur-out fixed h-screen w-screen left-0 top-0 -z-10">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="opacity-40 h-full w-full object-cover"
        >
          <source src="./video.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
