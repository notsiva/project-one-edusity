import React from "react";
import "./Contact.css";
import messageIcon from "../../../assets/msg-icon.png";
import mailIcon from "../../../assets/mail-icon.png";
import phoneIcon from "../../../assets/phone-icon.png";
import locationIcon from "../../../assets/location-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="left-section contact-col">
        <h2 className="title">Send Us a Message</h2>
        <p className="description">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul className="items">
          <li className="item">
            <p> info@edusity.com</p>
          </li>
          <li className="item">
            <p> +91-9498000098</p>
          </li>
          <li className="item">
            <p>
              Keelapavoor,Tenkasi <br /> Tamil Nadu
            </p>
          </li>
        </ul>
      </div>
      <div className="right-section contact-col"></div>
    </div>
  );
};

export default Contact;
