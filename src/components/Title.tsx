interface HeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  emoji?: string;
}

const Header = ({ title, subtitle, description, emoji }: HeaderProps) => {
  return (
    <header className="flex flex-col text-center">
      {emoji && <div className="text-2xl">{emoji}</div>}
      <div className="text-lg text-primary">
        <h1 className="font-bold">{title}</h1>
        {subtitle && <h2 className="font-medium">{subtitle}</h2>}
      </div>
      <div className="font-medium text-sm mt-2">{description}</div>
    </header>
  );
};

export default Header;
