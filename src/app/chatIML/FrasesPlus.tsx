import { useState } from "react";

const FrasesPlys = () => {
  const [bubbleText, setBubbleText] = useState("");
  const [showBubble, setShowBubble] = useState(false);

  const frasesPlus = [
    "tampoco para tanto 😄",
    "soy una IA, no magia 🧠",
    "esto es un chat, no Wimbledon 🏆",
    "respirá… es solo tecnología 😌",
    "no era necesario hacer click en eso 😂",
    "te juzgo un poquito… pero con cariño 🤖",
  ];

  function getRandomFrase() {
    return frasesPlus[Math.floor(Math.random() * frasesPlus.length)];
  }
  return (
    <>
      <button
        onClick={() => {
          setBubbleText(getRandomFrase());
          setShowBubble(true);

          setTimeout(() => setShowBubble(false), 3500);
        }}
        className=" text-white text-3xl font-light h-12 w-12 rounded-full flex justify-center items-center hover:bg-white/10"
      >
        +
      </button>

      {showBubble && (
        <div className="absolute bottom-10 left-6 bg-black/60 text-white text-sm px-4 py-2 rounded-lg shadow-lg fade-in">
          {bubbleText}
        </div>
      )}
    </>
  );
};

export default FrasesPlys;
