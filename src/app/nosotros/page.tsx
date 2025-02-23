import Title from "@/components/Title";

export const metadata = {
  title: "Nosotros",
};

const page = () => {
  return (
    <section className="fade-in flex flex-col gap-y-3">
      <Title title="¡Hola!" emoji="👋" />

      <div className="flex flex-col gap-y-6 px-6 text-center max-w-2xl mx-auto">
        <div>
          IML Tenis nació en marzo de 2023 con la misión de crear un espacio
          competitivo, accesible y apasionante para el tenis.
        </div>
        <div className="[&>span]:font-bold [&>span]:text-primary text-sm lg:text-base">
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
        </div>
        <div className="[&>span]:font-bold [&>span]:text-primary text-sm lg:text-base">
          <span>IML Juniors:</span> Marcos Velazquez
        </div>
      </div>
    </section>
  );
};

export default page;
