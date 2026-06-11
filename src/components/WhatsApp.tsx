import { WhatsApp } from "@/lib/icons";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-28 lg:bottom-10 right-4 z-50">
      <a
        href="http://wa.me/5491130171475"
        target="_blank"
        rel="noreferrer"
        className="w-[3.7rem] h-[3.7rem] bg-primary text-foreground rounded-full p-2 flex items-center justify-center hover:scale-105 text-xl transition-transform duration-300"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
