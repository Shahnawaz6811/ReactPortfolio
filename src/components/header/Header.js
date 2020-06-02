import React, { useState } from "react";
import "./Header.scss";
const Header = ({ socials = [] }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const name = useState("Shahnawaz")[0];

  return (
    <header id="header">
      <div
        className={`mobile-toggle ${isNavOpen ? "closeMenu" : ""}`}
        onClick={() => {
          if (isNavOpen) {
            setNavOpen(false);
          } else {
            setNavOpen(true);
          }
        }}
      >
        {" "}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`main_nav ${isNavOpen ? "open-nav sticky" : "sticky"}`}>
        <nav className=".nav">
          <ul>
            <li className="current">
              <a className="smoothscroll" href="#header">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#works">
                Works
              </a>
            </li>

            <li>
              <a
                href="https://drive.google.com/file/d/1v5FoiB__7Q5dRMOWtbsjlFOTrOJp9FLD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="banner">
        <div className="text">
          <p>
            <span>
              <strong className="animate-popin">Hi,</strong>
            </span>
            <span className="animate-popin hello-text">my name is </span>
          </p>
          <h1 className="animate-popin">{name}.</h1>
          <h3 className="animate-popin">
            I'm a <span>Software Developer</span> based in{" "}
            <span>New Delhi,India </span> currently employed by{" "}
            <span>{<a href="https://www.wdmtech.com">WDMTech</a>}</span>. I am
            specialized in building(and occasionally designing){" "}
            <span>websites</span> and <span>applications</span> , and everything
            in between .
          </h3>
          <hr />
        </div>

        <ul className="social">
          {socials.map((network) => (
            <li key={network.name}>
              <a href={network.url} target="_blank">
                <i className={network.className}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="scrolldown-container">
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="fa fa-angle-down"></i>
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
