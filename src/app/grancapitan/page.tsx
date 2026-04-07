import Title from "@/components/Title";
import Chat from "./chat";

export const metadata = {
  title: "Gran Capitán",
  description: "Asistente virtual con inteligencia artificial de IML Tenis",
};

export default function ChatIMLContent() {
  return (
    <div className="flex flex-col gap-y-10 lg:gap-y-20 relative">
      <Title
        title="Gran Capitán"
        emoji="😎"
        description="Impulsado con inteligencia artificial v1.0"
      />

      <Chat />
    </div>
  );
}
