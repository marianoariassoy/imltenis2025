import Image from "next/image";
import Link from "next/link";
import Confetti from "@/components/confetti";

interface Props {
  team_champion_image: string;
  team_champion: string;
  team_champion_id: string;
}

const TornamentsChampion = ({ data }: { data: Props }) => {
  return (
    <div className="flex flex-col gap-y-4 items-center text-center -mt-2 -mb-2">
      <Confetti />
      <Link href={`/equipos/${data.team_champion_id}`}>
        <div className="w-20 h-20 lg:w-24 lg:h-24 overflow-hidden rounded-full hover:opacity-70 transition-opacity">
          <Image
            src={data.team_champion_image}
            alt={data.team_champion}
            width={96}
            height={96}
            className="object-cover h-full w-full"
          />
        </div>
      </Link>
      <div>
        <h1 className="font-semibold leading-5">{data.team_champion} ⭐</h1>
        <h2 className="text-secondary">Campeón del torneo</h2>
      </div>
    </div>
  );
};

export default TornamentsChampion;
