import { createContext, useEffect, useState } from "react";
import { RestaurantInterface } from "../interfaces/Interfaces";
import { json } from "stream/consumers";

interface Props {
  children: React.ReactNode;
}

interface ContextData {
  restaurants: RestaurantInterface[];
  favorite: RestaurantInterface[];
  UpdateRestaurantFunct: () => void;
  addToFavorite: (restaurant: RestaurantInterface) => void;
  removeFromFavorite: (restaurant: RestaurantInterface) => void;
}

export const RestaurantContextData = createContext({} as ContextData);

export const UsersProvider = ({ children }: Props) => {
  const [restaurants, setRestaurants] = useState<RestaurantInterface[]>([]);
  const [favorite, setFavorite] = useState<RestaurantInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  const UpdateRestaurantFunct = () => {
    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  };

  const addToFavorite = (restaurant: RestaurantInterface) => {
    setFavorite([...favorite, restaurant]);
  };

  const removeFromFavorite = (restaurant: RestaurantInterface) => {
    setFavorite(favorite.filter((el) => el.id !== restaurant.id));
  };

  useEffect(() => {
    const faveRestourants: RestaurantInterface[] = JSON.parse(
      localStorage.getItem("faveRestourants") || "[]"
    );
    setFavorite(faveRestourants);
  }, []);

  useEffect(() => {
    localStorage.setItem("faveRestourants", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <RestaurantContextData.Provider
      value={{
        restaurants,
        favorite,
        UpdateRestaurantFunct,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </RestaurantContextData.Provider>
  );
};
