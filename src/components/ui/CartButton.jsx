import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils";
import { openCart } from "../../redux/slices/layoutSlice";
import { cartIconSvg } from "../../data/icons";

export const CartButton = ({ items, total }) => {
  const dispatch = useDispatch();

  return (
    <button className="cart__button" onClick={() => dispatch(openCart())}>
      <div className="total__items">
        {cartIconSvg}
        <span className="item">
          {items} {items > 1 ? "Items" : "Item"}
        </span>
      </div>
      <div className="total__price">{formatCurrency(total)}</div>
    </button>
  );
};
