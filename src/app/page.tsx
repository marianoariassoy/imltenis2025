"use client";
import { useEffect, useRef } from "react";
import { useMenu } from "@/context/menu-context";
import Notice from "@/components/Notice";
import { AuroraText } from "@/components/ui/aurora-text";
import { Veinteventiseis } from "@/lib/icons";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  const { open, setOpen } = useMenu();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      <section className="h-screen w-full">
        <Notice />

        <div className="absolute top-1/2 left-1/2 text-center flex flex-col -translate-x-1/2 -translate-y-1/2 px-4 z-20 opacity-0 fade-in delay-100">
          <h1
            className="text-[3.2rem] md:text-[5.5rem] font-black leading-none tracking-tight flex flex-col transition-all cursor-pointer "
            onClick={() => setOpen(!open)}
          >
            <AuroraText colors={["#9b37ff", "#fe514e", "#fe514e"]}>
              Torneo <br /> Interclubes <br /> Apertura <br />
              <div className="text-primary mt-2 mb-2 w-full flex justify-center">
                <Veinteventiseis />
              </div>
            </AuroraText>
          </h1>

          <button
            className="font-medium mt-4 hover:underline text-secondary cursor-pointer "
            onClick={() => setOpen(!open)}
          >
            Ver categorías →
          </button>
        </div>

        <div className="fade-in absolute h-screen w-screen left-0 top-0 -z-10 overflow-hidden blur-sm">
          <div className="absolute w-full h-full top-0 left-0 bg-linear-to-b from-black/35 to-black/50 z-20"></div>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="opacity-80 h-screen w-screen object-cover saturate-[.7]"
          >
            <source src="/videos/video.webm" type="video/webm" />
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <WhatsApp />
    </>
  );
}
