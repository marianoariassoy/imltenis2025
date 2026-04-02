"use client";
import { useState } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      className={`flex gap-x-1 p-2 lg:p-4 border-2 rounded-xl cursor-pointer ${color === "secondary" ? "text-secondary border-secondary" : "text-primary border-primary"}`}
      onClick={() => setShow(!show)}
    >
      <span className="text-base">
        <FontAwesomeIcon icon={faCircleInfo} size="lg" width={20} />
      </span>
      <span
        className={`leading-tight transition-all ${
          show
            ? "whitespace-break-spaces"
            : "line-clamp-2 whitespace-break-spaces"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default InfoShow;
