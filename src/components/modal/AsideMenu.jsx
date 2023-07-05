import { CategoriesList } from "..";

export const AsideMenu = ({ categories }) => {
  return (
    <div className="aside-menu">
      <CategoriesList categories={categories} />
    </div>
  );
};
