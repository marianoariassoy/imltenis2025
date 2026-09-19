"use client";

import { useEffect, useState } from "react";

type TournamentDate = {
  title: string;
  date: Date | string;
};

type CountdownProps = {
  date: TournamentDate;
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

function formatDateRange(startDate: Date, includeYear: boolean = true): string {
  const day1 = startDate.getDate();

  const nextDate = new Date(startDate);
  nextDate.setDate(startDate.getDate() + 1);

  const day2 = nextDate.getDate();

  const month = startDate.toLocaleString("es-AR", {
    month: "long",
  });

  if (includeYear) {
    const year = startDate.getFullYear();
    return `${day1} y ${day2} de ${month} de ${year}`;
  }

  return `${day1} y ${day2} de ${month}`;
}

export default function Countdown({
  date,
  onComplete,
  className = "",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const targetDate =
    typeof date.date === "string" ? new Date(date.date) : date.date;

  useEffect(() => {
    const update = () => {
      const remaining = calculateTimeLeft(targetDate);

      setTimeLeft(remaining);

      if (remaining.total <= 0) {
        onComplete?.();
      }
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  if (!timeLeft) {
    return null;
  }

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-10 md:w-12 text-2xl font-semibold">
        {value.toString().padStart(2, "0")}
      </div>

      <span className="text-sm font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`w-full px-4 md:px-16 fade-in text-center ${className}`}>
      <h2 className="font-medium text-lg mb-1">
        <span className="hidden md:block">
          {formatDateRange(targetDate, true)} — {date.title}
        </span>

        <span className="md:hidden">
          {formatDateRange(targetDate, false)} — {date.title}
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        <Item value={timeLeft.days} label="D" />
        <Item value={timeLeft.hours} label="H" />
        <Item value={timeLeft.minutes} label="M" />
        <Item value={timeLeft.seconds} label="S" />
      </div>
    </div>
  );
}
