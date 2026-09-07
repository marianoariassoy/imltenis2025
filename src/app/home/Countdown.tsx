"use client";
import { useEffect, useMemo, useState } from "react";

type TournamentDate = { title: string; date: Date | string };
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
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
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
  return dates.find((item) => (item.date as Date).getTime() > now) ?? null;
}

// Función auxiliar para formatear las fechas con rango de dos días seguidos
function formatDateRange(startDate: Date, includeYear: boolean = true): string {
  const day1 = startDate.getDate();

  // Clonamos la fecha y sumamos 1 día
  const nextDate = new Date(startDate);
  nextDate.setDate(startDate.getDate() + 1);
  const day2 = nextDate.getDate();

  // Obtenemos el nombre del mes
  const month = startDate.toLocaleString("es-AR", { month: "long" });

  if (includeYear) {
    const year = startDate.getFullYear();
    return `${day1} y ${day2} de ${month} de ${year}`;
  }

  return `${day1} y ${day2} de ${month}`;
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
        .sort(
          (a, b) => (a.date as Date).getTime() - (b.date as Date).getTime(),
        ),
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
    <div className={`w-full px-4 md:px-16 fade-in text-center ${className}`}>
      <h2 className="font-medium text-lg mb-1 text-secondary">
        <span className="hidden md:block">
          {formatDateRange(current.date as Date, true)} — {current.title}
        </span>
        <span className="md:hidden">
          {formatDateRange(current.date as Date, false)} — {current.title}
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
