import { Icon } from "..";

export const Input = ({ label, type, icon, placeholder, className }) => {
  return (
    <div className={`input ${className}`}>
      {label && <label htmlFor={label}>{label}</label>}
      <span className="input__wrapper">
        {icon && <Icon icon={icon} />}
        <input type={type} id={label} placeholder={placeholder} />
      </span>
    </div>
  );
};
