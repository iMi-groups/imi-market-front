import { Navbar } from "..";
import headerBg from "/src/assets/images/background.jpg";

export const Header = () => {
  return (
    <div className="header" id="header">
      <Navbar />
      <div className="header__content">
        <h1 className="header__title">Groceries Delivered in 90 Minute</h1>
        <p className="header__description">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>
      </div>
      <div className="header__bg img">
        <img src={headerBg} alt="header background" />
      </div>
    </div>
  );
};
