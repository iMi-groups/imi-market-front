import { ProductCard } from "..";

export const ProductsList = ({ products }) => {
  return (
    <div className="products__list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
