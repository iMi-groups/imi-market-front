import { NavbarLink } from "..";

export const NavbarLinks = ({ navabarLinks }) => {
  return (
    <ul className="navbar__links">
      {navabarLinks.map((link) => (
        <NavbarLink key={link.id} slug={link.slug} name={link.name} />
      ))}
    </ul>
  );
};
