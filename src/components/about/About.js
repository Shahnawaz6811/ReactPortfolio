import React from "react";

const About = () => {


  return (
    <section id="about">
      <div className="wrapper">
        <div className="bio">
          <h2>About Me</h2>

          <p>
            Hello! I'm Shahnawaz, a software engineer based in Delhi, India.{" "}
            <br />I enjoy creating things that live on the internet, whether
            that be websites, applications, or anything in between. My goal is
            to always build products that provide pixel-perfect, performant
            experiences.
          </p>
        </div>
        <div className="image-container">
          <img
            src="/images/profilepic.jpeg"
            className="profile-pic"
            alt="Shahnawaz Khan Profile Pic"
          />
        </div>
      </div>

      {/* <div className="download">
        <a href={resumeDownload} target="_blank" className="button">
          <i className="fa fa-download"></i>Download Resume
        </a>
      </div> */}
    </section>
  );
};

export default About;
