// "use client";

// import { useState } from "react";
import { Info } from "@/lib/icons";

const InfoShow = ({ text }: { text: string }) => {
  // const [show, setShow] = useState(false);

  // const handleClick = () => {
  //   setShow(!show);
  // };
  return (
    <div className="flex gap-x-3 p-3 border-2 border-primary text-primary rounded-xl mb-2">
      <span className="text-primary mt-1">
        <Info />
      </span>
      <span className="whitespace-break-spaces opacity-70">{text}</span>
    </div>
  );
};

export default InfoShow;
