import { useSelector, useDispatch } from "react-redux";
import { Logo, Icon } from "..";
import { closeMenuMobile } from "../../redux/slices/layoutSlice";
import { closeIconSvg } from "../../data/icons";

export const MenuMobile = ({ content }) => {
  const { layout } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className={`side-bar ${layout.menuMobileIsOpen ? "open" : ""}`}>
      <div className="side-bar__header">
        <Logo />
        <Icon
          icon={closeIconSvg}
          className="side-bar-close__icon"
          onClick={() => dispatch(closeMenuMobile())}
        />
      </div>
      <div className="side-bar__content">{content}</div>
    </div>
  );
};
