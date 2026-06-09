import { Bull } from "@/lib/icons";

type Props = {
  percentage: number;
};

export default function BulletsProgress({ percentage }: Props) {
  // Calcula cuántas bullets se iluminan (0 a 5)
  const activeBullets = Math.ceil(
    (Math.max(0, Math.min(100, percentage)) / 100) * 5,
  );

  return (
    <div className="flex gap-x-2">
      {[0, 1, 2, 3, 4].map((index) => (
        <span
          key={index}
          className={index < activeBullets ? "text-secondary" : "text-primary"}
        >
          <Bull />
        </span>
      ))}
    </div>
  );
}
