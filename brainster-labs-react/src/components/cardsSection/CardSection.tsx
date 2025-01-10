import React from "react";
import "../cardsSection/cardSection.css";
import Card from "../card/Card.tsx";

interface props {
  items: {
    date: String;
    desc: String;
    id: String;
    image: String;
    name: String;
    slug: String;
    title: String;
  };
  showMore: () => void;
}
export default function CardSection({ items, showMore }) {
  let data = items;
  console.log(data);
  return (
    <div className="card-section">
      <h1>Projects</h1>
      <div className="content">
        {data.map((el, i) => (
          <Card
            ket={i}
            id={el.id}
            img={el.img}
            name={el.name}
            title={el.title}
            desc={el.desc}
            date={el.date}
          />
        ))}
      </div>
      <button className="show-more" onClick={() => showMore()}>
        Show more
      </button>
    </div>
  );
}
