import React from "react";
import "../filters/filters.css";
import check from "./../../images/filters/pngegg.png";

interface props {
  filters: (arg: string) => void;
  filterBy: string;
}

export default function Filters({ filters, filterBy }: props) {
  return (
    <div className="filters">
      <div className={`filter ${filterBy === "coding" ? "active" : ""}`}>
        <div className="content" onClick={() => filters("coding")}>
          <p>Projects created by students of coding academy</p>
          {filterBy === "coding" ? <img src={check} alt="" /> : ""}
        </div>
      </div>
      <div
        className={`filter ${filterBy === "data-science" ? "active" : ""}`}
        onClick={() => filters("data-science")}
      >
        <div className="content">
          <p>Projects created by students of coding data-science</p>
          {filterBy === "data-science" ? <img src={check} alt="" /> : ""}
        </div>
      </div>
      <div
        className={`filter ${filterBy === "marketing" ? "active" : ""}`}
        onClick={() => filters("marketing")}
      >
        <div className="content">
          <p>Projects created by students of coding marketing</p>
          {filterBy === "marketing" ? <img src={check} alt="" /> : ""}
        </div>
      </div>
    </div>
  );
}
