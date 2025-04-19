import React from "react";
import "./Programs.css";
import program_one from "../../../assets/program-1.png";
import program_two from "../../../assets/program-2.png";
import program_three from "../../../assets/program-3.png";
import program_icon_one from "../../../assets/program-icon-1.png";
import program_icon_two from "../../../assets/program-icon-2.png";
import program_icon_three from "../../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <section className="programs" id="program">
      <div className="program">
        <img src={program_one} alt="first program" />
        <div className="caption">
          <img src={program_icon_one} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_two} alt="first program" />
        <div className="caption">
          <img src={program_icon_two} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_three} alt="first program" />{" "}
        <div className="caption">
          <img src={program_icon_three} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
