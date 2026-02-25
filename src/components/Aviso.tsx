import { Info, Atention } from "../lib/icons";

const Aviso = ({
  text,
  type,
}: {
  text: string;
  type?: "info" | "atention";
}) => {
  return (
    <div className="text-secondary flex gap-x-1 mx-auto">
      <span className="text-primary">
        {type === "info" ? <Info /> : <Atention />}
      </span>
      <span className="leading-snug">{text}</span>
    </div>
  );
};

export default Aviso;
