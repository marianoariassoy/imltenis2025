import Image from "next/image";
import { Container } from "@/components/Container";
import Title from "@/components/Title";

export const metadata = {
  title: "Nosotros",
};

const page = () => {
  return (
    <Container>
      <Title title="¡Hola!" emoji="👋" />

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
        <div className="aspect-square lg:aspect-video overflow-hidden rounded-2xl">
          <Image
            src="/images/2026.png"
            className="w-full h-full object-cover object-center"
            width={1200}
            height={1200}
            alt="Portada"
          />
        </div>
        <p>
          Desde su nacimiento, en 2023 IML Tenis ha experimentado un crecimiento
          sostenido, consolidándose rápidamente como una de las competencias
          interclubes más convocantes del tenis amateur.
        </p>
        <p>
          Actualmente, IML Tenis reúne:{" "}
          <span className="text-primary">
            Casi 200 equipos en competencia, más de 60 clubes participantes y
            más de 3000 jugadores activos.
          </span>
        </p>
        <p>
          La liga se desarrolla principalmente en la{" "}
          <span className="text-primary">
            zona norte y oeste del Gran Buenos Aires
          </span>{" "}
          , integrando clubes, barrios privados, countries y complejos
          deportivos que comparten la pasión por el tenis y el espíritu de
          equipo.
        </p>
        <p className="text-primary font-semibold">
          IML Tenis, donde el tenis se vive, se comparte y se convierte en
          historia.
        </p>
        <div className="aspect-square lg:aspect-video overflow-hidden rounded-2xl">
          <Image
            src="/images/2.png"
            className="w-full h-full object-cover object-center"
            width={1200}
            height={1200}
            alt="Portada 2"
          />
        </div>
      </div>
    </Container>
  );
};

export default page;
