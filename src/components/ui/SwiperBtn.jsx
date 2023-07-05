export const SwiperBtn = ({ children, className, onClick }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
