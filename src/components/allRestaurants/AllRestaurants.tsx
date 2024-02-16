import { useContext } from "react";
import { RestaurantContextData } from "../../context/RestaurantsContext";
import { RestaurantCard } from "../restaurantCard/RestaurantCard";
import { NotFound } from "../notFound/NotFound";

export const AllRestaurants: React.FC = () => {
  const { restaurants } = useContext(RestaurantContextData);

  if (!restaurants) {
    return <NotFound />;
  }
  
  return (
    <div className="container allRestaurantsContainer flex">
      <h2>ALL RESTAURANTS</h2>
      <div className=" allRestaurants flex">
        {restaurants.map((el, index) => (
          <RestaurantCard key={index} data={el} />
        ))}
      </div>
    </div>
  );
};
