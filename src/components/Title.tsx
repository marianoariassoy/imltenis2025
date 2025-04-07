interface HeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  emoji?: string;
}

const Header = ({ title, subtitle, description, emoji }: HeaderProps) => {
  return (
    <header className="flex flex-col text-center px-4">
      {emoji && <div className="text-2xl">{emoji}</div>}
      <div className="text-xl text-primary">
        <h1 className="font-bold px-4">{title}</h1>
        {subtitle && <h2 className="font-medium">{subtitle}</h2>}
      </div>
      <div className="font-medium text-sm">{description}</div>
    </header>
  );
};

export default Header;
