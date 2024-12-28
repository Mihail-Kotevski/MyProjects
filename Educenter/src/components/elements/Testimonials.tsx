import React from "react";
import { DataProps, TestimonialsProp } from "../../pages";

interface Prop {
  data: TestimonialsProp[];
  firstData: DataProps;
}

const Testimonials: React.FC<Prop> = ({ data, firstData }) => {
  return (
    <section className="section" id="section-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-12">
            <div className="section-heading testimonial-heading">
              <h2>{firstData.title}</h2>
              <p>{firstData.content}</p>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 col-md-12">
            <div className="row">
              {data.map((el, index) => {
                return (
                  <div key={index} className="col-lg-6">
                    <div className="test-inner ">
                      <div className="test-author-thumb d-flex">
                        <img
                          src={el.avatar}
                          alt="Testimonial author"
                          className="img-fluid"
                        />
                        <div className="test-author-info">
                          <h4>
                            {el.first_name} {el.last_name}
                          </h4>
                        </div>
                      </div>
                      {el.message}
                      <i className="fa fa-quote-right"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
