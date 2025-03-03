const ButtonForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-black/20 hover:bg-black/10 transition-all h-12 w-full max-w-sm rounded-lg px-4 text-sm">
      {children}
    </button>
  );
};

export default ButtonForm;
