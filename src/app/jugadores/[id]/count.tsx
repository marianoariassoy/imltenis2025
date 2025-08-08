"use client";
import CountUp from "react-countup";

const count = ({ end, duration }: { end: number; duration: number }) => {
  return (
    <div className="text-primary text-lg font-bold">
      <CountUp end={end} duration={duration} />
    </div>
  );
};

export default count;
