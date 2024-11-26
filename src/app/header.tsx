import { Logo, Instagram, Menu } from "./components/icons";
import Link from "next/link";

const header = () => {
  return (
    <header className="sticky flex items-center gap-x-4 pb-4">
      <div>
        <button className="hover:text-primary">
          <Menu />
        </button>
      </div>
      <div className="flex-1 flex justify-center text-primary">
        <Link href="/" className="hover:scale-105 transition-transform">
          <Logo />
        </Link>
      </div>
      <div>
        <a
          href="https://www.instagram.com/imltenis/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          <Instagram />
        </a>
      </div>
    </header>
  );
};

export default header;
