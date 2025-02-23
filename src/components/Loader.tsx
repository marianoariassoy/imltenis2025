const Loader = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex justify-center items-center space-x-2">
        <div
          className="w-4 h-4 bg-black/30 rounded-full animate-fade-in-out"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-4 h-4 bg-black/30 rounded-full animate-fade-in-out"
          style={{ animationDelay: ".3s" }}
        ></div>
        <div
          className="w-4 h-4 bg-black/30 rounded-full animate-fade-in-out"
          style={{ animationDelay: ".6s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
