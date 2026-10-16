"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";

type Props = {
  playerName: string;
};

export default function DownloadDiploma({ playerName }: Props) {
  const diplomaRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!diplomaRef.current) return;

    setLoading(true);
    try {
      // Genera la imagen a partir del contenedor oculto con alta calidad (pixel ratio 2)
      const dataUrl = await toPng(diplomaRef.current, {
        cacheBust: true,
        pixelRatio: 2, // Duplica la resolución para que se vea ultra nítido al imprimir
      });

      const link = document.createElement("a");
      link.download = `Diploma_${playerName.replace(/\s+/g, "_")}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error al generar el diploma:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        disabled={loading}
        className="text-sm text-primary font-medium hover:underline transition cursor-pointer disabled:opacity-50"
      >
        {loading ? "Generando diploma..." : "Descargar diploma"}
      </button>

      {/* CONTENEDOR OCULTO: 
          Lo mantenemos fuera de la pantalla (absolute -left-[9999px]) pero renderizado 
          con las proporciones exactas de tu imagen original para que la librería capture todo perfecto. */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <div
          ref={diplomaRef}
          style={{
            width: "2000px", // Ancho base de alta resolución para impresión
            height: "1414px", // Proporción exacta de tu plantilla horizontal (A4 apaisado aprox)
            position: "relative",
            backgroundImage: `url('/images/diploma.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Capa de texto posicionada exactamente sobre la línea de tu plantilla */}
          <div
            style={{
              position: "absolute",
              top: "48%", // Porcentaje vertical exacto donde va el nombre en tu diseño
              left: "0",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "68px",
                fontWeight: "800",
                color: "#152b6b", // Color azul marino exacto de tu diseño
                letterSpacing: "4px",
                fontFamily: "serif", // O una fuente similar a la que usaste
                margin: 0,
              }}
            >
              {playerName}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
