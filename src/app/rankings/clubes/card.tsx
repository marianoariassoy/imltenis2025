import Barra from "@/components/Barra";
import Link from "next/link";
import Image from "next/image";

interface data {
  image: string;
  name: string;
  club_id: string;
  club_slug: string;
  matches_won: string;
  series_won: string;
  series_total: string;
  matches_total: string;
}

const card = ({
  item,
  index,
  active,
}: {
  item: data;
  index: number;
  active: boolean;
}) => {
  return (
    <article className="flex items-center gap-4 bg-black/10 px-4 py-6  rounded-2xl shadow-md">
      <div
        className={`font-bold text-lg px-2 ${active ? "text-primary" : "text-secondary"}`}
      >
        {index + 1}
      </div>
      <div>
        <div className="w-[4.2rem] h-[4.2rem] rounded-full overflow-hidden bg-white/10">
          <Link href={`/clubes/${item.club_slug}`}>
            <Image
              src={item.image}
              alt={item.name}
              width={70}
              height={70}
              className="w-full h-full object-cover hover:opacity-70 transition-opacity"
            />
          </Link>
        </div>
      </div>
      <div>
        <h2
          className={`font-bold ${active ? "text-primary" : "text-secondary"}`}
        >
          {item.name}
        </h2>
        <table width="100%" border={0} className="table-2">
          <thead>
            <tr>
              <th scope="col" className="pr-4">
                Pts.
              </th>
              <th scope="col" className="pr-4">
                SG
              </th>
              <th scope="col" className="pr-4">
                SJ
              </th>
              <th scope="col" className="pr-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold pr-2">{item.matches_won}</td>
              <td className="pr-2">{item.series_won}</td>
              <td className="pr-2">{item.series_total}</td>
              <td>
                <Barra
                  end={(+item.matches_won / (+item.series_total * 3)) * 100}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default card;
