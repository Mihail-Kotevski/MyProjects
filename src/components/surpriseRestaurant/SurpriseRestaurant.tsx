import { Link } from "react-router-dom";

export const SurpriseRestaurant: React.FC = () => {
  return (
    <div className="container surpriseRestaurant">
      <h2>DON'T KNOW WHAT TO EAT?</h2>
      <Link to={"/surpriseRestourant"}>
        <button>Surprise me!</button>
      </Link>
    </div>
  );
};
