import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/hobbies">Hobbies</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </header>
  );
}

export default Header;
