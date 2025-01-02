import React from "react";
import "../header/header.css";
import logo from "./../../images/header/Logo.png";

export default function Header() {
  return (
    <div className="nav-bar">
      <div className="content-wrapper">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="" />
            <span>BRAINSTER</span>
          </div>
          <ul>
            <li>Academy for design</li>
            <li>Academy for coding</li>
            <li>Academy for markeeting</li>
            <li>Academy for data science</li>
          </ul>
          <button>Hire a student</button>
        </div>
      </div>
    </div>
  );
}
