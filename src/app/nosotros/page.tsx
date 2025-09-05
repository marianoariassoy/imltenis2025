import Title from "@/components/Title";

export const metadata = {
  title: "Nosotros",
};

const page = () => {
  return (
    <section className="flex flex-col gap-y-3 text-sm">
      <Title title="¡Hola!" emoji="👋" />

      <div className="flex flex-col gap-y-6 px-6 text-center max-w-2xl mx-auto">
        <div>
          En Argentina, el deporte ocupa un lugar central en la vida
          comunitaria, y los clubes constituyen una de las instituciones
          sociales más representativas. <br />
          <br />
          Un club no se limita a la práctica deportiva: es un{" "}
          <strong>espacio de encuentro, integración y pertenencia </strong> que
          transmite valores, fortalece vínculos y genera identidad colectiva.{" "}
          <br />
          <br />
          En este contexto, el tenis —tradicionalmente concebido como un deporte
          individual— adquiere una nueva dimensión a través de la competencia
          interclubes. Representar a una institución implica no solo competir,
          sino también{" "}
          <strong>
            vivir una experiencia compartida que combina deporte, compromiso y
            sentido de comunidad.
          </strong>
          <br />
          <br />
          <strong>IML Tenis</strong> se propone promover y consolidar estos
          valores, ofreciendo un marco competitivo que, más allá de los
          resultados deportivos, brinde a cada jugador, capitán y equipo una
          experiencia enriquecedora, sustentada en{" "}
          <strong>la pasión, el respeto y la pertenencia.</strong>
        </div>
      </div>
    </section>
  );
};

export default page;
