// import Link from "next/link";
import { Serie } from "@/types/";
import { Marquee } from "@/components/ui/marquee";

type TournamentDate = { title: string; date: Date | string };

function getWeekendMatch(dates: TournamentDate[]): TournamentDate | null {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return (
    dates.find((item) => {
      const matchDate =
        typeof item.date === "string" ? new Date(item.date) : item.date;

      // Normalizamos la fecha del torneo a las 00:00
      const startDate = new Date(
        matchDate.getFullYear(),
        matchDate.getMonth(),
        matchDate.getDate(),
      );

      // Fin de semana: abarca el día de la fecha + el día siguiente
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 2);

      return today >= startDate && today < endDate;
    }) ?? null
  );
}

function formatWeekendRange(matchDate: Date): string {
  // Sábado (día de la fecha)
  const saturday = new Date(
    matchDate.getFullYear(),
    matchDate.getMonth(),
    matchDate.getDate(),
  );

  // Domingo (sábado + 1 día)
  const sunday = new Date(saturday);
  sunday.setDate(saturday.getDate() + 1);

  const day1 = saturday.getDate();
  const day2 = sunday.getDate();

  const month = saturday.toLocaleString("es-AR", { month: "long" });

  return `${day1} y ${day2} de ${month}`;
}

const page = async ({ dates }: { dates: TournamentDate[] }) => {
  const weekendMatch = getWeekendMatch(dates);

  if (!weekendMatch) return null;

  const matchDate =
    typeof weekendMatch.date === "string"
      ? new Date(weekendMatch.date)
      : weekendMatch.date;

  const dateText = formatWeekendRange(matchDate);

  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/series/upcoming",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as Serie[];
  if (!data) return null;

  const description =
    dateText +
    " — " +
    weekendMatch.title +
    " — " +
    (data.length + 10) * 3 +
    " partidos en " +
    (data.length + 10) +
    " series, " +
    (data.length + 10) * 2 +
    " equipos, con un total de " +
    (data.length + 10) * 10 +
    " jugadores en la fecha — ";

  // const text =
  //   dateText +
  //   " — " +
  //   weekendMatch.title +
  //   " — " +
  //   (data.length + 10) * 3 +
  //   " partidos en  " +
  //   (data.length + 10) +
  //   " series con un total de " +
  //   (data.length + 10) * 10 +
  //   " jugadores en la fecha — ";

  return (
    <Marquee className="w-full max-w-sm md:max-w-5xl mx-auto font-medium text-lg">
      {description}
    </Marquee>
  );
};

export default page;
