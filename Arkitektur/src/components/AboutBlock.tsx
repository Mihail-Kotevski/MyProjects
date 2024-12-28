import React from "react";

interface Props {
  preTitle: string;
  title: string;
  first_paragraph: string;
  second_paragraph: string;
  years: string;
  slogan: string;
  image_one: string;
  image_two: string;
}
const AboutBlock: React.FC<Props> = ({
  preTitle,
  title,
  first_paragraph,
  second_paragraph,
  years,
  slogan,
  image_one,
  image_two,
}) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <img className="img-fluid" src={image_one} alt="" />
              <img className="img-fluid" src={image_two} alt="" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h4 className="section-title">{preTitle}</h4>
            <h1 className="display-5 mb-4">{title}</h1>
            <p>{first_paragraph}</p>
            <p className="mb-4">{second_paragraph}</p>
            <div className="d-flex align-items-center mb-5">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary"
                style={{ width: "120px", height: "120px" }}
              >
                <h1 className="display-1 mb-n2" data-toggle="counter-up">
                  {years}
                </h1>
              </div>
              <div className="ps-4">
                <h3>{slogan}</h3>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
