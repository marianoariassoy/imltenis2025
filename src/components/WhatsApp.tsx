import { WhatsApp } from "@/lib/icons";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-22 md:bottom-12 right-4 md:right-12 z-50">
      <a
        href="http://wa.me/5491130171475"
        target="_blank"
        rel="noreferrer"
        className=" text-foreground bg-primary w-12 h-12 md:w-14 md:h-14 rounded-full 
        text-xl transition-all flex items-center justify-center hover:scale-105"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
