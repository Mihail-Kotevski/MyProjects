import React from "react";
import "../card/card.css";
import img from "../../images/card/R.jpg";

interface props {
  id: Number;
  image: String;
  name: String;
  title: string;
  desc: String;
  date: String;
}

export default function Card(props) {
  return (
    <div className="card" id={props.id}>
      <img src={img} alt="" />
      <div className="wrap-content">
        <div className="content">
          <span className="academy">{props.name}</span>
          <h2 className="title">{props.title}</h2>
          <span className="text">{props.desc}</span>
          <span className="date">{props.date}</span>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
  );
}
