import React, { useEffect, useState } from "react";
import "./Navbar.css";

import logo from "../../../assets/logo.png";
import menuIcon from "../../../assets/menu-icon.png";

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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#program">Program</a>
        </li>
        <li>
          <a href="#about"> About Us </a>
        </li>
        <li>
          <a href="#campus">Campus</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">
            <button className="btn">Contact us</button>
          </a>
        </li>
      </ul>
      <img src={menuIcon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
