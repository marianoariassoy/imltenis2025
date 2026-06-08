interface HeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  emoji?: string;
}

const Header = ({ title, subtitle, description, emoji }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center justify-center text-center px-12">
      {emoji && <div className="text-2xl">{emoji}</div>}
      <div className="text-primary leading-7">
        <h1 className="font-bold text-[1.3rem]">{title}</h1>
        {subtitle && (
          <h2 className="font-semibold text-[1.3rem]">{subtitle}</h2>
        )}
      </div>
      <div className="font-medium mt-1 text-secondary">{description}</div>
    </header>
  );
};

export default Header;
