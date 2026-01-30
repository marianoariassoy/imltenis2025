type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function HamburgerButton({
  isOpen,
  onClick,
}: HamburgerButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        aria-label="Toggle menu"
        className="cursor-pointer relative w-6 h-6 flex items-center justify-start [&>span]:hover:bg-primary"
      >
        <span
          className={`
          absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out
          ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}
        `}
        />
        <span
          className={`
          absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out
          ${isOpen ? "-rotate-45 translate-y-0 w-full" : ""}
        `}
        />
        <span
          className={`
          absolute h-0.5 w-1/2 bg-current transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "opacity-100 translate-y-2"}
        `}
        />
      </button>
    </div>
  );
}
