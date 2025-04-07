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
          IML Tenis nació en marzo de 2023 con la misión de crear un espacio
          competitivo, accesible y apasionante para los clubes de tenis. Hoy
          contamos con más de 120 equipos de diferentes clubes y más de 2500
          jugadores compitiendo en 11 categorías.
        </div>
        <div className="[&>span]:font-bold [&>span]:text-primary">
          <span>Director:</span> Luis Armando Pujol <br />
          <span>Coordinadores:</span> Mariano Arias, Emiliano Carro, Carmelo
          Grieco. <br />
          <span>RRSS:</span> Joaquina Yagua <br />
          <span>Sistemas: </span>
          <a
            href="https://www.marianoarias.soy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Mariano Arias
          </a>
          <br />
          <span>Comercial:</span> Luis Armando Pujol <br />
          <span>Legales: </span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Estudio Jurídico Massi
          </a>
          <br />
          <span>Logo: </span>
          <a
            href="http://www.nicolasbarraza.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Nicolas Barraza
          </a>
          <br />
          <span>IML Weekend: </span> Marcos Velazquez
        </div>
      </div>
    </section>
  );
};

export default page;
