import Title from "@/components/Title";
import Chat from "./chat";
import { Container } from "@/components/Container";
import { Robot } from "@/lib/icons";

export const metadata = {
  title: "Chat IML",
  description: "Asistente virtual con inteligencia artificial de IML Tenis",
};

export default function ChatIMLContent() {
  return (
    <Container>
      <div className="text-primary text-3xl text-center flex items-center w-full justify-center -mb-3">
        <Robot />
      </div>
      <Title title="Chat IML" description="Impulsado por IA · Versión Beta" />
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
