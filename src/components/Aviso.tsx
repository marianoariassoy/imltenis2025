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
    <div className="flex gap-x-2 items-center mx-auto text-primary">
      <div>
        {type === "atention" ? (
          <FontAwesomeIcon icon={faCircleExclamation} size="lg" width={20} />
        ) : (
          <FontAwesomeIcon icon={faCircleInfo} size="lg" width={20} />
        )}
      </div>
      <span className="leading-snug text-secondary">{text}</span>
    </div>
  );
};

export default Aviso;
