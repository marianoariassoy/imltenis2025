import { Bull } from "@/lib/icons";

type Filter = "todas" | "sin jugar" | "jugadas";

const FixtureFilter = ({
  seriesPlayed,
  totalSeries,
  setFilter,
  filter,
}: {
  seriesPlayed: number;
  totalSeries: number;
  setFilter: (filter: Filter) => void;
  filter: Filter;
}) => {
  const filters: Filter[] = ["todas", "sin jugar", "jugadas"];

  const changeFilter = () => {
    const currentIndex = filters.indexOf(filter);
    const nextIndex = (currentIndex + 1) % filters.length;

    setFilter(filters[nextIndex]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 w-full mt-3 lg:mt-8">
      <div className="flex items-center justify-center md:justify-start gap-x-2">
        <span className="text-secondary">
          {filter === "todas"
            ? `${seriesPlayed} de ${totalSeries} series completadas`
            : filter === "jugadas"
              ? `${seriesPlayed} series completadas`
              : `${totalSeries - seriesPlayed} series por jugar`}
        </span>
      </div>

      <button
        type="button"
        onClick={changeFilter}
        className="flex gap-x-2 text-sm md:text-base md:justify-end justify-center cursor-pointer"
        aria-label="Cambiar filtro"
      >
        {filters.map((item) => (
          <span
            key={item}
            className={`text-lg ${
              filter === item ? "text-primary" : "text-white/30"
            }`}
          >
            <Bull />
          </span>
        ))}
      </button>
    </div>
  );
};

export default FixtureFilter;
