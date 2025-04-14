interface Props {
  filterText: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Buscar = ({ filterText, handleFilterChange }: Props) => {
  return (
    <div className="w-full max-w-md m-auto">
      <input
        type="text"
        placeholder="Buscar"
        value={filterText}
        onChange={handleFilterChange}
        className="w-full h-12 border border-white/10 dark:border-black/10 rounded-lg bg-transparent px-4 text-sm focus:outline-none focus:ring-0 placeholder:text-secondary"
      />
    </div>
  );
};

export default Buscar;
