import React, { useRef, useState } from "react";
import "./Testimonials.css";
import nextbtn from "../../../assets/next-icon.png";
import backbtn from "../../../assets/back-icon.png";

import Testimonial from "../../data/testimonials.json";
import Slider from "../../Components/Slider/Slider.jsx";

const Testimonials = () => {
  const sliderRef = useRef();
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    if (tx > -50) {
      const newTx = tx - 25;
      setTx(newTx);
      sliderRef.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      const newTx = tx + 25;
      setTx(newTx);
      sliderRef.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  return (
    <div className="testimonials">
      <img src={backbtn} alt="" className="back-btn" onClick={slideBackward} />
      <img src={nextbtn} alt="" className="next-btn" onClick={slideForward} />
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {Testimonial.map((Testimonial, id) => {
            return <Slider key={id} Testimonial={Testimonial} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
