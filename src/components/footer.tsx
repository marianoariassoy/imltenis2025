import { WhatsApp } from "@/lib/icons";

const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col px-4 py-2 pb-6 mt-8 z-30 text-secondary">
      <div className="text-center flex flex-col">
        <span className="font-bold">Liga de clubes IML Tenis</span>
        <div className="flex items-center flex-wrap justify-center gap-x-1 pb-2">
          <a
            href="https://wa.me/5491130171475"
            className="hover:text-primary flex items-center gap-x-2"
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
