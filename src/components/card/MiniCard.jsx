import { useDispatch } from "react-redux";
import { Icon, QuantityController } from "..";
import { formatCurrency, getPrice } from "../../utils";
import { closeIconSvg } from "../../data/icons";
import {
  deleteCart,
  increaseCart,
  decreaseCart,
} from "../../redux/slices/cartSlice";

export const MiniCard = ({ product }) => {
  const { id, quantity, image, name, price, discount } = product;

  const dispatch = useDispatch();

  return (
    <div className="mini-card">
      <QuantityController
        quantity={quantity}
        deleteCart={() => dispatch(deleteCart(id))}
        increaseCart={() => dispatch(increaseCart(id))}
        decreaseCart={() => dispatch(decreaseCart(id))}
      />
      <div className="mini-card__img">
        <img src={image} alt={name} />
      </div>
      <div className="mini-card__content">
        <div className="mini-card__content-left">
          <h4 className="name">{name}</h4>
          <h5 className="price">{formatCurrency(getPrice(price, discount))}</h5>
          <p className="qty-text">{quantity} X 1lb</p>
        </div>
        <div className="mini-card__content-right">
          <h5 className="total-price">
            {formatCurrency(getPrice(price, discount) * quantity)}
          </h5>
          <Icon
            icon={closeIconSvg}
            className="close-icon"
            onClick={() => dispatch(deleteCart(id))}
          />
        </div>
      </div>
    </div>
  );
};
