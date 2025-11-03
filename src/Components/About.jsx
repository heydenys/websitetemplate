/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import PropTypes from "prop-types";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const About = ({ description, skillsList, detailOrQuote }) => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

About.propTypes = {
  description: PropTypes.string,
  skillsList: PropTypes.arrayOf(PropTypes.string),
  detailOrQuote: PropTypes.string,
};

About.defaultProps = {
  description: "",
  skillsList: [],
  detailOrQuote: "",
};

export default About;
