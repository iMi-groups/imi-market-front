export const QuantityController = ({
  quantity,
  deleteCart,
  increaseCart,
  decreaseCart,
}) => {
  return (
    <div className="quantity-controller">
      <button className="controller plus__wrapper" onClick={increaseCart}>
        <span className="plus">+</span>
      </button>
      <h5 className="quantity">{quantity}</h5>
      <button
        className="controller minus__wrapper"
        onClick={() => (quantity !== 1 ? decreaseCart() : deleteCart())}
      >
        <span className="minus">-</span>
      </button>
    </div>
  );
};
