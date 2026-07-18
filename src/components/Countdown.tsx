"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: Date | string;
  onComplete?: () => void;
  className?: string;
};

type TimeLeft = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown({
  targetDate,
  onComplete,
  className = "",
}: CountdownProps) {
  const target =
    typeof targetDate === "string" ? new Date(targetDate) : targetDate;

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = calculateTimeLeft(target);

      setTimeLeft(newTime);

      if (newTime.total <= 0) {
        clearInterval(interval);
        onComplete?.();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return <div className="text-center text-2xl font-bold">¡Comenzó!</div>;
  }

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-10 text-3xl font-bold text-primary">
        {value.toString().padStart(2, "0")}
      </div>

      <span className="text-sm font-medium uppercase tracking-wide text-secondary">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      <Item value={timeLeft.days} label="D" />
      <Item value={timeLeft.hours} label="H" />
      <Item value={timeLeft.minutes} label="M" />
      <Item value={timeLeft.seconds} label="S" />
    </div>
  );
}
