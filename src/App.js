import React from "react";
import ReactGA from "react-ga";
import "./App.scss";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import About from "components/about/About";
import Resume from "components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";

const socials = [
  {
    name: "twitter",
    url: "https://twitter.com/Shahnway786",
    className: "fa fa-twitter",
  },

  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shahnawaz-khan-761707129/",
    className: "fa fa-linkedin",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/shahn6811/",
    className: "fa fa-instagram",
  },
  {
    name: "github",
    url: "https://github.com/Shahnawaz6811",
    className: "fa fa-github",
  },
  { name: "skype", url: "http://skype.com", className: "fa fa-skype" },
];

const App = () => {
  React.useEffect(() => {
    ReactGA.initialize("UA-110570651-1", {
      debug: true,
      titleCase: false,
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    });
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div className="App">
      <Header socials={socials} />
      <About />
      <Resume />
      <Portfolio />
      <Footer socials={socials} />
    </div>
  );
};

export default App;
