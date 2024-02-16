import { useParams } from "react-router-dom";
import { RestaurantDetailCard } from "../restaurantDetailCard/RestaurantDetailCard";
import { useContext, useEffect, useState } from "react";
import { RestaurantContextData } from "../../context/RestaurantsContext";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { ReviewsCardProp } from "../../interfaces/Interfaces";

export const RestaurantDetail: React.FC = () => {
  const { restaurants } = useContext(RestaurantContextData);
  const [data, setData] = useState<ReviewsCardProp[]>([]);
  const { id } = useParams();

  let restaurant = restaurants.find((el) => el.id === id);

  useEffect(() => {
    if (restaurant) {
      setData(restaurant.reviewsList);
    }
  }, [restaurants]);

  if (!restaurant) {
    return <div>error</div>;
  }

  return (
    <div className="container RestaurantDetail">
      <h2>FOOD FUSION</h2>
      {restaurant && <RestaurantDetailCard data={restaurant} />}
      <h2>REVIEWS</h2>
      <div>
        {restaurant &&
          restaurant.reviewsList.map((el, index) => (
            <ReviewsCard
              key={el.id}
              id={el.id}
              author={el.author}
              comment={el.comment}
              stars={el.stars}
            />
          ))}
      </div>
      <h2>REVIEW FORM</h2>
      <ReviewForm restaurant={restaurant} />
    </div>
  );
};

export const ReviewsCard: React.FC<ReviewsCardProp> = ({
  id,
  author,
  comment,
  stars,
}) => {
  return (
    <div id={`${id}`} className="reviewCard">
      <p>
        <span>Author: </span>
        {author}
      </p>
      <p>
        <span>Message: </span>
        {comment}
      </p>
      <p>
        <span>Stars: </span>
        {stars}
      </p>
    </div>
  );
};
