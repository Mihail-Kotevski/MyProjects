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
  // const [filterData, setFilterData] = useState<any>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/academies?slug=${filter}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter]);

  function filters(arg: string) {
    setFilter(arg === filter ? "" : arg);
  }

  return (
    <>
      <Banner />
      <Filters filters={filters} filterBy={filter} />
      <CardSection data={data} />
    </>
  );
}
