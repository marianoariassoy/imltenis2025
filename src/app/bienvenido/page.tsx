import Title from "@/components/Title";
import { Container } from "@/components/Container";
import Form from "./form";

export const metadata = {
  title: "Registro de jugadores",
  description: "Registro de jugadores para IML Tenis",
};

const Page = () => {
  return (
    <Container>
      <Title
        title="¡Bienvenido!"
        emoji="🚀"
        description="Completá el formulario con tus datos y se parte del interclubes."
      />

      <Form />
    </Container>
  );
};

export default Page;
