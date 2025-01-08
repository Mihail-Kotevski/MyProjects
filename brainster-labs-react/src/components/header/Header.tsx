import React from "react";
import "../header/header.css";
import logo from "./../../images/header/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="nav-bar">
      <div className="content-wrapper">
        <div className="content">
          <Link className="logo" to="/">
            <img src={logo} alt="" />
            <span>BRAINSTER</span>
          </Link>
          <ul>
            <li>Academy for design</li>
            <li>Academy for coding</li>
            <li>Academy for markeeting</li>
            <li>Academy for data science</li>
          </ul>
          <Link to="/hireStudent" className="btn">
            Hire a student
          </Link>
        </div>
      </div>
    </div>
  );
}
