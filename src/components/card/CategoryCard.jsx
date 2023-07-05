import parse from "html-react-parser";

export const CategoryCard = ({ category }) => {
  const { icon, name } = category;

  return (
    <div className="category__card">
      <button className="category">
        <div className="icon">{parse(icon)}</div>
        <h4 className="name">{name}</h4>
      </button>
    </div>
  );
};
