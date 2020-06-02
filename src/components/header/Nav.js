import React from "react";

const Nav = () => {
  return (
       <div class="main_nav">
        <div class="container">
          <div class="mobile-toggle">
            {" "}
            <span></span> <span></span> <span></span>{" "}
          </div>
          <nav>
            <ul>
              <li>
                <a class="smoothscroll" href="#header">
                  Home
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#skills">
                  Services
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#portfolio">
                  Work
                </a>
              </li>
              <li>
                <a class="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
   );
};

export default Nav;
