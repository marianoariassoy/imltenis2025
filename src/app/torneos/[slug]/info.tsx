"use client";
import { useState } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoShow = ({ text }: { text: string }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="flex gap-x-2 px-4 py-4 border-2 border-primary text-primary rounded-xl mb-2 cursor-pointer"
      onClick={() => setShow(!show)}
    >
      <span className="text-primary text-base">
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
