const error = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col items-center text-center">
        <span className="text-2xl">😢</span>
        <span className="text-primary text-sm font-medium">
          No hay nada por acá{" "}
        </span>
      </div>
    </div>
  );
};

export default error;
