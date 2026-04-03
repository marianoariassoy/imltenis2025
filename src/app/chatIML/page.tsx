"use client";

import { useState } from "react";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import FrasesPlus from "./FrasesPlus";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function TestPage() {
  const [mensaje, setMensaje] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [iniciado, setIniciado] = useState(false);

  const enviar = async (texto?: string) => {
    const msg = texto || mensaje;
    if (!msg) return;

    setLoading(true);
    setIniciado(true);

    // 👉 agrego mensaje del usuario al chat
    setMessages((prev) => [...prev, { role: "user", content: msg }]);

    setMensaje("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mensaje: msg }),
    });

    const data = await res.json();

    // 👉 agrego respuesta de la IA
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.respuesta },
    ]);

    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-y-10 lg:gap-y-20 relative">
      <Title title="Chat IML" emoji="🤖" description="1.0.0" />

      {/* 💬 CHAT AREA */}
      <div className="flex flex-col gap-4 w-full">
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

        {loading && (
          <div className="mr-auto">
            <Loader />
          </div>
        )}
      </div>

      {/* 💬 INPUT */}
      <div className="sticky bottom-16 w-full h-16 bg-[#333333] rounded-full shadow-lg">
        <FrasesPlus />

        <input
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Pregunta algo"
          className="w-full h-full bg-transparent border-none px-6 focus:outline-none focus:ring-0 placeholder:text-secondary resize-none pl-16"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              enviar();
            }
          }}
        />
      </div>

      {/* 💡 SUGERENCIAS */}
      {!iniciado && (
        <div className="text-center">
          <p className="mb-2">
            <strong>Podes probar con:</strong>
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
    </div>
  );
}
