import { useContext } from "react";
import { RestaurantContextData } from "../../context/RestaurantsContext";
import { RestaurantCard } from "../restaurantCard/RestaurantCard";
import { NotFound } from "../notFound/NotFound";

export const MostPopularRestaurants: React.FC = () => {
  const { restaurants } = useContext(RestaurantContextData);

  const tenMostPopularRestaurants = restaurants
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 10);

  if (!tenMostPopularRestaurants) {
    return <NotFound />;
  }

  return (
    <div className="container popularRestaurantsContainer">
      <h2>Our most Popular Restaurants</h2>
      <div className="flex popularRestaurants">
        {tenMostPopularRestaurants.map((el, index) => (
          <RestaurantCard key={index} data={el} />
        ))}
      </div>
    </div>
  );
};
