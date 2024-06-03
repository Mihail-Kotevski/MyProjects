import "../style/_about.scss";

const About: React.FC = () => {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="wrapper">
        <div className="text">
          <h2>
            Hello, It's me <br />
            <span> Mihail</span>
            <span className="dot">.</span>
          </h2>
          <p>
            An enthusiastic Front-End developer dedicated to shaping the world
            of web development by creating captivating and user-friendly digital
            experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1_yi6xWwxtnXd9SLGdsxHgNJZlsfowncL/view?usp=drive_link"
            target="_blank"
          >
            CV
          </a>
          <p className="more">SCROLL FOR MORE</p>
        </div>
        <div className="photo">
          <img src="images/profile img.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
