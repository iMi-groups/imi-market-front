import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "../../components";
import {
  searchIconSvg,
  cartIconMenuSvg,
  menuIconSvg,
  homeIconSvg,
} from "../../data/icons";
import {
  openSearch,
  closeSearch,
  openCart,
  openMenuMobile,
} from "../../redux/slices/layoutSlice";

export const NavbarMobile = () => {
  const { layout, cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="navbar-mobile">
      <div className="container">
        <Button
          icon={<Icon icon={menuIconSvg} />}
          className="navbar-mobile__button menu-button"
          onClick={() => dispatch(openMenuMobile())}
        />
        <Button
          icon={<Icon icon={searchIconSvg} />}
          className="navbar-mobile__button search-button"
          onClick={() =>
            dispatch(layout.searchIsOpen ? closeSearch() : openSearch())
          }
        />
        <a href="/">
          <Button
            icon={<Icon icon={homeIconSvg} />}
            className="navbar-mobile__button home-button"
          />
        </a>
        <Button
          text={
            cart.items.length > 0 ? (
              <span className="quantity-index">{cart.items.length}</span>
            ) : null
          }
          icon={<Icon icon={cartIconMenuSvg} />}
          className="navbar-mobile__button cart-button"
          onClick={() => dispatch(openCart())}
        />
      </div>
    </div>
  );
};
