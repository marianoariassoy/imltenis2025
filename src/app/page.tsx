"use client";
import { useEffect, useRef } from "react";
import { useMenu } from "@/context/menu-context";
import Notice from "@/components/Notice";
import Link from "next/link";

export default function Home() {
  const { open, setOpen } = useMenu();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section>
      <Notice />
      <div className="absolute top-1/2 left-1/2 fade-in-slow text-center flex flex-col -translate-x-1/2 -translate-y-1/2 px-4 z-30 opacity-0 cursor-pointer">
        <h1
          className="text-[3.2rem] md:text-[5.5rem] font-black text-primary leading-none tracking-tight flex flex-col lg:hover:brightness-125 transition-all"
          onClick={() => setOpen(!open)}
        >
          <span>Torneo</span>
          <span>Interclubes</span>
          <span>Apertura</span>
          <span>Yuka 2026</span>
        </h1>
        <Link href="/nosotros" className="font-medium mt-4 hover:underline">
          Ver información →
        </Link>
      </div>
      <div className="fade-in fixed h-screen w-screen left-0 top-0 -z-10 bg-black/60 blur-sm">
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/40 via-black/0 to-black/40 z-20"></div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="opacity-60 h-screen w-screen object-cover saturate-[.9]"
        >
          <source src="/videos/video.webm" type="video/webm" />
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
