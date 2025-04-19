import React from "react";
import "./Contact.css";
import messageIcon from "../../../assets/msg-icon.png";
import mailIcon from "../../../assets/mail-icon.png";
import phoneIcon from "../../../assets/phone-icon.png";
import locationIcon from "../../../assets/location-icon.png";
import whiteArrow from "../../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f360c73c-6413-4578-a980-bce81ca59a38");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left-section contact-col">
        <h2 className="contact-title">
          Send Us a Message <img src={messageIcon} alt="" />
        </h2>
        <p className="contact-description">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul className="contact-items">
          <li className="contact-item">
            <img src={mailIcon} alt="" />
            <p> info@edusity.com</p>
          </li>
          <li className="contact-item">
            <img src={phoneIcon} alt="" />
            <p> +91-9498000098</p>
          </li>
          <li className="contact-item">
            <img src={locationIcon} alt="" />
            <p>
              Keelapavoor,Tenkasi <br /> Tamil Nadu
            </p>
          </li>
        </ul>
      </div>
      <div className="right-section contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email id"
            required
          />
          <label htmlFor=""> Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message here"
            required
            rows={6}
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={whiteArrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
