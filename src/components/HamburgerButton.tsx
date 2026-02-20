import { useMenu } from "@/context/menu-context";

export default function HamburgerButton() {
  const { open, setOpen } = useMenu();

  return (
    <button
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      className="cursor-pointer relative w-6 h-6 flex items-center justify-start [&>span]:lg:hover:bg-primary focus:outline-none"
    >
      <span
        className={`
          absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out
          ${open ? "rotate-45 translate-y-0" : "-translate-y-2"}
        `}
      />
      <span
        className={`
          absolute h-0.5 w-full bg-current transition-all duration-300 ease-in-out
          ${open ? "-rotate-45 translate-y-0 w-full" : ""}
        `}
      />
      <span
        className={`
          absolute h-0.5 w-1/2 bg-current transition-all duration-300 ease-in-out
          ${open ? "opacity-0" : "opacity-100 translate-y-2"}
        `}
      />
    </button>
  );
}
