import Item from "@/components/ItemPlayer";
import { Player } from "@/types";
import Labels from "@/components/Labels";
import Barra from "@/components/Barra";
import Aviso from "@/components/Aviso";
import { Verified } from "@/lib/icons";

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
      name: "Edad",
      value: "",
    },
    {
      name: " ",
      value: " ",
    },
  ];

  const withoutImage = data.some((item) => item.image === null);

  return (
    <section className="flex flex-col gap-y-4 -mt-4">
      <div className="text-center">
        <h1 className="text-primary font-semibold flex items-center gap-x-1 justify-center">
          <span>Lista de buena fe</span>
          {!withoutImage && (
            <span className="text-primary text-base">
              <Verified />
            </span>
          )}
        </h1>
        <div className="flex items-center justify-center gap-x-2">
          <h2 className="font-medium text-secondary text-base">
            {captain_name} (Capitán)
          </h2>
        </div>
      </div>
      {withoutImage && (
        <Aviso
          text="Por favor enviar fotos de perfil faltantes a hola@imltenis.com.ar"
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
                  <span className="font-medium text-secondary">
                    {index + 1}
                  </span>
                  <Item
                    image={item.image}
                    title={item.name}
                    link={`/jugadores/${item.slug}`}
                  />
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won}</td>
                <td>{item.series_lost}</td>
                <td>
                  <span className="text-secondary">{item.series_dif}</span>
                </td>
                <td width={40}>
                  <span className="text-secondary">
                    {item.age > 1 ? item.age : null}
                  </span>
                </td>
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
