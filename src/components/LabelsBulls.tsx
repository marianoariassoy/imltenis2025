import { Bull } from "@/lib/icons";

const LabelsBulls = ({
  label1,
  label2,
}: {
  label1: string;
  label2: string;
}) => {
  return (
    <div className="flex items-center gap-2 justify-center mb-2">
      <div className="flex items-center gap-2">
        <span className="text-primary">
          <Bull />
        </span>
        <span className="text-secondary">{label1}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-secondary">
          <Bull />
        </span>
        <span className="text-secondary">{label2}</span>
      </div>
    </div>
  );
};

export default LabelsBulls;
