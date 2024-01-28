import React from "react";
import "./footer.scss";
import logo from "../../assets/logogray.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLogoHolder">
        <Link to="/">
          <img src={logo} alt="footerLogo" />
        </Link>
      </div>
    </div>
  );
}
