import React from "react";
import { ServicesType } from "../pages";

interface Props {
  preTitle: string;
  title: string;
  data: ServicesType[];
}
const Services: React.FC<Props> = ({ title, preTitle, data }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">{preTitle}</h4>
          <h1 className="display-5 mb-4">{title}</h1>
        </div>
        <div className="row g-4">
          {data.map((el) => {
            return (
              <div key={el.id} className="col-lg-4 col-md-6">
                <div className="service-item d-flex position-relative text-center h-100">
                  <img className="bg-img" src={el.image} alt="" />
                  <div className="service-text p-5">
                    <img className="mb-4" src={el.icon} alt="Icon" />
                    <h3 className="mb-3">{el.title}</h3>
                    <p className="mb-4">{el.description}</p>
                    <a className="btn" href="">
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
