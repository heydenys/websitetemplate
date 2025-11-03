/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

// Prefer a real photo if the repo contains profile.jpg or profile.png.
// We attempt to require them so bundlers that support require() will
// include the file if present; otherwise fall back to the SVG placeholder.
let profile;
try {
  profile = require("./images/profile.jpg");
} catch (err1) {
  try {
    profile = require("./images/profile.png");
  } catch (err2) {
    profile = require("./images/profile.svg");
  }
}

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */

const siteProps = {
  name: "Alexandrie Grenier",
  title: "Web Designer & Content Creator",
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

// Personalization content: update these strings to reflect your bio and skills
const aboutDescription =
  "I'm a UI/UX student studying at Barnett Technical University. I enjoy creating unique and simplistic user interfaces in creative ways.";

const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const App = () => {
  return (
    <div id="main">
  <Header name={siteProps.name} avatar={profile} secondaryColor={secondaryColor} />
  <Home name={siteProps.name} title={siteProps.title} />
  <About description={aboutDescription} skillsList={skillsList} detailOrQuote={detailOrQuote} />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
