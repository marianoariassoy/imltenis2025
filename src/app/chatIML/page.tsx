"use client";
import { useState } from "react";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import FrasesPlus from "./FrasesPlus";

export default function TestPage() {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [titulo, setTitulo] = useState("");
  const [textoOriginal, setTextoOriginal] = useState("");
  const [loading, setLoading] = useState(false);
  const [iniciado, setIniciado] = useState(false);

  const enviar = async (texto?: string) => {
    const msg = texto || mensaje;
    if (!msg) return;

    setLoading(true);
    setIniciado(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ mensaje: msg }),
    });

    const data = await res.json();

    setRespuesta(data.respuesta);
    setTitulo(data.titulo);
    setTextoOriginal(data.texto_original);
    setMensaje("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-y-10 lg:gap-y-20">
      <Title title="Chat IML" emoji="🤖" description="1.0.0" />

      {/* {!iniciado && (
        <p className="text-center font-semibold">
          Consultame sobre el reglamento o hacerme preguntas generales 😉
        </p>
      )} */}

      {loading && <Loader />}

      {respuesta && (
        <div className="text-center">
          <h3>📌 {titulo}</h3>

          <p>{respuesta}</p>

          {textoOriginal && (
            <details>
              <summary>📄 Ver reglamento</summary>
              <p>{textoOriginal}</p>
            </details>
          )}
        </div>
      )}

      <div className="w-full h-16 bg-white/10 rounded-full shadow-lg relative">
        <FrasesPlus />

        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Pregunta algo"
          className="w-full h-full py-4 bg-transparent border-none px-6 focus:outline-none focus:ring-0 placeholder:text-secondary resize-none pl-16 text-lg"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // 🔥 evita salto de línea
              enviar();
            }
          }}
        />
      </div>

      {!iniciado && (
        <div className="text-center">
          <p className="mb-2">
            <strong>Podes probar con:</strong>
          </p>
          <ul className="text-secondary">
            <li
              onClick={() => enviar("¿Qué pasa si llueve?")}
              style={{ cursor: "pointer" }}
              className="hover:text-primary"
            >
              ¿Qué pasa si llueve?
            </li>
            <li
              onClick={() => enviar("¿Qué horarios se juegan?")}
              style={{ cursor: "pointer" }}
              className="hover:text-primary"
            >
              ¿Qué horarios se juegan?
            </li>
            <li
              onClick={() => enviar("¿Cómo se cargan los resultados?")}
              style={{ cursor: "pointer" }}
              className="hover:text-primary"
            >
              ¿Cómo se cargan los resultados?
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
