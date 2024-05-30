import "../style/projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { DataProp } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

interface Data {
  projects: DataProp[];
}

const Projects: React.FC<Data> = ({ projects }) => {
  const navigate = useNavigate();

  const handleUserClick = (project: DataProp) => {
    navigate(`/projects/${project.id}`);
  };
  return (
    <div className="swiper" id="projects">
      <h2 className="heading">Projects</h2>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="swiper-container"
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index} onClick={() => handleUserClick(project)}>
              <div className="content">
                <img src={project.image} alt="" />
              </div>
              <p>{project.name}</p>
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Projects;
