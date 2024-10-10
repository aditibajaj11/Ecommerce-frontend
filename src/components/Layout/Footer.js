import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  
  const footerStyle = {
    backgroundColor: "#000", 
    padding: "20px", 
    position: "relative", 
    bottom: "0",
    width: "100%", 
    textAlign: "center", 
    color: "#fff",
  };

  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none", 
    color: "#007bff", 
  };

  return (
    <div style={footerStyle}>
      <h1>All Right Reserved &copy; SmartTick</h1>
      <p className="mt-3">
        <Link to="/about" style={linkStyle}>About</Link> | 
        <Link to="/contact" style={linkStyle}>Contact</Link> | 
        <Link to="/policy" style={linkStyle}>Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
