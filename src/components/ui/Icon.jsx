export const Icon = ({ icon, className, onClick }) => {
  return (
    <div className={`icon ${className}`} onClick={onClick}>
      {icon}
    </div>
  );
};
