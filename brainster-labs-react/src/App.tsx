import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import { Route, Routes } from "react-router-dom";
import Form from "./components/form/Form.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hireStudent" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
