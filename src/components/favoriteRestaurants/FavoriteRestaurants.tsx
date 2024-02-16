import { useContext } from "react";
import { RestaurantContextData } from "../../context/RestaurantsContext";
import { RestaurantCard } from "../restaurantCard/RestaurantCard";
import { FavRestourantCard } from "../favoriteResCard/FavRestourantCard";
import { NotFound } from "../notFound/NotFound";

export const FavoriteRestaurants: React.FC = () => {
  const context = useContext(RestaurantContextData);
  if (context.favorite.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="FavoriteRestaurants container">
      {context.favorite.map((el, index) => (
        <FavRestourantCard key={index} data={el} />
      ))}
    </div>
  );
};
