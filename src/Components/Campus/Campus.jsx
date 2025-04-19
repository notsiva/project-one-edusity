import React from "react";
import "./Campus.css";
import galleryOne from "../../../assets/gallery-1.png";
import galleryTwo from "../../../assets/gallery-2.png";
import galleryThree from "../../../assets/gallery-3.png";
import galleryFour from "../../../assets/gallery-4.png";
import whiteArrow from "../../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus" id="campus">
      <div className="gallery">
        <img src={galleryOne} alt="campus gallery Images" />
        <img src={galleryTwo} alt="campus gallery Images" />
        <img src={galleryThree} alt="campus gallery Images" />
        <img src={galleryFour} alt="campus gallery Images" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={whiteArrow} />
      </button>
    </div>
  );
};

export default Campus;
