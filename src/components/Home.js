import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import Contact, { MagneticButton } from "./Contact";
import Typewriter from "typewriter-effect";
import "./home.css";
import Project from "./Project";
import { RightArrow } from "../accets/icons/Icon";
import classNames from "classnames";

function Home() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const navbarRef = useRef(null);
  const [sticky, setSticky] = useState("");
  const colors = ["red", "green", "blue", "orange", "purple"];
  const [respNavbar, setRespNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let val = window.scrollY;
      if (val < 700) {
        img1Ref.current.style.top = val * 0.8 + "px";
        img2Ref.current.style.top = val * 0.6 + "px";
      }
      if (val > 500) setSticky("sticky");
      else setSticky("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const myractive = classNames("mobile-menu", {
    open: respNavbar,
  });

  const displayMobileNavLinks = classNames("mobile-nav-wrapper", {
    open: respNavbar,
  });

  return (
    <div>
      <header className={`head-container ${sticky}`} ref={navbarRef}>
        <div className="nav-box">
          <nav className="nav-left navigation-links">
            <a href="#" className="logo">
              <img src={require("../accets/img/logo.png")} alt="" />
            </a>
            <div
              aria-label="Toggle Mobile Menu Button"
              className={`right-logo ${myractive} `}
              onClick={() => setRespNavbar(!respNavbar)}
            >
              <div className="bar-one" />
              <div className="bar-two" />
              <div className="bar-three" />
            </div>
          </nav>

          <nav
            arai-label="mobile navigation"
            className={`desktop ${displayMobileNavLinks}`}
          >
            <Link
              activeClass="myactive"
              to="Home"
              smooth={true}
              spy={true}
              duration={2000}
            >
              Home
            </Link>
            <Link
              activeClass="myactive"
              to="project"
              smooth={true}
              spy={true}
              duration={2000}
            >
              Project
            </Link>
            <Link
              activeClass="myactive"
              to="content"
              smooth={true}
              spy={true}
              duration={2000}
              offset={-180}
            >
              About Me
            </Link>
            <Link
              activeClass="myactive"
              to="cont"
              smooth={true}
              spy={true}
              duration={2000}
            >
              Contacts
            </Link>
          </nav>

          <nav className="nav-right resp">
            <MagneticButton
              className="nav-link button "
              scale={2}
              tollerance={0.8}
              speed={0.3}
              borderRadius={20}
            >
              <Link
                activeClass="myactive"
                to="Home"
                smooth={true}
                spy={true}
                duration={2000}
              >
                Home
              </Link>
            </MagneticButton>
            <MagneticButton
              className="nav-link button "
              scale={2}
              tollerance={0.8}
              speed={0.3}
              borderRadius={20}
            >
              <Link
                activeClass="myactive"
                to="project"
                smooth={false}
                offset={10}
                spy={true}
                duration={4000}
              >
                Project
              </Link>
            </MagneticButton>
            <MagneticButton
              className="nav-link button "
              scale={2}
              tollerance={0.8}
              speed={0.3}
              borderRadius={20}
            >
              <Link
                activeClass="myactive"
                to="content"
                smooth={true}
                spy={true}
                duration={2000}
                offset={-180}
              >
                About Me
              </Link>
            </MagneticButton>
            <MagneticButton
              className="nav-link button "
              scale={2}
              tollerance={0.8}
              speed={0.3}
              borderRadius={20}
            >
              <Link
                activeClass="myactive"
                to="cont"
                smooth={false}
                spy={true}
                duration={2000}
              >
                Contacts
              </Link>
            </MagneticButton>
          </nav>
        </div>
      </header>
      <div className="parallax-img" id="Home">
        <img
          src={require("../accets/img/1.png")}
          className="img"
          ref={img1Ref}
          alt=""
        />
        <img
          src={require("../accets/img/2.png")}
          className="img"
          ref={img2Ref}
          alt=""
        />
        <div className="img img3" ref={img3Ref}>
          <div className="hometext-box">
            <section className="hoemtext">
              <div className="animated-text-box">
                <h1 className="home-animated-text">Hi! I am </h1>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "home-animated-text",
                    cursorClassName: "home-animated-cursor",
                  }}
                  onInit={(typewriter) => {
                    // onInit callback function
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        '<span style="color: #ac9cff;" class="home-animated-text">Shubham Chadokar</span>'
                      )
                      .pauseFor(300)
                      .deleteAll()
                      .typeString("a ")
                      .typeString(" software developer")
                      .deleteAll()
                      .typeString("Fullstack developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        'currently enrolled in Btech program at <span style="color: #ac9cff;" class="home-animated-text">IIT Kharagpur</span>'
                      )
                      .start();
                  }}
                />
              </div>
              <a
                href="https://drive.google.com/file/d/10TzF5xOv6rEw0KtwoO_I0qzFxNhZ0nrn/view?usp=sharing"
                target="_blank"
                className="resume"
                onClick={() => console.log("clicked")}
              >
                <MagneticButton
                  className="button-1"
                  scale={2}
                  tollerance={0.8}
                  speed={0.3}
                  borderRadius="50%"
                >
                  Resume
                </MagneticButton>
              </a>
            </section>
          </div>
          <img
            src={require("../accets/img/3.png")}
            style={{ width: "100%" }}
            alt=""
          />
        </div>
      </div>
      <div className="content-container" id="content">
        <span>
          My name is Shubham Chadokar, and I am a third-year undergraduate
          student at IITKGP, majoring in Manufacturing Science and Engineering.
          Born and raised in Betul, Madhya Pradesh.
          <br />
          <br />
          Throughout my course, I have completed several key courses, including
          Probability and Statistics, Programming and Data Structures, Linear
          Algebra, Machine Learning Foundation and Application, and Operation
          Research. These courses have provided me with a solid understanding of
          the core principles of computer science and have given me the skills I
          need to solve complex problems. <br />
          <br />
          In addition to these courses, I have also taken the time to learn some
          of the most in-demand programming languages and frameworks in the
          industry today. I am proficient in languages such as JavaScript,
          C/C++, Python, and Java, and I have also gained expertise in popular
          frameworks such as React JS, Angular JS, Next JS, Redux, and Three.js.
          In the backend, I have gained experience with Node JS, Express JS, JWT
          authentication, and MongoDB.
          <br />
          <br />
          To further enhance my skills and experience in development, I have
          completed a full-stack internship at Uttertale. During this
          internship, I was responsible for developing the company's entire
          website, which included authentication pages, profile pages, an edit
          profile page with an auto-save feature, a group chat, and a personal
          chat feature similar to Discord. I also created real-time analysis of
          news data for different individuals in timeline form using line charts
          and bar charts. To accomplish all of this, I learned how to use
          react-select, Tailwind CSS, Material UI, and React-popover, and I
          built my own functions for a parallax effect, magnetic effect, and an
          animated typewriter.
          <br />
          <br />
          What sets me apart is my passion for exploring new technologies and my
          eagerness to learn new skills. Throughout my academic and professional
          career, I have consistently sought opportunities to expand my
          knowledge and apply it to real-life projects. I am highly motivated
          and committed to producing quality work that meets the highest
          standards. Additionally, my ability to work in a team and communicate
          effectively with stakeholders makes me an asset to any project.
          <br />
          <br />
          In conclusion, my academic and professional experiences have prepared
          me to excel in the field of computer science and engineering. I am
          confident that I can leverage my skills, knowledge, and enthusiasm to
          make a valuable contribution to any organization. Thank you for
          considering my application, and I look forward to the opportunity to
          work with you.
        </span>
      </div>
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
