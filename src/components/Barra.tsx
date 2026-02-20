"use client";
import { useEffect, useState } from "react";

const CountBar = ({ end }: { end: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => setProgress(end));
  }, [end]);

  return (
    <div className="w-3/4 bg-white/10 h-1 overflow-hidden">
      <span
        className="bg-primary h-full block transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default CountBar;
