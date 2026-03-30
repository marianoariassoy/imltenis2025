interface HeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  emoji?: string;
}

const Header = ({ title, subtitle, description, emoji }: HeaderProps) => {
  return (
    <header className="flex flex-col text-center px-8 mx-auto">
      {emoji && <div className="text-2xl mb-1">{emoji}</div>}
      <div className="text-primary">
        <h1 className="font-bold leading-7 text-xl tracking-tight">{title}</h1>
        {subtitle && <h2 className="font-medium">{subtitle}</h2>}
      </div>
      <div className="font-medium mt-1 text-secondary">{description}</div>
    </header>
  );
};

export default Header;
