import React from "react";
import "./App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { UsersProvider } from "./context/RestaurantsContext";
import { AllRestaurants } from "./components/allRestaurants/AllRestaurants";
import { Route, Routes } from "react-router-dom";
import { RestaurantDetail } from "./components/restaurantDetail/RestaurantDetail";
import { Cuseines } from "./components/cousines/Cusines";
import { MostPopularRestaurants } from "./components/mostPopularRestaurants/MostPopularRestaurants";
import { SurpriseRestaurant } from "./components/surpriseRestaurant/SurpriseRestaurant";
import { CuisineDetails } from "./components/cuisineDetails/CuisineDetails";
import { RandomRestourant } from "./components/randomRestourant/RandomRestourant";
import { FavoriteRestaurants } from "./components/favoriteRestaurants/FavoriteRestaurants";
import { NotFound } from "./components/notFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <UsersProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SurpriseRestaurant />
                <MostPopularRestaurants />
                <Cuseines />
                <AllRestaurants />
              </>
            }
          />
          <Route path="/detailpage/:id" element={<RestaurantDetail />} />
          <Route path="/cuisineDetail/:cuisId" element={<CuisineDetails />} />
          <Route path="/surpriseRestourant" element={<RandomRestourant />} />
          <Route path="/favorites" element={<FavoriteRestaurants />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UsersProvider>
      <Footer />
    </div>
  );
};

export default App;
