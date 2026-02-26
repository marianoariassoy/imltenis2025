import Labels from "@/components/Labels";
import { Group } from "@/types";
import Players from "./players";

interface Props {
  id: string;
  name: string;
  image: string;
  matches_won: number;
  sets: number;
  games: number;
  matches: number;
  player1_id: string;
  player2_id: string;
  player1_name: string;
  player2_name: string;
  player1_image: string;
  player2_image: string;
}

const tabla = async ({ group }: { group: Group }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/weekend/tournaments/groups/${group.id}/teams`,
  );
  const data = (await response.json()) as Props[];
  if (!data) return null;

  const labels = [
    {
      name: "Jugadores",
      value: "",
    },
    {
      name: "Pts.",
      value: "Encuenstros ganados",
    },
    {
      name: "DS",
      value: "Diferencia de sets",
    },
    {
      name: "DG",
      value: "Diferencia de games",
    },
    {
      name: "EJ",
      value: "Encuentros jugados",
    },
  ];

  return (
    <section className="flex flex-col gap-y-3">
      <div className="overflow-x-auto text-sm whitespace-nowrap">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`${index < group.winners ? "text-primary" : ""}`}
              >
                <td className="flex gap-x-3 items-center">
                  <span className="font-medium"> {index + 1}.</span>
                  <Players item={item} />
                </td>
                <td>
                  <span className="font-bold">{item.matches_won}</span>
                </td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>{item.matches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />
    </section>
  );
};

export default tabla;
