import Title from "@/components/Title";

export const metadata = {
  title: "Registro de usuarios",
};

const page = () => {
  return (
    <section className="fade-in flex flex-col gap-y-6">
      <Title title="¡Bienvenido!" emoji="👋" />
    </section>
  );
};

export default page;
