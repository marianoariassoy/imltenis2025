import { Info, Atention } from "../lib/icons";

const Aviso = ({
  text,
  type,
}: {
  text: string;
  type?: "info" | "atention";
}) => {
  return (
    <div className="text-secondary flex gap-x-1 items-center mx-auto">
      <span className="text-primary">
        {type === "atention" ? <Atention /> : <Info />}
      </span>
      <span className="leading-snug">{text}</span>
    </div>
  );
};

export default Aviso;
