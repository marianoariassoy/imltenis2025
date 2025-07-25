import { WhatsApp } from "@/lib/icons";
import { Mito, TYP, Yuka, Vinica } from "@/lib/logos";

const footer = () => {
  const year = new Date().getFullYear();
  const sponsors = [
    {
      alt: "Logo de Yuka",
      url: "https://www.instagram.com/yuka_ant/",
      image: <Yuka />,
    },

    {
      alt: "Logo Mito Gafas",
      url: "https://www.instagram.com/mitogafas/",
      image: <Mito />,
    },

    {
      alt: "Logo de TYP",
      url: "https://www.instagram.com/typdeportes/",
      image: <TYP />,
    },
    {
      alt: "Logo de Tienda Vinica",
      url: "https://www.instagram.com/tiendavinica/",
      image: <Vinica />,
    },
  ];

  return (
    <footer className="flex flex-col px-4 py-2 pb-4 mt-3 text-secondary dark:text-[#999999]">
      <div className="gap-x-8 flex items-center justify-center flex-wrap text-sm lg:text-base">
        {sponsors.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <a
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label={logo.alt}
            >
              {logo.image}
            </a>
          </div>
        ))}
      </div>
      <div className="text-center flex flex-col text-sm">
        <span className="font-bold">Liga de clubes IML Tenis</span>

        <div className="flex items-center flex-wrap justify-center gap-x-1 pb-2">
          <a
            href="https://wa.me/5491130171475"
            className="hover:text-primary flex items-center gap-x-1"
          >
            <WhatsApp />
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
          <span>&bull;</span>
          <span>Hecho con ❤︎ en {year}</span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
