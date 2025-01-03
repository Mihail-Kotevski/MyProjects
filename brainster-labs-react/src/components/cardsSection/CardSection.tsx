import React from "react";
import "../cardsSection/cardSection.css";
import Card from "../card/Card.tsx";

export default function CardSection() {
    return (
      <div className="card-section">
        <div className="content">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
}
