import React from "react";
import "./Hero.css";
import darkArrow from "../../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <section className="hero container" id="home">
      <div className="hero-text">
        <h1>We ensure better education for better world</h1>
        <p>
          Our cutting-edge curiculum is designed to empower students with the
          knowledge, skills , and experience needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <img src={darkArrow} alt="Arrow Image" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
