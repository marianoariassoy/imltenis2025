import Item from "@/components/ItemSmall";
import { Player } from "../../../types";
import Labels from "@/components/Labels";
import Barra from "@/components/Barra";
import Aviso from "@/components/Aviso";

const Jugadores = async ({
  id,
  captain_name,
}: {
  id: string;
  captain_name: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}/players`,
  );
  const data = (await response.json()) as Player[];
  if (!data) return null;

  const labels = [
    {
      name: "Jugador",
      value: "",
    },
    {
      name: "Edad",
      value: "",
    },
    {
      name: "PJ",
      value: "Parciales jugados",
    },
    {
      name: "PG",
      value: "Parciales ganados",
    },
    {
      name: "PP",
      value: "Parciales perdidos",
    },
    {
      name: "Dif.",
      value: "Diferencia de puntos",
    },
    {
      name: " ",
      value: " ",
    },
  ];

  const withoutImage = data.some((item) => item.image === null);

  return (
    <section className="flex flex-col gap-y-4">
      <div className="text-center">
        <h1 className="text-primary text-base font-semibold">
          🔥 Lista de buena fe
        </h1>
        <div className="flex items-center justify-center gap-x-1">
          <h2 className="font-medium text-secondary">
            {captain_name} (Capitán)
          </h2>
          {!withoutImage && (
            <span className="text-primary">
              <svg
                aria-label="Verified"
                fill="currentColor"
                height="20"
                viewBox="0 0 40 40"
              >
                <path
                  d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
          )}
        </div>
      </div>
      {withoutImage && (
        <Aviso
          text="Enviar las fotos de perfil de los jugadores que aún faltan a hola@imltenis.com.ar"
          type="atention"
        />
      )}
      <div className="overflow-x-auto whitespace-nowrap mt-2">
        <table className="table w-full">
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td className="flex gap-x-2 items-center">
                  <span className="font-medium">{index + 1}</span>
                  <Item
                    image={item.image}
                    title={item.name}
                    link={`/jugadores/${item.slug}`}
                  />
                </td>
                <td>{item.age > 1 ? item.age : null}</td>

                <td>{item.series_total}</td>
                <td>{item.series_won}</td>
                <td>{item.series_lost}</td>
                <td>{item.series_dif}</td>
                <td className="w-40">
                  <Barra end={(item.series_won / item.series_total) * 100} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels.slice(1, labels.length - 1)} />
    </section>
  );
};

export default Jugadores;
