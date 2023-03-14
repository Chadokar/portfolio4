import React, { useEffect } from "react";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="project" id="project">
      <h1 className="achievement">Projects</h1>
      <div className="project-box">
        <div
          className="project-container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <p href="#">
            <img src={require("../accets/img/Internshiplogo.png")} alt="" />
          </p>
          <div className="project-text">
            <p href="#" className="project-heading ">
              <h2>Frontend Internship: UTTERTALE</h2>
            </p>
            <p className="des-project">
              Built feature-rich Prandit web page using React JS, resolved API
              issues, created dynamic ChartJs visualizations. Overcame dropdown
              and chat tagging challenges, delivering stunning UI/UX.
            </p>
          </div>
        </div>

        <div
          className="project-container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <p href="#">
            <img src={require("../accets/img/Gears-1.png")} alt="" />
          </p>
          <div className="project-text">
            <p href="#" className="project-heading ">
              <h2>Gear Axis Transfer</h2>
            </p>
            <p className="des-project">
              Under the guidance of Proff. Arkopal K Goswami I created a model
              that transfers axis in perpendicular and rotational directions
              using orthogonal projections and transformation matrices for
              precise movement control.
            </p>
          </div>
        </div>

        <div
          className="project-container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <p href="#">
            <img src={require("../accets/img/Developerlogo.png")} alt="" />
          </p>
          <div className="project-text">
            <p href="#" className="project-heading ">
              <h2>Clone-Flashcard-Mobile-App</h2>
            </p>
            <p className="des-project">
              Developed an editable flashcard mobile app using React Native,
              with smooth navigation and animated features to enhance user
              experience and progress tracking, deployed on GitHub.
            </p>
          </div>
        </div>
      </div>
      <br />
      <h1 className="achievement">Achievements</h1>
      <div className="project-box">
        <div
          className="project-container"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <p href="#">
            <img
              src={require("../accets/img/cn.png")}
              alt=""
              style={{ borderRadius: "50%", width: 137, margin: 30 }}
            />
          </p>
          <div className="project-text">
            <p href="#" className="project-heading ">
              <h2>Excellent in C++</h2>
            </p>
            <p className="des-project">
              I have demonstrated excellence in C++ programming by completing
              all assignments accurately and on time, showcasing my proficiency
              and commitment to delivering high-quality work.
            </p>
          </div>
        </div>

        <div
          className="project-container"
          data-aos="fade-up"
          // data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <p href="#">
            <img src={require("../accets/img/caselogo.png")} alt="" />
          </p>
          <div className="project-text">
            <p href="#" className="project-heading ">
              <h2>Inter Hall Case Study </h2>
            </p>
            <p className="des-project">
              As a member of the gold-winning team in the inter-hall case study
              competition, we tackled multi-dimensional challenges in
              transitioning to eco-friendly energy sources.
            </p>
          </div>
        </div>

        <div
          className="project-container"
          data-aos="fade-left"
          // data-aos-anchor-placement="right-left"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <p href="#">
            <img src={require("../accets/img/Developerlogo.png")} alt="" />
          </p>
          <div className="project-text">
            <p href="#" className="project-heading ">
              <h2>Cleared JEE Advance</h2>
            </p>
            <p className="des-project">
              I have successfully cleared one of India's most challenging exams
              JEE Advance, establishing myself as one of the top 1% of students
              in the country in that exam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
