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
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 md:bottom-12 right-4 md:right-12 bg-primary text-background p-3 rounded-full w-12 h-12 hover:scale-105 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer z-40 ${
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
