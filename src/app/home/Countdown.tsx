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

// Obtiene la fecha activa (si coincide con hoy) o la próxima fecha futura
function getCurrentOrNextDate(
  dates: TournamentDate[],
  isWeekend: boolean,
): TournamentDate | null {
  const now = new Date();

  if (isWeekend) {
    // Durante el fin de semana, busca si hay un torneo agendado para hoy
    const todayMatch = dates.find((item) => {
      const d = item.date as Date;
      return (
        d.getFullYear() === now.getFullYear() &&
        d.getMonth() === now.getMonth() &&
        d.getDate() === now.getDate()
      );
    });

    if (todayMatch) return todayMatch;
  }

  // De lunes a viernes (o si no hay fecha agendada para hoy), busca la próxima
  return (
    dates.find((item) => (item.date as Date).getTime() > now.getTime()) ?? null
  );
}

export default function Countdown({
  dates,
  onComplete,
  className = "",
}: CountdownProps) {
  const [current, setCurrent] = useState<TournamentDate | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isWeekend, setIsWeekend] = useState<boolean>(false);

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
      const now = new Date();
      const dayOfWeek = now.getDay();

      // 0 = Domingo, 6 = Sábado
      const weekend = dayOfWeek === 0 || dayOfWeek === 6;
      setIsWeekend(weekend);

      const active = getCurrentOrNextDate(sortedDates, weekend);
      if (!active) {
        setCurrent(null);
        setTimeLeft(null);
        onComplete?.();
        return;
      }
      setCurrent(active);
      setTimeLeft(calculateTimeLeft(active.date as Date));
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [sortedDates, onComplete]);

  // En fin de semana solo necesitamos 'current'
  if (!current || (!isWeekend && !timeLeft)) {
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

  if (!isWeekend && timeLeft) {
    return (
      <div className={`w-full px-4 md:px-16 fade-in text-center ${className}`}>
        <h2 className="font-medium text-lg mb-1 text-secondary">
          <span className="hidden md:block">
            {(() => {
              const date = (current.date as Date).toLocaleString("es-AR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return date.charAt(0).toUpperCase() + date.slice(1);
            })()}{" "}
            — {current.title}
          </span>
          <span className="md:hidden">
            {(() => {
              const date = (current.date as Date).toLocaleString("es-AR", {
                weekday: "long",
                month: "long",
                day: "numeric",
              });
              return date.charAt(0).toUpperCase() + date.slice(1);
            })()}{" "}
            — {current.title}
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

  return (
    <div className={`w-full px-4 md:px-16 fade-in text-center ${className}`}>
      <h2 className="font-medium text-lg mb-1 text-secondary">
        Jugándose la {current.title} 🔥
      </h2>
    </div>
  );
}
