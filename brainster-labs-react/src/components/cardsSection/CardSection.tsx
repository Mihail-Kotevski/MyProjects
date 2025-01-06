import React from "react";
import "../cardsSection/cardSection.css";
import Card from "../card/Card.tsx";

interface Props {
  date: String;
  desc: String;
  id: String;
  image: String;
  name: String;
  slug: String;
  title: String;
}
export default function CardSection(Props) {
  let data = Props.data;
  console.log(data);
  return (
    <div className="card-section">
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
    </div>
  );
}
