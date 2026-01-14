"use client";
import CountUp from "react-countup";

const count = ({ end, duration }: { end: number; duration: number }) => {
  return (
    <div className="text-lg font-semibold text-primary">
      <CountUp end={end} duration={duration} />
    </div>
  );
};

export default count;
