import React from "react";
import "../card/card.css";
import img from "../../images/card/R.jpg";

export default function Card() {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="wrap-content">
        <div className="content">
          <span className="academy">Ime na akademija</span>
          <h2 className="title">Naslov</h2>
          <span className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis iste perferendis adipisci iusto vel.</span>
          <span className="date">Data 2025</span>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
  );
}
