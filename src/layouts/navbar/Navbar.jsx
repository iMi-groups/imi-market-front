import { useDispatch, useSelector } from "react-redux";
import { NavbarLinks } from "..";
import { Input, Button, Icon, Logo } from "../../components";
import { openSideBar } from "../../redux/slices/layoutSlice";
import { searchIconSvg, filterIconSvg } from "../../data/icons";
import navbarLinks from "/src/data/navbarLinks.json";

export const Navbar = () => {
  const { layout } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <nav className={`header__navbar ${layout.searchIsOpen ? "hidden" : ""}`}>
      <div className="container">
        <div className="header__navbar-left">
          <button
            className="filter__button"
            onClick={() => dispatch(openSideBar())}
          >
            <Icon icon={filterIconSvg} /> Filter
          </button>
          <Logo />
          <Input
            type="search"
            icon={searchIconSvg}
            placeholder="Search your products from here..."
            className={`search ${layout.searchIsOpen ? "active" : ""}`}
          />
        </div>
        <div className="header__navbar-right">
          <NavbarLinks navabarLinks={navbarLinks} />
          <div className="action-btns__wrapper">
            <a href="/register">
              <Button text="Become a Seller" className="primary md" />
            </a>
            <a href="/login">
              <Button text="Join" className="primary md" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
