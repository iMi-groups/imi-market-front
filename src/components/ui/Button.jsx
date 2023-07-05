export const Button = ({ icon, text, className, onClick }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text && text}
      {icon && icon}
    </button>
  );
};
