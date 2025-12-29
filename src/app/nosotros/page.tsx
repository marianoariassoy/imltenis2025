import Title from "@/components/Title";
import Image from "next/image";

export const metadata = {
  title: "Nosotros",
};

const page = () => {
  return (
    <section className="flex flex-col gap-y-8">
      <Title title="¡Hola!" emoji="👋" />

      <div className="aspect-square lg:aspect-video overflow-hidden rounded-xl">
        <Image
          src="/images/3.png"
          className="w-full h-full object-cover object-top"
          width={1200}
          height={1200}
          alt="Portada"
        />
      </div>

      <div className="flex flex-col gap-y-6 text-center max-w-3xl mx-auto">
        <div>
          En Argentina, el deporte ocupa un lugar central en la vida
          comunitaria, y los clubes constituyen una de las instituciones
          sociales más representativas. <br />
          <br />
          Un club no se limita a la práctica deportiva: es un{" "}
          <strong className="text-primary">
            espacio de encuentro, integración y pertenencia{" "}
          </strong>{" "}
          que transmite valores, fortalece vínculos y genera identidad
          colectiva. <br />
          <br />
          En este contexto, el tenis —tradicionalmente concebido como un deporte
          individual— adquiere una nueva dimensión a través de la competencia
          interclubes. Representar a una institución implica no solo competir,
          sino también{" "}
          <strong className="text-primary">
            vivir una experiencia compartida que combina deporte, compromiso y
            sentido de comunidad.
          </strong>
          <br />
          <br />
          <strong className="text-primary">IML Tenis</strong> se propone
          promover y consolidar estos valores, ofreciendo un marco competitivo
          que, más allá de los resultados deportivos, brinde a cada jugador,
          capitán y equipo una experiencia enriquecedora, sustentada en{" "}
          <strong className="text-primary">
            la pasión, el respeto y la pertenencia.
          </strong>
        </div>
      </div>
    </section>
  );
};

export default page;
