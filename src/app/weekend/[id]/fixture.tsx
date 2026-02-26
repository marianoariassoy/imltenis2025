import Item from "./item";

interface Props {
  id: string;
  player1_id: string;
  player2_id: string;
  player3_id: string;
  player4_id: string;
  player1_name: string;
  player2_name: string;
  player3_name: string;
  player4_name: string;
  winner: string;
  set1home: string;
  set1away: string;
  set2home: string;
  set2away: string;
  partner1_id: string;
  partner2_id: string;
  partner1_name: string;
  partner2_name: string;
  num: number;
}

const fixture = async ({
  group_id,
  type,
}: {
  group_id: string;
  type: number;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/weekend/tournaments/groups/${group_id}/series`,
  );
  const data = (await response.json()) as Props[];
  if (!data) return null;

  return (
    <section className="fade-in flex flex-col gap-y-6">
      {type !== 2 && (
        <h1 className="font-semibold text-primary text-center text-base">
          Orden de juego
        </h1>
      )}

      <div className="w-full overflow-x-auto mt-3 flex flex-col mb-3 gap-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-start text-sm"
          >
            <div
              className={`flex-1 flex gap-x-3 ${
                item.winner === item.partner1_id ? "text-primary" : ""
              }`}
            >
              {item.num ? <span className="font-medium">{item.num}.</span> : ""}

              <Item
                player1_id={item.player1_id}
                player2_id={item.player2_id}
                player1_name={item.player1_name}
                player2_name={item.player2_name}
              />
            </div>
            <div className="text-center opacity-70 px-4">
              {item.winner ? (
                <div className="font-bold flex flex-col">
                  <span>
                    {item.set1home}-{item.set1away}
                  </span>
                </div>
              ) : (
                <span className="font-medium">vs.</span>
              )}
            </div>
            <div
              className={`flex-1 flex justify-end ${
                item.winner === item.partner2_id ? "text-primary" : ""
              }`}
            >
              <Item
                player1_id={item.player3_id}
                player2_id={item.player4_id}
                player1_name={item.player3_name}
                player2_name={item.player4_name}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default fixture;
