import { useContext, useEffect, useState } from "react";
import { RestaurantDetailCard } from "../restaurantDetailCard/RestaurantDetailCard";
import { RestaurantContextData } from "../../context/RestaurantsContext";
import { RestaurantInterface } from "../../interfaces/Interfaces";
import { NotFound } from "../notFound/NotFound";

export const RandomRestourant: React.FC = () => {
  const [randomRestaurant, setRandomRestaurant] =
    useState<RestaurantInterface>();
  const { restaurants } = useContext(RestaurantContextData);

  const randomIndex = Math.floor(Math.random() * restaurants.length);
  useEffect(() => {
    setRandomRestaurant(restaurants[randomIndex]);
  }, [restaurants]);

  if (!restaurants) {
    return <NotFound />;
  }

  return (
    <div className="RandomRestourant container">
      <h2>{randomRestaurant?.businessname}</h2>
      {randomRestaurant && <RestaurantDetailCard data={randomRestaurant} />}
    </div>
  );
};
