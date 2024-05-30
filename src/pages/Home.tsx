import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";
import { DataProp } from "../interfaces/interfaces";

interface Data {
  data: DataProp[];
}
const Home: React.FC<Data> = ({ data }) => {
  return (
    <>
      <Banner />
      <About />
      <Projects projects={data} />
    </>
  );
};

export default Home;
