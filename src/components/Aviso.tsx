import {
  faCircleExclamation,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aviso = ({
  text,
  type,
}: {
  text: string;
  type?: "info" | "atention";
}) => {
  return (
    <div className="flex gap-x-2 items-center mx-auto text-primary text-sm">
      <div>
        {type === "atention" ? (
          <FontAwesomeIcon icon={faCircleExclamation} size="xl" width={24} />
        ) : (
          <FontAwesomeIcon icon={faCircleInfo} size="xl" width={24} />
        )}
      </div>
      <span className="leading-snug text-secondary">{text}</span>
    </div>
  );
};

export default Aviso;
