"use client";
import CountUp from "react-countup";

const count = ({
  end,
  duration,
  percent,
}: {
  end: number;
  duration: number;
  percent: boolean;
}) => {
  return (
    <div className="text-2xl text-primary font-semibold flex items-center gap-x-1">
      <CountUp end={end} duration={duration} />
      {percent && <span>%</span>}
    </div>
  );
};

export default count;
