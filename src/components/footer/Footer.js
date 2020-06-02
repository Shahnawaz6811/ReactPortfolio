import React, { Component } from "react";
import "./Footer.scss";
const Footer = ({ socials = [] }) => {
  return (
    <section id="site-footer">
      <div className="wrapper">
        <div className="contact-details">
          {/* <p className="address">
            <p> Tim Baker</p>
            <p>Okhla</p>
            <p>New, Delhi, India</p>
            <p>8882068724</p>
          </p> */}
        </div>

        <div className="center">
          <ul className="social">
            {socials.map((network) => (
              <li key={network.name}>
                <a href={network.url} target="_blank">
                  <i className={network.className}></i>
                </a>
              </li>
            ))}
          </ul>
          {/* <li>&copy; Copyright 2017 Tim Baker</li> */}
          <div className="designed-by">
            {" "}
            Design by <p>Shahnawaz Khan</p>
          </div>
        </div>
      </div>

      {/* <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open"></i>
        </a>
      </div> */}
    </section>
  );
};

export default Footer;
