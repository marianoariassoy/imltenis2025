import { WhatsApp } from "@/lib/icons";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-8 right-4 z-30 ">
      <a
        href="http://wa.me/5491130171475"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-primary text-white rounded-full p-2 flex items-center justify-center hover:bg-black hover:text-white text-xl shadow-md"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default Whatsapp;
