import "../style/_banner.scss";

const Banner: React.FC = () => {
  return (
    <div className="banner" id="banner">
      <div className="wrapper">
        <div className="box">
          <div className="cube"></div>
        </div>
      </div>
      <div className="quote">
        <p>
          Consistency is the alchemy that turns ordinary into extraordinary.
        </p>
      </div>
    </div>
  );
};

export default Banner;
