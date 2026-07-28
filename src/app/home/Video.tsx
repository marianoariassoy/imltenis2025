"use client";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="fade-in absolute h-screen w-full left-0 top-0 -z-10 overflow-hidden blur-sm">
      <div className="absolute w-full h-full top-0 left-0 bg-linear-to-b from-black/35 to-black/45 z-20"></div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="opacity-80 h-screen w-screen object-cover saturate-[.8] "
      >
        <source src="/videos/video.webm" type="video/webm" />
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
