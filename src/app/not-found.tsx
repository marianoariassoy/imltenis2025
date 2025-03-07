const error = () => {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full fade-in flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-1">😢</h1>
      <span className="text-primary text-center font-semibold">
        No hay nada por acá...
      </span>
    </div>
  );
};

export default error;
