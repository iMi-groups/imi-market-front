import { useSelector, useDispatch } from "react-redux";
import { Logo, Icon } from "..";
import { closeSideBar } from "../../redux/slices/layoutSlice";
import { closeIconSvg } from "../../data/icons";

export const SideBar = ({ content }) => {
  const { layout } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className={`side-bar ${layout.sideBarIsOpen ? "open" : ""}`}>
      <div className="side-bar__header">
        <Logo />
        <Icon
          icon={closeIconSvg}
          className="side-bar-close__icon"
          onClick={() => dispatch(closeSideBar())}
        />
      </div>
      <div className="side-bar__content">{content}</div>
    </div>
  );
};
