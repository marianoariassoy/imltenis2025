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
      <Link href={`/equipos/${data.team_champion_id}`} className="">
        <div className="w-20 h-20 overflow-hidden rounded-full hover:opacity-70 transition-opacity">
          <Image
            src={data.team_champion_image}
            alt={data.team_champion}
            width={80}
            height={80}
            className="object-cover h-full w-full"
          />
        </div>
      </Link>

      <h1 className="font-semibold text-primary text-sm lg:text-base">
        {data.team_champion} ⭐
      </h1>
    </div>
  );
};

export default TornamentsChampion;
