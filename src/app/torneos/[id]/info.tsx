import { Info } from "@/lib/icons";

const info = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-x-2 text-sm p-3 bg-black/10 rounded-xl mb-3">
      <span className="text-primary mt-1">
        <Info />
      </span>
      <span className="text-secondary whitespace-break-spaces">{text}</span>
    </div>
  );
};

export default info;
