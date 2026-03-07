import Title from "@/components/Title";
import Image from "next/image";

export const metadata = {
  title: "Nosotros",
};

const page = () => {
  return (
    <section className="flex flex-col gap-y-6">
      <Title title="¡Hola!" emoji="👋" />

      <div className="flex flex-col gap-y-6 max-w-3xl mx-auto">
        <div className="aspect-square lg:aspect-video overflow-hidden rounded-2xl">
          <Image
            src="/images/2026.png"
            className="w-full h-full object-cover object-center"
            width={1200}
            height={1200}
            alt="Portada"
          />
        </div>
        <div>
          En Argentina, el deporte ocupa un lugar central en la vida
          comunitaria, y los clubes constituyen una de las instituciones
          sociales más representativas. <br />
          <br />
          Un club no se limita a la práctica deportiva: es un{" "}
          <span className="text-primary">
            espacio de encuentro, integración y pertenencia{" "}
          </span>{" "}
          que transmite valores, fortalece vínculos y genera identidad
          colectiva. <br />
          <br />
          En este contexto, el tenis —tradicionalmente concebido como un deporte
          individual— adquiere una nueva dimensión a través de la competencia
          interclubes. Representar a una institución implica no solo competir,
          sino también{" "}
          <span className="text-primary">
            vivir una experiencia compartida que combina deporte, compromiso y
            sentido de comunidad.
          </span>
          <br />
          <br />
          <span className="text-primary">IML Tenis</span> se propone promover y
          consolidar estos valores, ofreciendo un marco competitivo que, más
          allá de los resultados deportivos, brinde a cada jugador, capitán y
          equipo una experiencia enriquecedora, sustentada en{" "}
          <span className="text-primary">
            la pasión, el respeto y la pertenencia.
          </span>
        </div>

        <p>
          Desde su nacimiento, en 2023 IML Tenis ha experimentado un crecimiento
          sostenido, consolidándose rápidamente como una de las competencias
          interclubes más convocantes del tenis amateur.
          <br />
          <br />
          Actualmente, IML Tenis reúne:{" "}
          <span className="text-primary">
            Casi 200 equipos en competencia, más de 60 clubes participantes y
            más de 3000 jugadores activos.
          </span>
          <br /> <br />
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
      </div>
    </section>
  );
};

export default page;
