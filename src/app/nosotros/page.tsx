"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

const Nosotros = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <Container>
      <div className="aspect-square lg:aspect-video overflow-hidden rounded-2xl mt-4">
        <Image
          src="/images/2026.png"
          className="w-full h-full object-cover object-center"
          width={1200}
          height={1200}
          alt="Portada"
        />
      </div>

      <div className="flex flex-col gap-y-4">
        <p>
          En Argentina, el deporte ocupa un lugar central en la vida
          comunitaria, y los clubes constituyen una de las instituciones
          sociales más representativas.
        </p>
        <p>
          Un club no se limita a la práctica deportiva: es un{" "}
          <span className="text-primary">
            espacio de encuentro, integración y pertenencia{" "}
          </span>{" "}
          que transmite valores, fortalece vínculos y genera identidad
          colectiva.{" "}
        </p>
        <p>
          En este contexto, el tenis —tradicionalmente concebido como un deporte
          individual— adquiere una nueva dimensión a través de la competencia
          interclubes. Representar a una institución implica no solo competir,
          sino también{" "}
          <span className="text-primary">
            vivir una experiencia compartida que combina deporte, compromiso y
            sentido de comunidad.
          </span>
        </p>
        <p>
          <span className="text-primary">IML Tenis</span> se propone promover y
          consolidar estos valores, ofreciendo un marco competitivo que, más
          allá de los resultados deportivos, brinde a cada jugador, capitán y
          equipo una experiencia enriquecedora, sustentada en{" "}
          <span className="text-primary">
            la pasión, el respeto y la pertenencia.
          </span>
        </p>
      </div>

      <div className="aspect-4/5 lg:aspect-video overflow-hidden rounded-2xl">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="object-cover object-center w-full h-full"
          poster="/videos/video-poster.jpg"
        >
          <source src="/videos/video-presentation.mp4" type="video/mp4" />
          <source src="/videos/video-presentation.webm" type="video/webm" />
        </video>
      </div>

      <div className="flex flex-col gap-y-4">
        <p>
          <span className="text-primary">IML Tenis </span>es uno de los
          interclubes de tenis amateur más importantes de la zona, con más de{" "}
          <span className="text-primary">200 equipos</span> y{" "}
          <span className="text-primary">20 categorías</span> que abarcan
          distintos niveles de juego en damas, caballeros y mixtos.
        </p>
        <p>
          En esta competencia vas a compartir una experiencia única junto a tu
          grupo de amigos:{" "}
          <span className="text-primary">representando a tu club o barrio</span>
          , jugando en tus propias canchas y descrubriendo nuevas sedes y
          rivales cada semana.
        </p>
        <p>
          Todos los{" "}
          <span className="text-primary">
            resultados, tablas de posiciones, estadísticas y rankings
          </span>{" "}
          se actualizan online y de forma permanente, brindando una experiencia{" "}
          <span className="text-primary">
            transparente, moderna y accesible
          </span>{" "}
          para todos los participantes. Seguí el rendimiento de tu equipo,
          consultá estadísticas individuales y grupales, compará rendimientos y
          accedé a toda la información del torneo en cualquier momento y desde
          cualquier dispositivo.
        </p>
        <p>
          Vas a poder recibir{" "}
          <span className="text-primary">
            premios, reconocimientos y beneficios exclusivos
          </span>
          . Podés ser elegido como{" "}
          <span className="text-primary">Jugador Destacado de la Fecha</span>,
          liderar el <span className="text-primary">ranking individual</span> y
          acceder a importantes premios al final de la temporada. Además, cada
          punto que sumes impulsa a tu equipo y a tu club a escalar posiciones
          en el <span>ranking anual de clubes</span>.
        </p>
        <p className="text-primary font-semibold">
          IML Tenis, donde el tenis se vive, se comparte y se convierte en
          historia.
        </p>
      </div>
    </Container>
  );
};

export default Nosotros;
