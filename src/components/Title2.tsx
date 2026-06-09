const Title2 = ({ title }: { title: string }) => {
  return (
    <div className="relative flex items-center justify-center w-full gap-3 -mb-2 lg:mb-0">
      <h1 className="font-bold italic text-lg lg:text-[1.20rem] text-primary">
        {title}
      </h1>
    </div>
  );
};

export default Title2;
