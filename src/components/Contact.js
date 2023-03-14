import React, { useRef, useEffect, useState } from "react";
import "./MagneticButton.css";
import gsap from "gsap";
import { Facebook, GitHub, Linkdin, Mail, Twitter } from "../accets/icons/Icon";

/*--------------------
Magnetic Button
--------------------*/
export const MagneticButton = ({
  children,
  className,
  speed = 1,
  tollerance = 0.8,
  scale = 1.2,
  debug = false,
  borderRadius = 0,
  ...props
}) => {
  const $root = useRef();
  const $item = useRef();
  const $hover = useRef();
  const rootBound = useRef();
  const itemBound = useRef();
  const diffBound = useRef({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    gsap.killTweensOf($item.current);
    gsap.set($hover.current, {
      scale: scale,
      borderRadius,
      background: debug ? "rgba(0, 125, 255, .4)" : "transparent",
    });

    rootBound.current = $root.current.getBoundingClientRect();
    itemBound.current = $item.current.getBoundingClientRect();
    diffBound.current.x =
      (rootBound.current.width * scale - rootBound.current.width) / 2;
    diffBound.current.y =
      (rootBound.current.height * scale - rootBound.current.height) / 2;
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf($item.current);
    gsap.to($item.current, {
      x: 0,
      y: 0,
      ease: "elastic.out(1.1, .4)",
      duration: 1.2,
    });
    gsap.set($hover.current, {
      scale: 1,
    });
  };

  const handleMouseMove = (e) => {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    const maxX =
      ((rootBound.current.width - itemBound.current.width) / 2) * tollerance;
    const maxY =
      ((rootBound.current.height - itemBound.current.height) / 2) * tollerance;

    const newX = gsap.utils.mapRange(
      0,
      rootBound.current.width * scale,
      -maxX,
      maxX,
      x - rootBound.current.x + diffBound.current.x
    );
    // console.log("x = " + x, "y = " + y);
    // console.log(rootBound.current.x);
    // console.log(diffBound.current.x);

    const newY = gsap.utils.mapRange(
      0,
      rootBound.current.height * scale,
      -maxY,
      maxY,
      y - rootBound.current.y + diffBound.current.y
    );

    gsap.killTweensOf($item.current);
    gsap.to($item.current, {
      x: newX,
      y: newY,
      ease: "none",
      duration: speed,
    });
  };

  return (
    <button
      ref={$root}
      className={`magnetic-button ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onTouchStart={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      {...props}
    >
      <span ref={$item} className="magnetic-button--item">
        {children}
      </span>
      <span ref={$hover} className="magnetic-button--hover" />
    </button>
  );
};

function Contact() {
  return (
    <div className="contacts" id="cont">
      <div className="contact-icon">
        <MagneticButton
          className="icon-button"
          scale={1}
          tollerance={0.4}
          speed={0.2}
          borderRadius="50%"
          onClick={() => {
            console.log("click");
          }}
        >
          <a href="https://www.facebook.com/shubham.chadokar.50">
            <Facebook color="#f5f5f5" />
          </a>
        </MagneticButton>
        <MagneticButton
          className="icon-button"
          scale={1}
          tollerance={0.4}
          speed={0.25}
          borderRadius="50%"
          onClick={() => {
            console.log("click");
          }}
        >
          <a href="https://www.linkedin.com/in/shubham-chadokar-41b98320b/">
            <Linkdin color="#f5f5f5" />
          </a>
        </MagneticButton>
        <MagneticButton
          className="icon-button"
          scale={1}
          tollerance={0.8}
          speed={0.25}
          borderRadius="50%"
          onClick={() => {
            console.log("click");
          }}
        >
          <a href="mailto: shubhamwork63@gmail.com">
            <Mail color="#f5f5f5" />
          </a>
        </MagneticButton>
        <MagneticButton
          className="icon-button"
          scale={1}
          tollerance={0.8}
          speed={0.25}
          borderRadius="50%"
          onClick={() => {
            console.log("click");
          }}
        >
          <a href="https://github.com/Chadokar">
            <GitHub color="#f5f5f5" />
          </a>
        </MagneticButton>
      </div>
      <h5>© 2023 Shubham Chadokar</h5>
    </div>
  );
}

export default Contact;
