export const metadata = {
  title: "Muy pronto",
};

const page = () => {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full fade-in flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-1 animate-bounce">🚀</h1>
      <span className="text-primary text-center font-semibold text-base">
        ¡Muy pronto!
      </span>
    </div>
  );
};

export default page;
