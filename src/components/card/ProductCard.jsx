import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardButton, Discount } from "..";
import { formatCurrency, getPrice } from "../../utils";
import { setActiveProduct } from "../../redux/slices/productsSlice";
import { openProductModal } from "../../redux/slices/layoutSlice";
import {
  setCart,
  deleteCart,
  increaseCart,
  decreaseCart,
} from "../../redux/slices/cartSlice";

export const ProductCard = ({ product }) => {
  const { id, image, price, discount, name } = product;
  const [quantity, setQuantity] = useState(0);
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.items.filter((product) => product.id === id).length === 0) {
      setQuantity(0);
    }
    cart.items.map(
      (product) => product.id === id && setQuantity(product.quantity)
    );
  }, [cart]);

  return (
    <div className="product-card">
      {discount && <Discount discount={discount} />}
      <div
        className="product-card__img img"
        onClick={() => {
          dispatch(setActiveProduct(id));
          dispatch(openProductModal());
        }}
      >
        <img src={image} alt={name} />
      </div>
      <div className="product-card__content">
        <h4 className="price">
          {formatCurrency(getPrice(price, discount))}
          {discount && <span className="del">{formatCurrency(price)}</span>}
        </h4>
        <h3 className="name">{name}</h3>
        <CardButton
          quantity={quantity}
          setCart={() => dispatch(setCart(product))}
          deleteCart={() => dispatch(deleteCart(id))}
          increaseCart={() => dispatch(increaseCart(id))}
          decreaseCart={() => dispatch(decreaseCart(id))}
        />
      </div>
    </div>
  );
};
