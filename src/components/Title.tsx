interface HeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  emoji?: string;
  icon?: React.ReactNode;
}

const Header = ({ title, subtitle, description, emoji, icon }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-1 items-center justify-center text-center px-4">
      {icon && <div className="text-3xl text-primary">{icon}</div>}
      {emoji && <div className="text-2xl">{emoji}</div>}
      <div className="text-primary">
        <h1 className="font-extrabold text-lg lg:text-xl leading-5">{title}</h1>
        {subtitle && (
          <h2 className="font-semibold text-lg lg:text-xl">{subtitle}</h2>
        )}
      </div>
      {description && (
        <div className="font-medium text-secondary">{description}</div>
      )}
    </header>
  );
};

export default Header;
