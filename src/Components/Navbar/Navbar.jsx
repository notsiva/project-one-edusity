import React, { useEffect, useState } from "react";
import "./Navbar.css";

import logo from "../../../assets/logo.png";
import menuIcon from "../../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [hiddenMenu, setHiddenMenu] = useState(false);
  const toggleMenu = () => {
    hiddenMenu ? setHiddenMenu(false) : setHiddenMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <a href="/">
        <img src={logo} alt="website logo" />
      </a>
      <ul className={hiddenMenu ? "" : "hide-menu-icon"}>
        <li>
          <Link to="hero" smooth={true} offset={50} duration={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={0}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={0}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={0}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={0}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={0}>
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
      <img src={menuIcon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
