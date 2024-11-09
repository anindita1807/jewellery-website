import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdOutlineDiamond, MdOutlineShoppingBag, MdOutlineWatch, MdOutlineStyle } from "react-icons/md";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter gap-x-1">
          <MdHomeFilled />Home
        </div>
      </NavLink>
      <NavLink to="/Rings" className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter gap-x-1">
          <MdOutlineDiamond />Rings
        </div>
      </NavLink>
      <NavLink to="/Earrings" className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter gap-x-1">
          <MdOutlineShoppingBag />Earrings
        </div>
      </NavLink>
      <NavLink to="/Bangles" className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter gap-x-1">
          <MdOutlineWatch />Bangles
        </div>
      </NavLink>
      <NavLink to="/Necklace" className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter gap-x-1">
          <MdOutlineStyle />Necklace
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
