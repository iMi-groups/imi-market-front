import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "./components/Carousel";
import {
  ProductsList,
  CartButton,
  Alert,
  CategoriesList,
  Modal,
  SideBar,
  MenuMobile,
  AsideMenu,
  ProductModal,
  Loading,
} from "../../components";
import { Header, NavbarMobile, Cart, NavbarLinks } from "../../layouts";
import {
  closeCart,
  closeSideBar,
  closeMenuMobile,
  closeProductModal,
} from "../../redux/slices/layoutSlice";
import { getTotalPrice } from "../../utils";
import constructionImage from "/src/assets/images/construction.jpg";
import navbarLinks from "/src/data/navbarLinks.json";

export const HomePage = () => {
  const { layout, categories, products, banners, cart } = useSelector(
    (state) => state
  );
  const [alertIsOpen, setAlertIsOpen] = useState(true);
  const [checkout, setCheckout] = useState({
    total: 0,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setCheckout({
      ...checkout,
      total: getTotalPrice(cart.items),
    });
  }, [cart]);

  return (
    <main className="home-page">
      {/* <Loading /> */}
      <CartButton items={cart.items.length} total={checkout.total} />
      <Cart />
      <Modal
        className={
          layout.cartIsOpen ||
          layout.sideBarIsOpen ||
          layout.menuMobileIsOpen ||
          layout.productModalIsOpen
            ? "active"
            : ""
        }
        onClick={() => {
          dispatch(closeCart());
          dispatch(closeSideBar());
          dispatch(closeMenuMobile());
          dispatch(closeProductModal());
        }}
      />
      <div
        className={`product__modal-wrapper ${
          layout.productModalIsOpen ? "active" : ""
        }`}
      >
        <ProductModal product={products.items[0]} />
      </div>
      <SideBar content={<CategoriesList categories={categories.items} />} />
      <MenuMobile content={<NavbarLinks navabarLinks={navbarLinks} />} />
      <Alert
        image={<img src={constructionImage} alt="construction" />}
        className={`construction-alert ${alertIsOpen ? "active" : ""}`}
        onClick={() => setAlertIsOpen(false)}
      />
      <NavbarMobile />
      <main
        className={`main-content ${layout.productModalIsOpen ? "fixed" : ""}`}
      >
        <Header />
        <div className="banners">
          <Carousel banners={banners} />
        </div>
        <div className="main-content__row">
          <AsideMenu categories={categories.items} />
          <div className="products__wrapper">
            <ProductsList products={products.items} />
          </div>
        </div>
      </main>
    </main>
  );
};
