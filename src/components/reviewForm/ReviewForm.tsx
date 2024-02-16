import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContextData } from "../../context/RestaurantsContext";
import { RestaurantInterface } from "../../interfaces/Interfaces";

interface restaurantProp {
  restaurant: RestaurantInterface;
}

export const ReviewForm: React.FC<restaurantProp> = ({ restaurant }) => {
  const ContextData = useContext(RestaurantContextData);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const { id } = useParams();

  const FormFunct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`http://localhost:5001/restaurants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...restaurant,
        reviews: restaurant.reviews + 1,
        reviewsList: [
          ...restaurant.reviewsList,
          {
            id: restaurant.reviews,
            author,
            comment,
            stars,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then(() => {
        ContextData.UpdateRestaurantFunct();
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setAuthor("");
        setComment("");
        setStars(0);
      });
  };

  return (
    <div className="ReviewForm">
      <form action="" onSubmit={(e) => FormFunct(e)}>
        <label htmlFor="name">Name</label>
        <textarea
          name="name"
          id="name"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          value={author}
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        />
        <label htmlFor="stars">Stars</label>
        <input
          name="stars"
          type="range"
          max={5}
          min={1}
          step={1}
          onChange={(e) => {
            setStars(+e.target.value);
          }}
          value={stars}
        />
        <button type="submit">Leave a review</button>
      </form>
    </div>
  );
};
