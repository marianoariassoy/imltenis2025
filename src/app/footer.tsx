import { Whatsapp } from "./components/icons";

const footer = () => {
  const year = new Date().getFullYear();
  const sponsors = [
    {
      alt: "Logo de Head",
      url: "https://www.instagram.com/headshoesargentina/",
      image: "./sponsors/head.svg",
    },
    {
      alt: "Logo de Kirschbaum",
      url: "https://www.kirschbaumarg.com/",
      image: "./sponsors/kirschbaum.svg",
    },
    {
      alt: "Logo de Addnice",
      url: "https://www.addnicetienda.com.ar/",
      image: "./sponsors/addnice.svg",
    },
    {
      alt: "Logo Mito Gafas",
      url: "https://www.instagram.com/mitogafas/",
      image: "./sponsors/mito.svg",
    },
    {
      alt: "Logo de Yuka",
      url: "https://www.instagram.com/yuka_ant/",
      image: "./sponsors/yuka.svg",
    },
    {
      alt: "Logo de Urban",
      url: "https://www.instagram.com/urbankicks.ar/",
      image: "./sponsors/urban.svg",
    },

    {
      alt: "Logo de TYP",
      url: "https://www.instagram.com/typdeportes/",
      image: "./sponsors/typ.svg",
    },
    {
      alt: "Logo de Tienda Vinica",
      url: "https://www.instagram.com/tiendavinica/",
      image: "./sponsors/vinica.svg",
    },
  ];

  return (
    <footer className="flex flex-col gap-y-6 lg:gap-0">
      <div className="lg:max-w-3xl lg:gap-2 m-auto grid grid-cols-4 lg:grid-cols-8 items-center justify-center">
        {sponsors.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img
                src={logo.image}
                alt={logo.alt}
                className="opacity-30 hover:opacity-70"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="text-center flex flex-col text-secondary text-sm">
        <span className="font-bold">Liga de clubes IML Tenis</span>
        <span>Buenos Aires, Argentina. &copy; {year}</span>

        <div className="flex items-center justify-center gap-x-2">
          <a
            href="https://wa.me/5491130171475"
            className="hover:text-primary flex items-center gap-x-2"
          >
            <Whatsapp />
            11 3017 1475
          </a>
          <span>&bull;</span>
          <span>
            <a
              href="mailto:hola@imltenis.com.ar"
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              hola@imltenis.com.ar
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
