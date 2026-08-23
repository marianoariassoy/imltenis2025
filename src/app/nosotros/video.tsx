"use client";
import { useEffect, useRef } from "react";

const video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);
  return (
    <div className="aspect-4/5 lg:aspect-video overflow-hidden rounded-2xl">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="object-cover object-center w-full h-full saturate-80 brightness-80"
        poster="/images/2026.png"
      >
        <source src="/videos/video-presentation.mp4" type="video/mp4" />
        <source src="/videos/video-presentation.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default video;
