"use client";
import CountUp from "react-countup";

const count = ({ end, duration }: { end: number; duration: number }) => {
  return (
    <div className="text-2xl font-semibold text-primary">
      <CountUp end={end} duration={duration} />
    </div>
  );
};

export default count;
