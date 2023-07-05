import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartProductsList, Icon } from "../../components";
import { formatCurrency, getTotalPrice } from "../../utils";
import { closeCart } from "../../redux/slices/layoutSlice";
import { cartIconSvg, closeIconSvg, emptyIconSvg } from "../../data/icons";

const Empty = () => {
  return (
    <div className="empty">
      <Icon icon={emptyIconSvg} />
      <p className="description">No Products Found</p>
    </div>
  );
};

export const Cart = () => {
  const [checkout, setCheckout] = useState({
    total: 0,
  });
  const { layout, cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setCheckout({
      ...checkout,
      total: getTotalPrice(cart.items),
    });
  }, [cart]);

  return (
    <div className={`cart ${layout.cartIsOpen ? "open" : ""}`}>
      <div className="cart__header-row">
        <div className="total__items">
          {cartIconSvg} {cart.items.length}{" "}
          {cart.items.length > 1 ? "Items" : "Item"}
        </div>
        <Icon
          icon={closeIconSvg}
          className="cart-close__icon"
          onClick={() => dispatch(closeCart())}
        />
      </div>
      {cart.items.length > 0 ? (
        <CartProductsList products={cart.items} />
      ) : (
        <Empty />
      )}
      <div className="cart__footer">
        <button className="cart-checkout__button">
          <span className="text">Checkout</span>
          <span className="total-price">{formatCurrency(checkout.total)}</span>
        </button>
      </div>
    </div>
  );
};
