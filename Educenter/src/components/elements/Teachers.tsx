import React from "react";
import { TeacherProp } from "../../pages/about";
interface Prop {
  data: TeacherProp[];
}
const Teachers: React.FC<Prop> = ({ data }) => {
  console.log(data);
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Our Teachers</h2>
          </div>
          {data.map((el, index) => {
            return (
              <div key={index} className="col-lg-4 col-sm-6 mb-5">
                <div className="card border-0 rounded-0 hover-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={el.avatar}
                    alt={el.first_name}
                  />
                  <div className="card-body">
                    <a href="teacher-single.html">
                      <h4 className="card-title">{el.first_name} {el.last_name}</h4>
                    </a>
                    <div className="d-flex justify-content-between">
                      <span>{el.position}</span>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a className="text-color" href="#">
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="text-color" href="#">
                            <i className="ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="text-color" href="#">
                            <i className="ti-google"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="text-color" href="#">
                            <i className="ti-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
