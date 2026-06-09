import { Alert, Info } from "@/lib/icons";

const Aviso = ({
  text,
  type,
}: {
  text: string;
  type?: "info" | "atention";
}) => {
  return (
    <div className="flex gap-x-1 items-center mx-auto text-primary">
      <div>{type === "atention" ? <Alert /> : <Info />}</div>
      <span className="leading-snug text-secondary">{text}</span>
    </div>
  );
};

export default Aviso;
