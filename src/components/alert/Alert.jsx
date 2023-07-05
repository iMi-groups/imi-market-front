import { Icon } from "..";
import { closeIconSvg } from "../../data/icons";

export const Alert = ({ text, image, className, onClick }) => {
  return (
    <div className={`alert ${className}`}>
      <Icon
        icon={closeIconSvg}
        className="alert__close-icon"
        onClick={onClick}
      />
      {text && <h4 className="text">{text}</h4>}
      {image && image}
    </div>
  );
};
