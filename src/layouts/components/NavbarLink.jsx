export const NavbarLink = ({ slug, name }) => {
  return (
    <a href={`/${slug}`} className="navbar__link">
      {name}
    </a>
  );
};
