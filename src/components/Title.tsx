interface HeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  emoji?: string;
}

const Header = ({ title, subtitle, description, emoji }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center justify-center text-center">
      {emoji && <div className="text-2xl mb-2">{emoji}</div>}
      <div className="text-primary">
        <h1 className="font-extrabold text-lg lg:text-xl leading-5">{title}</h1>
        {subtitle && (
          <h2 className="font-semibold text-lg lg:text-xl">{subtitle}</h2>
        )}
      </div>
      {description && (
        <div className="font-medium mt-1 text-secondary">{description}</div>
      )}
    </header>
  );
};

export default Header;
