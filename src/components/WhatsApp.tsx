import { WhatsApp } from "@/lib/icons";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-23 md:bottom-12 right-4 z-50">
      <a
        href="http://wa.me/5491130171475"
        target="_blank"
        rel="noreferrer"
        className="w-15 h-15 rounded-full 
        text-xl transition-all flex items-center justify-center  hover:scale-105 text-white bg-primary"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
