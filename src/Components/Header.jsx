/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

/**
 * Header now accepts props:
 * - name: displayed next to the avatar
 * - avatar: path to an image (svg/png)
 * - secondaryColor: optional background color for the header
 */
const Header = ({ name = "", avatar = "", secondaryColor = "rgba(255,255,255,0.75)" }) => {
  return (
    <header
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        background: secondaryColor,
        padding: "0.6rem 1.25rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxSizing: "border-box",
      }}
    >
      <div className="header-left" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        {avatar && <img src={avatar} alt="profile" className="header-avatar" />}
        {name && <span style={{ fontWeight: 700 }}>{name}</span>}
      </div>

      <nav style={{ display: "flex", gap: "1.25rem", justifyContent: "center", flex: 1 }}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#footer">Contact</a>
      </nav>

      <div style={{ width: "3rem" }}>{/* spacer for balanced layout */}</div>
    </header>
  );
};

export default Header;
