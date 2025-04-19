import React from "react";
import "./Slider.css";

const Slider = ({
  Testimonial: { name, location, description, imageSrc },
  sliderRef,
}) => {
  return (
    <div className="slider" ref={sliderRef}>
      <ul className="list-items">
        <li className="item">
          <div className="profile">
            <img src={`../../../assets/${imageSrc}`} alt="" />
            <div className="info">
              <h3>{name}</h3>
              <h4>{location}</h4>
            </div>
          </div>
          <p>{description}</p>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
