import { WhatsApp } from "@/lib/icons";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-8 left-4 z-30">
      <a
        href="http://wa.me/5491130171475"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-primary text-white rounded-full p-2 flex items-center justify-center hover:scale-105 hover:text-white text-xl shadow-md transition-transform duration-300"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
