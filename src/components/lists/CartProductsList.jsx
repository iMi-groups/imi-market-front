import { MiniCard } from "..";

export const CartProductsList = ({ products }) => {
  return (
    <div className="cart__products-list">
      {products.map((product) => (
        <MiniCard key={product.id} product={product} />
      ))}
    </div>
  );
};
