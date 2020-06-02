import React from "react";
import "./About.scss";

const About = () => {
  var name = "Shahnawaz Khan";
  var profilepic = "images/profilepic.jpeg";
  var bio =
    "Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.";
  var street = "Shaheen Bagh,Okhla";
  var city = "New Delhi";
  var state = "Delhi";
  var zip = "110025";
  var phone = "8882068724";
  var email = "nawazkhan654321@gmail.com";
  var resumeDownload =
    "https://drive.google.com/file/d/1v5FoiB__7Q5dRMOWtbsjlFOTrOJp9FLD/view?usp=sharing";

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
