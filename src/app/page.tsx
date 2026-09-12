import Notice from "@/components/Notice";
import { AuroraText } from "@/components/ui/aurora-text";
import { Veinteventiseis } from "@/lib/icons";
import Whatsapp from "@/components/WhatsApp";
import Countdown from "./home/countdown";
import AIIntroBubble from "@/components/AIIntroBubble";
import Video from "./home/video";
import Current from "./home/current";
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
    const weekend = now.getDay() === 0 || now.getDay() === 6;
    return weekend;
  };

  return (
    <>
      <section className="h-screen w-full">
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex flex-col opacity-0 fade-in delay-100 items-center justify-center gap-2 px-4">
          <div className="text-[3.4rem] md:text-[5.5rem] font-black leading-none tracking-tight flex flex-col transition-all cursor-pointer">
            <AuroraText colors={["#7d37ff", "#fe514e", "#fe514e"]}>
              Torneo <br /> Interclubes <br /> Clausura <br />
              <div className="text-primary mt-2 mb-2 w-full flex justify-center">
                <Veinteventiseis />
              </div>
            </AuroraText>
          </div>
        </div>

        {!isWeekend() ? (
          <div className="absolute w-full bottom-20 md:bottom-10 px-4">
            <Link
              href="/orden-de-juego"
              className="text-secondary hover:text-foreground"
            >
              <Countdown dates={dates} />
            </Link>
          </div>
        ) : (
          <div className="absolute w-full bottom-32 md:bottom-10 px-4">
            <Link
              href="/orden-de-juego"
              className="text-secondary hover:text-foreground"
            >
              <Current dates={dates} />
            </Link>
          </div>
        )}
      </section>

      <Notice />
      <AIIntroBubble />
      <Whatsapp />
      <Video />
    </>
  );
}
