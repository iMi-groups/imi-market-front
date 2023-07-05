export const CardButton = ({
  quantity,
  setCart,
  deleteCart,
  increaseCart,
  decreaseCart,
  className,
  text = "Add",
}) => {
  return (
    <button
      className={`btn card-btn ${className} ${quantity > 0 ? "active" : ""}`}
      onClick={() => quantity === 0 && setCart()}
    >
      <span
        className="controller minus__wrapper"
        onClick={() => (quantity !== 1 ? decreaseCart() : deleteCart())}
      >
        <span className="minus">-</span>
      </span>
      <h4
        className="content"
        style={{ cursor: `${quantity > 0 ? "default" : "pointer"}` }}
      >
        {quantity === 0 ? text : quantity}
      </h4>
      <span className="controller plus__wrapper" onClick={increaseCart}>
        <span className="plus">+</span>
      </span>
    </button>
  );
};
