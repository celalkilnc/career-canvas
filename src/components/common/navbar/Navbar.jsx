import React, { useEffect, useState } from "react";
import "./NavbarStyle.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  // const location =    useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.6 }
    );

    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="navbar">
      <ul className="navItems">
        <li className="navItem">
          <a
            href="#information"
            className="navItem"
            style={{ textDecoration: "none" }}
          >
            <div className="ball"></div>
          </a>
        </li>
        <li className="navItem">
          <a
            href="#experience"
            className="navItem"
            style={{ textDecoration: "none" }}
          >
            <div className="ball"></div>
          </a>
        </li>
        <li className="navItem">
          <a
            href="#education"
            className="navItem"
            style={{ textDecoration: "none" }}
          >
            <div className="ball"></div>
          </a>
        </li>
        <li className="navItem">
          <a
            href="#projects"
            className="navItem"
            style={{ textDecoration: "none" }}
          >
            <div className="ball"></div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
