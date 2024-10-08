import { Link, NavLink } from "react-router-dom";
import style from "../styles/header.module.css";

function Header() {
  const styles = {
    borderRadius: "6px",
    color: "var(--white)",
    borderColor: "var(--grey-15)",
    backgroundColor: "var(--grey-08)",
  };

  return (
    <header className={style.header}>
      <Link className={style.header__sub}>
        ✨Discover Your Dream Property with Estatein
        <Link>Learn More</Link>
      </Link>
      <nav className={style.nav}>
        <Link to="/" className={style.logo}>
          <img
            src="/public/assets/Logo.svg"
            className={style.logo__image}
            alt="Logo Image"
          />
          <h5 className={style.logo__text}>Estatein</h5>
        </Link>
        <ul className={style.nav__list}>
          <li>
            <NavLink
              to="/"
              className={style.nav__link}
              style={({ isActive }) => (isActive ? styles : null)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={style.nav__link}
              style={({ isActive }) => (isActive ? styles : null)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/properties"
              className={style.nav__link}
              style={({ isActive }) => (isActive ? styles : null)}>
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={style.nav__link}
              style={({ isActive }) => (isActive ? styles : null)}>
              Services
            </NavLink>
          </li>
        </ul>
        <Link to="/contact" className={style.contact__link}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
