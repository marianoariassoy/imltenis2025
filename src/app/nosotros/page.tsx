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
          La Liga de Clubes IML Tenis es una de las competencias interclubes más
          importantes de Argentina, con la participación de una gran cantidad de
          equipos provenientes de las zonas norte y oeste del Gran Buenos Aires.
          Cada temporada convoca a cientos de jugadores y jugadoras amateurs,
          que representan a sus clubes en un ambiente competitivo organizado y
          con gran espíritu deportivo. Con torneos Apertura y Clausura que se
          disputan de marzo a diciembre, la liga ofrece una experiencia única
          que combina deporte, integración y pasión por el tenis en equipo.
        </div>
      </div>
    </section>
  );
};

export default page;
