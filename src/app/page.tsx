export default function Home() {
  return (
    <section>
      <h1 className="fade-in font-black text-center text-[3.9rem] leading-none lg:text-8xl text-primary flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-6">
        <span>Torneo</span>
        <span>Apertura</span>
        <span>
          Yuka <span className="block lg:inline">2025</span>
        </span>
      </h1>
      <div className="blur-out fixed h-screen w-screen left-0 top-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="opacity-40 h-full w-full object-cover"
        >
          <source src="./videos/video.webm" type="video/webm" />
          <source src="./videos/video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
