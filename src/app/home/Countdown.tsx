"use client";

import { useEffect, useMemo, useState } from "react";
import { Marquee } from "@/components/ui/marquee";

type TournamentDate = {
  title: string;
  date: Date | string;
};

type CountdownProps = {
  dates: TournamentDate[];
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

function getNextDate(dates: TournamentDate[]): TournamentDate | null {
  const now = Date.now();

  return (
    dates
      .map((item) => ({
        ...item,
        date: typeof item.date === "string" ? new Date(item.date) : item.date,
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .find((item) => item.date.getTime() > now) ?? null
  );
}

export default function Countdown({
  dates,
  onComplete,
  className = "",
}: CountdownProps) {
  const [current, setCurrent] = useState<TournamentDate | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const sortedDates = useMemo(
    () =>
      dates
        .map((item) => ({
          ...item,
          date: typeof item.date === "string" ? new Date(item.date) : item.date,
        }))
        .sort((a, b) => a.date.getTime() - b.date.getTime()),
    [dates],
  );

  useEffect(() => {
    const update = () => {
      const next = getNextDate(sortedDates);

      if (!next) {
        setCurrent(null);
        setTimeLeft(null);
        onComplete?.();
        return;
      }

      setCurrent(next);
      setTimeLeft(calculateTimeLeft(next.date as Date));
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [sortedDates, onComplete]);

  if (!current || !timeLeft) {
    return null;
  }

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-10 md:w-12 text-2xl font-semibold text-secondary">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="text-sm font-medium uppercase tracking-wide text-secondary">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full px-4 md:px-16 fade-in text-center">
      <h2 className="font-medium text-lg mb-1 text-secondary">
        <span className="hidden md:block">
          {(() => {
            const date = current.date.toLocaleString("es-AR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return date.charAt(0).toUpperCase() + date.slice(1);
          })()}{" "}
          — {""} {current.title}
        </span>
        <span className="md:hidden">
          {(() => {
            const date = current.date.toLocaleString("es-AR", {
              weekday: "long",
              month: "long",
              day: "numeric",
            });
            return date.charAt(0).toUpperCase() + date.slice(1);
          })()}{" "}
          — {""} {current.title}
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
