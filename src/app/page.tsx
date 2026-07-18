"use client";
import { useEffect, useRef } from "react";
// import { useMenu } from "@/context/menu-context";
import Notice from "@/components/Notice";
import { AuroraText } from "@/components/ui/aurora-text";
import { Veinteventiseis } from "@/lib/icons";
import Whatsapp from "@/components/WhatsApp";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import ButtonIA from "@/components/ButtonIA";
import AIIntroBubble from "@/components/AIIntroBubble";

export default function Home() {
  // const { open, setOpen } = useMenu();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      <Whatsapp />

      <section className="h-screen w-full">
        <Notice />
        <AIIntroBubble />

        <div className="absolute top-1/2 left-1/2 text-center flex flex-col -translate-x-1/2 -translate-y-1/2 px-4 z-20 opacity-0 fade-in delay-100 items-center">
          <Link
            href="/presentacion"
            className="text-[3.2rem] md:text-[5.5rem] font-black leading-none tracking-tight flex flex-col transition-all cursor-pointer"
            // onClick={() => setOpen(!open)}
          >
            <AuroraText colors={["#7d37ff", "#fe514e", "#fe514e"]}>
              Torneo <br /> Interclubes <br /> Clausura <br />
              <div className="text-primary mt-2 mb-2 w-full flex justify-center">
                <Veinteventiseis />
              </div>
            </AuroraText>
          </Link>

          <div className="mt-4">
            <Countdown targetDate="2026-08-15T09:00:00" />
          </div>
        </div>

        <div className="fade-in absolute h-screen w-screen left-0 top-0 -z-10 overflow-hidden blur-sm">
          <div className="absolute w-full h-full top-0 left-0 bg-linear-to-b from-black/35 to-black/45 z-20"></div>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="opacity-80 h-screen w-screen object-cover saturate-[.8]"
          >
            <source src="/videos/video.webm" type="video/webm" />
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
