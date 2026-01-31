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
    <div className="flex flex-col gap-y-2 items-center text-center">
      <Confetti />
      <Link href={`/equipos/${data.team_champion_id}`}>
        <div className="w-24 h-24 overflow-hidden rounded-full hover:opacity-70 transition-opacity">
          <Image
            src={data.team_champion_image}
            alt={data.team_champion}
            width={96}
            height={96}
            className="object-cover h-full w-full"
          />
        </div>
      </Link>

      <h1 className="font-semibold text-base leading-5">
        Campeón
        <br />
        {data.team_champion} ⭐
      </h1>
    </div>
  );
};

export default TornamentsChampion;
