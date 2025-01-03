import React from "react";
import Header from "../components/header/Header.tsx";
import Banner from "../components/banner/Banner.tsx";
import Filters from "../components/filters/Filters.tsx";
import CardSection from "../components/cardsSection/CardSection.tsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Filters />
      <CardSection />
    </>
  );
}
