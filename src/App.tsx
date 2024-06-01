import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
  const projects = [
    {
      id: 1,
      name: "Store",
      slug: "store",
      description:
        "This project is a website where users can review different clothes from differentbrands, also users can read about the latest fashions in the market.",
      tools: ["Next.JS", "CSS", "Bootstrap"],
      image: "./public/images/projects/Store.png",
      github: "https://github.com/Mihail-Kotevski/MyProjects/tree/Store",
    },
    {
      id: 2,
      name: "Restaurant",
      slug: "restaurant",
      description:
        "This is a platform where users can explore a variety of dining options, receive suggestions, leave feedback about the chosen restaurant, and save their choice to favorites.This user-friendly interface makes it easy to discover new restaurants and leave feedback.",
      tools: ["React.JS", "SCSS"],
      image: "./public/images/projects/Restaurant.png",
      github: "https://github.com/Mihail-Kotevski/MyProjects/tree/Restaurant",
    },
    {
      id: 3,
      name: "Portfolio",
      slug: "kotevskiDev",
      description:
        "This page was designed and coded by me. Here, you'll find a collection of some of my projects, a summary, and my contact information. This site serves as a portfolio to showcase my work and to provide an easy way for you to get in touch with me. ",
      tools: ["React.JS", "SCSS"],
      image: "./public/images/projects/KotevskiDev.png",
      github: "https://github.com/Mihail-Kotevski/MyProjects/tree/Portfolio",
    },
    {
      id: 4,
      name: "Krik",
      slug: "krik",
      description:
        "This project is a website for the non-governmental, non-profit organization Krik. On this project we worked together with the students from the Brainster UX/UI design academy.",
      tools: ["Next.JS", "SCSS"],
      image: "public/images/projects/Krik.png",
      github: "https://github.com/Mihail-Kotevski/MyProjects/tree/KRIK",
    },
    {
      id: 5,
      name: "Brainster Labs",
      slug: "brainsterLabs",
      description:
        "This project has two pages: Index page, and hire students page, and is responsive on tablet and mobile resolution. The index page has navbar with link that will lead you outside the page, and button that will lead you to the hire-student page. The index page also has a banner section, card filters and card section filled with cards that navigate to chosen Brainster Academy.",
      tools: ["JavaScript", "CSS", "Bootstrap"],
      image: "dist/images/projects/Brainster Labs.png",
      github:
        "https://github.com/Mihail-Kotevski/MyProjects/tree/BrainsterLabs",
    },
    {
      id: 6,
      name: "Street Artist",
      slug: "streetArtist",
      description:
        "This project was made to create web-space for the street artists to help them keep track of their income, and have a space on the web where they can showcase their masterpieces.",
      tools: ["JavaScript", "CSS", "Bootstrap"],
      image: "../public/images/projects/Street Artist.png",
      github: "https://github.com/Mihail-Kotevski/MyProjects/tree/StreetArtist",
    },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home data={projects} />} />
        <Route
          path="/projects/:id"
          element={<ProjectDetail data={projects} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
