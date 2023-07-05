import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CardButton, Icon, ImgGallery, ProductsList } from "..";
import { formatCurrency, getPrice } from "../../utils";
import { likeIconSvg, starIconSvg, closeIconSvg } from "../../data/icons";
import { closeProductModal } from "../../redux/slices/layoutSlice";

const productsData = [
  {
    id: 1,
    category: 1,
    name: "Apples",
    slug: "apples",
    weight: "1lb",
    description:
      "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
    price: 2,
    discount: 20,
    sellers: 1,
  },
  {
    id: 2,
    category: 1,
    name: "Apples",
    slug: "apples",
    weight: "1lb",
    description:
      "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
    price: 2,
    discount: 20,
    sellers: 1,
  },
];

const sellersData = [
  {
    id: 1,
    name: "Grocery Shop",
    url: "/",
  },
];

const productImages = [
  {
    id: 1,
    product: 1,
    img: "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F572%2Fapple-1.png&w=1080&q=75",
  },
  {
    id: 2,
    product: 1,
    img: "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F573%2Fapple-2.png&w=1080&q=75",
  },
  {
    id: 3,
    product: 1,
    img: "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F574%2Fapple.png&w=1080&q=75",
  },
  {
    id: 4,
    product: 1,
    img: "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F736%2Fapple-2.png&w=1080&q=75",
  },
  {
    id: 5,
    product: 2,
    img: "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F572%2Fapple-1.png&w=1080&q=75",
  },
];

export const ProductModal = ({ product }) => {
  const [isGallery, setIsGallery] = useState(false);
  const {
    id,
    category,
    sellers,
    discount,
    slug,
    name,
    weight,
    price,
    description,
  } = productsData[0];
  const productImgs = productImages.filter((img) => img.product === id);
  const { categories, products } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsGallery(productImgs.length > 1);
  }, [productImgs]);

  return (
    <div className="product__modal-container">
      <div className="product__modal">
        <div className="product__modal-info">
          <Icon
            icon={closeIconSvg}
            className="product__modal-close"
            onClick={() => dispatch(closeProductModal())}
          />
          {isGallery ? (
            <ImgGallery
              product={product}
              discount={discount}
              productImages={productImages}
            />
          ) : (
            <div className="product__img">
              {productImgs.map((img) => (
                <img key={img.id} src={img.img} alt={img.product} />
              ))}
            </div>
          )}
          <div className="product__modal-info-content">
            <div className="content__row title">
              <a href={`/product/${slug}/`} className="product__name">
                {name}
              </a>
              <Icon icon={likeIconSvg} className="like-icon" />
            </div>
            <div className="content__row rating">
              <p className="product__weight">{weight}</p>
              <Button
                text="4.67"
                icon={starIconSvg}
                className="primary md star__button"
              />
            </div>
            <p className="product__description">{description}</p>
            <h2 className="product__price">
              {formatCurrency(getPrice(price, discount))}
              {discount && (
                <span className="del product__price-discount">
                  {formatCurrency(discount)}
                </span>
              )}
            </h2>
            <div className="content__row quantity">
              <CardButton
                quantity={0}
                className="lg"
                text="Add To Shopping Cart"
              />
              <p className="available-quantity">18 pieces available</p>
            </div>
            <div className="product__categories-wrapper">
              <div className="data__wrapper categories">
                <h4 className="title">Category</h4>
                {categories.items
                  .filter((item) => item.id === category)
                  .map((productCategory) => (
                    <p
                      key={productCategory.id}
                      className="category data__content"
                    >
                      {productCategory.name}
                    </p>
                  ))}
              </div>
              <div className="data__wrapper sellers">
                <h4 className="title">Sellers</h4>
                {sellersData
                  .filter((item) => item.id === sellers)
                  .map((seller) => (
                    <a
                      key={seller.id}
                      href={seller.url}
                      className="seller data__content"
                    >
                      {seller.name}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="product__modal-details">
          <h4 className="title">Details</h4>
          <p className="description">{description}</p>
        </div>
        <div className="related-products">
          <div className="title">Related Products</div>
          <ProductsList
            key={product.id}
            products={products.items.slice(1, 10)}
          />
        </div>
      </div>
    </div>
  );
};
