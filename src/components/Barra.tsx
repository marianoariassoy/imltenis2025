"use client";
import { useEffect, useState } from "react";

const CountBar = ({ end, className }: { end: number; className?: string }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => setProgress(end));
  }, [end]);

  return (
    <div
      className={`w-24 rounded-2xl bg-white/10 h-1 overflow-hidden ${className}`}
    >
      <span
        className="bg-primary h-full block transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default CountBar;
