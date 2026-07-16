import Title from "@/components/Title";
import Chat from "./chat";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Chat IML",
  description: "Asistente virtual con inteligencia artificial de IML Tenis",
};

export default function ChatIMLContent() {
  return (
    <Container>
      <Title
        title="Chat IML"
        emoji="🤖"
        description="Impulsado por IA · Versión Beta (todavia esta aprendiendo)"
      />
      <div className="w-full max-w-3xl mx-auto mt-8">
        <Chat />
      </div>
      <div className="text-center text-sm text-secondary md:px-14">
        Las respuestas de este chat son orientativas y pueden contener errores.
        Ante cualquier duda, consultá con un miembro de la organización.
      </div>
    </Container>
  );
}
