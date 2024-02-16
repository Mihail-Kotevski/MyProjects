import { Link } from "react-router-dom";
import { RestaurantContextData } from "../../context/RestaurantsContext";
import { RestaurantInterface } from "../../interfaces/Interfaces";
import { useContext } from "react";

export const FavRestourantCard: React.FC<{ data: RestaurantInterface }> = ({
  data,
}) => {
  const context = useContext(RestaurantContextData);

  let findResInFavorites = context.favorite.find((el) => data.id === el.id);

  const reviewStars =
    data &&
    data.reviewsList.length > 0 &&
    data?.reviewsList.map((review) => review.stars).reduce((a, b) => a + b);
  return (
    <div className="FavRestourantCard">
      <Link to={`/detailpage/${data.id}`}>
        <div className="divImg">
          <img className="img" src={data.image} alt={data.businessname} />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            findResInFavorites
              ? context.removeFromFavorite(data)
              : context.addToFavorite(data);
          }}
        >
          <i
            className={`fa-${
              findResInFavorites ? "solid" : "regular"
            } fa-heart`}
          ></i>
        </button>
        <div className="divText">
          <h4 className="title">{data.businessname}</h4>
          <p className="tag">{data.restauranttype}</p>
          {data.reviews === 0 ? (
            ""
          ) : (
            <span>
              {`rating -${+reviewStars / data.reviews},`}
              <br />
              {`based on ${data.reviews} reviews`}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};
