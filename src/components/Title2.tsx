import { Bull } from "@/lib/icons";

const Title2 = ({ title, winners }: { title: string; winners: number }) => {
  return (
    <div className="relative flex items-center justify-center w-full gap-2 -mb-2 lg:mb-0">
      <div className="flex-1"></div>
      <div className="flex items-center gap-2">
        <h1 className="font-bold italic text-lg lg:text-[1.20rem] text-primary">
          {title}
        </h1>
        <div className="flex items-center gap-x-[0.35rem] text-base">
          {Array.from({ length: winners }).map((_, index) => (
            <span
              key={index}
              className="text-primary opacity-full"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Bull />
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Title2;
