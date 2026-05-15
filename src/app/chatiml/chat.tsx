"use client";

import { useState, useRef, useEffect } from "react";
import Loader from "@/components/Loader";
import FrasesPlus from "./FrasesPlus";
import { ChevronDown } from "@/lib/icons";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const ChatIML = () => {
  const [mensaje, setMensaje] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [typingMessage, setTypingMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingMessage]);

  useEffect(() => {
    const bienvenida = "¡Hola! Soy Chat IML 😄, ¿en qué puedo ayudarte?";

    setTimeout(() => {
      setIsTyping(true);

      typeText(bienvenida, () => {
        setMessages([{ role: "assistant", content: bienvenida }]);
        setTypingMessage("");
        setIsTyping(false);
      });
    }, 600); // delay inicial
  }, []);

  // ✍️ animación de escritura (FIXED)
  const typeText = (text: string, callback?: () => void) => {
    let i = 0;
    let current = "";

    setTypingMessage("");

    const interval = setInterval(
      () => {
        current += text.charAt(i);
        setTypingMessage(current);
        i++;

        if (i >= text.length) {
          clearInterval(interval);
          callback?.();
        }
      },
      10 + Math.random() * 20,
    ); // velocidad variable 😏
  };

  const enviar = async (texto?: string) => {
    const msg = texto || mensaje;
    if (!msg) return;

    setLoading(true);

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
    <>
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
            placeholder="Preguntá algo"
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
          {!loading ? (
            <button
              className="bg-white hover:bg-white/80 rounded-full text-background w-10 h-10 text-xl flex items-center justify-center duration-300"
              onClick={() => enviar()}
            >
              <span className="rotate-180">
                <ChevronDown />
              </span>
            </button>
          ) : (
            <button
              className="bg-white/50 rounded-full text-background w-10 h-10 text-xl flex items-center justify-center"
              disabled
            >
              <span className="rotate-180">
                <ChevronDown />
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatIML;
