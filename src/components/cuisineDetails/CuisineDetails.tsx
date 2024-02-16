import { useContext } from "react";
import { RestaurantContextData } from "../../context/RestaurantsContext";
import { useParams } from "react-router-dom";
import { RestaurantCard } from "../restaurantCard/RestaurantCard";

export const CuisineDetails: React.FC = () => {
  const { restaurants } = useContext(RestaurantContextData);
  const { cuisId } = useParams();

  const currentCuisine = restaurants.filter(
    (el) => el.restauranttype === cuisId
  );

  return (
    <div className="container cuisineDetailContainer">
      <h2>{`${cuisId} RESTAURANTS`}</h2>
      <div className="flex cuisineDetail">
        {currentCuisine.map((el, index) => (
          <RestaurantCard key={index} data={el} />
        ))}
      </div>
    </div>
  );
};
