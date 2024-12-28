import React from "react";
import { AboutPageProp } from "../../pages";

const AboutPage: React.FC<Partial<AboutPageProp>> = ({
  second_content_block,
  third_content_block,
  first_image,
  second_image,
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              className="img-fluid w-100 mb-4"
              src={first_image}
              alt="about image"
            />
            <p className="mb-5">{second_content_block}</p>
            <img
              className="img-fluid w-100 mb-4"
              src={second_image}
              alt="about image"
            />
            <p>{third_content_block}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
