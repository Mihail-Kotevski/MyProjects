import React from "react";
import Header from "../components/header/Header.tsx";
import Banner from "../components/banner/Banner.tsx";
import Filters from "../components/filters/Filters.tsx";
import CardSection from "../components/cardsSection/CardSection.tsx";
import Footer from "../components/footer/Footer.tsx";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [data, setData] = useState<any>([]);
  const [filter, setFilter] = useState<string>("");
  const [itemsNumber, setItemsNumber] = useState<number>(6);

  useEffect(() => {
    fetch(
      `http://localhost:8000/academies?slug=${filter}&_limit=${itemsNumber}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter, itemsNumber]);

  function filters(arg: string) {
    setFilter(arg === filter ? "" : arg);
  }

  function showMore(arg: string) {
    setItemsNumber((prevCount) => prevCount + 6);
    console.log("im clicked");
  }

  return (
    <>
      <Banner />
      <Filters filters={filters} filterBy={filter} />
      <CardSection items={data} showMore={showMore} />
    </>
  );
}
