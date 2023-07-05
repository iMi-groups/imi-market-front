import { CategoryCard } from "..";

export const CategoriesList = ({ categories }) => {
  return (
    <div className="categories__list">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};
