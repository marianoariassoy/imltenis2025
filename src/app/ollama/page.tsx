import Title from "@/components/Title";
import Chat from "./chat";

export const metadata = {
  title: "IML Ollama",
  description: "Asistente virtual con inteligencia artificial de IML Tenis",
};

export default function ChatIMLContent() {
  return (
    <div className="flex flex-col gap-y-10 lg:gap-y-20 relative">
      <Title
        title="IML Ollama"
        // emoji="🦙"
        description="Impulsado por inteligencia artificial v1.0"
      />

      <Chat />
    </div>
  );
}
