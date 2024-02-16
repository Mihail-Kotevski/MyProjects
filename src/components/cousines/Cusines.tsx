import { useContext } from "react";
import { RestaurantContextData } from "../../context/RestaurantsContext";
import { Link } from "react-router-dom";
import { NotFound } from "../notFound/NotFound";

export const Cuseines: React.FC = () => {
  const { restaurants } = useContext(RestaurantContextData);

  const cusinesTypesArray = Array.from(
    new Set(restaurants.map((el) => el.restauranttype))
  );

  if (!cusinesTypesArray) {
    return <NotFound />;
  }
  
  return (
    <div className="container cusineTypes">
      <h2>CUSINES</h2>
      {cusinesTypesArray.map((el, i) => (
        <Link key={i} to={`/cuisineDetail/${el}`}>
          <button className="cusineBtn">{el}</button>
        </Link>
      ))}
    </div>
  );
};
