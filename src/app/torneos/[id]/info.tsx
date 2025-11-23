// "use client";

// import { useState } from "react";
import { Info } from "@/lib/icons";

const InfoShow = ({ text }: { text: string }) => {
  // const [show, setShow] = useState(false);

  // const handleClick = () => {
  //   setShow(!show);
  // };
  return (
    <div className="flex gap-x-3 text-sm p-4 bg-white/5 transition-colors rounded-xl ">
      <span className="text-primary mt-1">
        <Info />
      </span>
      <span className="whitespace-break-spaces">{text}</span>
    </div>
  );
};

export default InfoShow;
