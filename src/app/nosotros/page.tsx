import Title from "@/components/Title";

export const metadata = {
  title: "Nosotros",
};

const page = () => {
  return (
    <section className="flex flex-col gap-y-3 text-sm">
      <Title title="¡Hola!" emoji="👋" />

      <div className="flex flex-col gap-y-6 px-6 text-center max-w-2xl mx-auto">
        <div>
          IML Tenis nació en marzo de 2023 con la misión de crear un espacio
          competitivo, accesible y apasionante para los clubes de tenis. Hoy
          contamos con más de 120 equipos de diferentes clubes y más de 2500
          jugadores compitiendo en 11 categorías.
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default page;
