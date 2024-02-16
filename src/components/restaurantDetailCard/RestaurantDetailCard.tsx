import { CardProp, RestaurantInterface } from "../../interfaces/Interfaces";

export const RestaurantDetailCard: React.FC<{ data: RestaurantInterface }> = ({
  data,
}) => {
  const reviewStars =
    data &&
    data.reviewsList.length > 0 &&
    data?.reviewsList.map((review) => review.stars).reduce((a, b) => a + b);
  return (
    <div className="RestaurantDetailCard">
      <img src={data.image} alt={data.image} />
      <div>
        <span>
          {`rating - ${+reviewStars > 0 ? +reviewStars / data.reviews : ""},`}
          <br />
          {`based on ${data.reviews} reviews`}
        </span>
        <p>{data.phone}</p>
        <p>{data.email}</p>
        <p>{data.address}</p>
        {data.parkinglot === true ? (
          <span>We have parkinglot waiting for you</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
