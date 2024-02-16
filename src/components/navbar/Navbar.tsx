import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="flex navbar container">
      <Link to={"/"}>RESTAURANT</Link>
      <Link to={"/favorites"}>
        <i className="fa-solid fa-heart"></i>
      </Link>
    </div>
  );
};
