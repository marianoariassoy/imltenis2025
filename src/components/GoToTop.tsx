import { ChevronDown } from "@/lib/icons";

const GoToTop = ({
  showTopButton,
  scrollToTop,
}: {
  showTopButton: boolean;
  scrollToTop: () => void;
}) => {
  return (
    <>
      {/* <div
        className={`fixed bottom-0 left-0 z-20 flex justify-end w-full px-4 py-8 from-background via-background/70 to-transparent transition-all bg-linear-to-t ${
          showTopButton ? "fade-in" : "opacity-0"
        }`}
      ></div> */}

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-4 bg-primary text-background p-3 rounded-full w-12 h-12 hover:scale-105 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer z-40 ${
          showTopButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="rotate-180 text-xl">
          <ChevronDown />
        </span>
      </button>
    </>
  );
};

export default GoToTop;
