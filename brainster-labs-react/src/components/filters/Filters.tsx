import React from "react";
import "../filters/filters.css";
import check from "./../../images/filters/pngegg.png";

export default function Filters() {
  return (
    <div className="filters">
      <div className="filter">
        <div className="content">
          <p>Projects created by students of maerketing academy</p>
          <img src={check} alt="" />
        </div>
      </div>
      <div className="filter">
        <div className="content">
          <p>BTN</p>
          <img src={check} alt="" />
        </div>
      </div>
      <div className="filter">
        <div className="content">
          <p>BTN</p>
          <img src={check} alt="" />
        </div>
      </div>
    </div>
  );
}
