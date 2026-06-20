import { WhatsApp } from "@/lib/icons";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-24 right-4  z-50">
      <a
        href="http://wa.me/5491130171475"
        target="_blank"
        rel="noreferrer"
        className=" text-foreground hover:text-primary rounded-full 
        text-[2.1rem] transition-all"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
