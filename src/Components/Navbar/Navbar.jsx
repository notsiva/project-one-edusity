import React, { useEffect, useState } from "react";
import "./Navbar.css";

import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <a href="/">
        <img src={logo} alt="website logo" />
      </a>
      <ul className="nav-list">
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
    </nav>
  );
};

export default Navbar;
