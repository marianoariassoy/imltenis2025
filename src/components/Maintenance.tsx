import { Logo, WhatsApp } from "@/lib/icons";

const Maintenance = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen text-center">
      <div className="flex flex-col justify-center gap-y-4 text-primary">
        <Logo />
        <div>
          <h1 className="font-bold">Sitio en mantenimiento.</h1>
          <p>Estamos trabajando para volver pronto.</p>
          <p className="flex items-center gap-x-2 justify-center">
            <span>Contacto:</span>
            <a
              href="https://wa.me/5491130171475"
              className="hover:text-primary flex items-center gap-x-2"
            >
              <WhatsApp />
              11 3017 1475
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
