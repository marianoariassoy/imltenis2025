"use client";
import { useState } from "react";
import { Info, ChevronDown } from "@/lib/icons";

const InfoShow = ({
  text,
  color = "primary",
}: {
  text: string;
  color?: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`flex justify-between items-start gap-x-1 px-2 py-3 lg:p-4 border-2 rounded-xl cursor-pointer ${color === "secondary" ? "text-secondary border-secondary" : "text-primary border-primary"}`}
      onClick={() => setShow(!show)}
    >
      <span>
        <Info />
      </span>
      <span
        className={`leading-tight flex-1 ${
          show
            ? "whitespace-break-spaces"
            : "line-clamp-2 whitespace-break-spaces"
        }`}
      >
        {text}
      </span>
      <span
        className={`text-lg transition-transform ${show ? "rotate-180" : ""}`}
      >
        <ChevronDown />
      </span>
    </div>
  );
};

export default InfoShow;
