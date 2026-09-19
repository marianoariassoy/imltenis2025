import Notice from "@/components/Notice";
import { Veinteventiseis } from "@/lib/icons";
import Whatsapp from "@/components/WhatsApp";
import Countdown from "./home/countdown";
import AIIntroBubble from "@/components/AIIntroBubble";
import Video from "./home/video";
import Ordendejuego from "./home/ordendejuego";
import Link from "next/link";

export default function Home() {
  const dates = [
    {
      title: "Fecha 1",
      date: "2026-08-22T13:00:00",
    },
    {
      title: "Fecha 2",
      date: "2026-08-29T13:00:00",
    },
    {
      title: "Fecha 3",
      date: "2026-09-05T13:00:00",
    },
    {
      title: "Fecha 4",
      date: "2026-09-12T13:00:00",
    },
    {
      title: "Fecha 5",
      date: "2026-09-19T13:00:00",
    },
    {
      title: "Fecha 6",
      date: "2026-09-26T13:00:00",
    },
    {
      title: "Fecha 7",
      date: "2026-10-03T13:00:00",
    },
    {
      title: "Fecha 8",
      date: "2026-10-10T13:00:00",
    },
    {
      title: "Fecha 9",
      date: "2026-10-17T13:00:00",
    },
    {
      title: "Fecha 10",
      date: "2026-10-24T13:00:00",
    },
    {
      title: "Fecha 11",
      date: "2026-10-31T13:00:00",
    },
    {
      title: "Fecha 12",
      date: "2026-11-07T13:00:00",
    },
    {
      title: "Fecha 13",
      date: "2026-11-14T13:00:00",
    },
  ];

  const isWeekend = () => {
    const now = new Date();
    return now.getDay() === 0 || now.getDay() === 6;
  };

  const getRelevantDate = () => {
    const now = new Date();

    // Domingo pertenece a la fecha del sábado anterior
    const reference = new Date(now);

    if (reference.getDay() === 0) {
      reference.setDate(reference.getDate() - 1);
    }

    return (
      dates
        .slice()
        .reverse()
        .find((item) => {
          const date = new Date(item.date);

          // La fecha corresponde desde el lunes anterior
          // hasta el domingo de esa semana
          const monday = new Date(date);
          monday.setDate(date.getDate() - 5);
          monday.setHours(0, 0, 0, 0);

          const nextMonday = new Date(monday);
          nextMonday.setDate(monday.getDate() + 7);

          return reference >= monday && reference < nextMonday;
        }) ?? dates[0]
    );
  };

  const relevantDate = getRelevantDate();

  return (
    <>
      <section className="h-screen w-full">
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex flex-col opacity-0 fade-in delay-100 items-center justify-center gap-2 px-4">
          <Link
            href="/orden-de-juego"
            className="text-[3.3rem] md:text-[5.5rem] font-black leading-none tracking-tight flex flex-col transition-all cursor-pointer text-primary"
          >
            Torneo <br /> Interclubes <br /> Clausura <br />
            <div className="text-primary mt-2 mb-2 w-full flex justify-center">
              <Veinteventiseis />
            </div>
          </Link>
        </div>

        <div className="absolute w-full bottom-8 px-4">
          {!isWeekend() ? (
            <Countdown date={relevantDate} />
          ) : (
            <Ordendejuego date={relevantDate} />
          )}
        </div>
      </section>

      <Notice />
      <AIIntroBubble />
      <Whatsapp />
      <Video />
    </>
  );
}
