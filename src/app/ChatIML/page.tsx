import Title from "@/components/Title";
import ChatIML from "./ChatIML";

export const metadata = {
  title: "Chat IML 🤖",
  description: "Asistente virtual con inteligencia artificial de IML Tenis",
};

export default function ChatIMLContent() {
  return (
    <div className="flex flex-col gap-y-10 lg:gap-y-20 relative">
      <Title
        title="Chat IML"
        emoji="🤖"
        description="Impulsado por inteligencia artificial v1.0"
      />

      <ChatIML />
    </div>
  );
}
