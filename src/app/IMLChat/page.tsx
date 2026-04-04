"use client";

import { useState, useRef, useEffect } from "react";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import FrasesPlus from "./FrasesPlus";
import { ChevronDown } from "@/lib/icons";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function TestPage() {
  const [mensaje, setMensaje] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [iniciado, setIniciado] = useState(false);
  const [typingMessage, setTypingMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingMessage]);

  // ✍️ animación de escritura (FIXED)
  const typeText = (text: string, callback?: () => void) => {
    let i = 0;
    let current = "";

    setTypingMessage("");

    const interval = setInterval(() => {
      current += text.charAt(i);
      setTypingMessage(current);

      i++;

      if (i >= text.length) {
        clearInterval(interval);
        callback?.();
      }
    }, 12);
  };

  const enviar = async (texto?: string) => {
    const msg = texto || mensaje;
    if (!msg) return;

    setLoading(true);
    setIniciado(true);

    // 👤 mensaje usuario
    setMessages((prev) => [...prev, { role: "user", content: msg }]);

    setMensaje("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mensaje: msg,
        historial: messages,
      }),
    });

    const data = await res.json();
    const reply = data.respuesta;

    // ✍️ activar typing
    setIsTyping(true);

    typeText(reply, () => {
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);

      setTypingMessage("");
      setIsTyping(false);
    });

    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-y-10 lg:gap-y-20 relative">
      <Title
        title="Chat IML"
        emoji="🤖"
        description="Impulsado por inteligencia artificial v1.0.0"
      />

      {/* 💬 CHAT AREA */}
      <div className="flex flex-col gap-4 w-full">
        {/* 💡 SUGERENCIAS */}
        {!iniciado && (
          <div className="text-center fade-in">
            <h2 className="mb-4 font-bold text-xl lg:text-2xl px-4">
              ¡Hola!, ¿En que puedo ayudarte?
            </h2>
            <p className="mb-2 text-secondary font-semibold">
              Podes probar con:
            </p>
            <ul className="text-secondary">
              <li
                onClick={() => enviar("¿Qué pasa si llueve?")}
                className="hover:text-primary cursor-pointer"
              >
                ¿Qué pasa si llueve?
              </li>
              <li
                onClick={() => enviar("¿Qué horarios se juegan?")}
                className="hover:text-primary cursor-pointer"
              >
                ¿Qué horarios se juegan?
              </li>
              <li
                onClick={() => enviar("¿Cómo se cargan los resultados?")}
                className="hover:text-primary cursor-pointer"
              >
                ¿Cómo se cargan los resultados?
              </li>
            </ul>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-5 py-3 rounded-2xl whitespace-pre-wrap text-sm lg:text-base ${
              m.role === "user"
                ? "ml-auto bg-primary text-white"
                : "mr-auto bg-white/10 text-white"
            }`}
          >
            {m.content}
          </div>
        ))}

        {/* ✍️ typing en vivo */}
        {isTyping && typingMessage && (
          <div className="max-w-[80%] mr-auto bg-white/10 px-5 py-3 rounded-2xl text-white text-sm lg:text-base">
            {typingMessage}
            <span className="animate-pulse">▍</span>
          </div>
        )}

        {/* ⏳ loader solo si no está tipeando */}
        {loading && !isTyping && (
          <div className="mr-auto">
            <Loader />
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* 💬 INPUT */}
      <div className="sticky bottom-16 w-full h-16 bg-[#333333] rounded-full shadow-lg flex items-center px-3 gap-2">
        <div>
          <FrasesPlus />
        </div>

        <div className="flex-1">
          <input
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Pregunta algo"
            className="w-full bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-secondary resize-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                enviar();
              }
            }}
          />
        </div>
        <div>
          <button
            className="bg-white hover:bg-white/80 rounded-full text-background w-10 h-10 text-xl flex items-center justify-center duration-300"
            onClick={() => enviar()}
          >
            <span className="rotate-180">
              <ChevronDown />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
