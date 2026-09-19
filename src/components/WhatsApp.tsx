import { WhatsApp } from "@/lib/icons";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-40 md:bottom-10 right-4 z-50">
      <a
        href="http://wa.me/5491130171475"
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 md:w-14 md:h-14 rounded-full 
        text-xl transition-all flex items-center justify-center  hover:scale-105 text-white bg-primary"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
