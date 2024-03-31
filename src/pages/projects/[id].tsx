import { IProject } from "@/interfaces/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import projectDetail from "@/styles/Projects.module.scss";
import React, { useState } from "react";

interface Props {
  data: IProject;
}

const ProjectDetails: React.FC<Props> = ({ data }) => {
  console.log(data);
  const imageData = data.photos;
  const [image, setImage] = useState(0);
  const handleNextImage = () => {
    setImage((prevIndex) => (prevIndex + 1) % imageData.length);
  };
  const handlePreviousImage = () => {
    setImage((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };
  const currentImage = imageData[image].image;
  console.log(currentImage);
  return (
    <>
      <section className={projectDetail.projectDetail}>
        <div className={projectDetail.wrapper}>
          <div className={projectDetail.projectImages}>
            <img src={`${currentImage}`} alt="" />
            <div
              className={projectDetail.leftBtn}
              onClick={handlePreviousImage}
            >
              <img src="/Image/icons/Main Button Left.png" alt="" />
            </div>
            <div className={projectDetail.rightBtn} onClick={handleNextImage}>
              <img src="/Image/icons/Main Button.png" alt="" />
            </div>
          </div>
          <div className={projectDetail.projectHeader}>
            <div>
              <h2>Млади за активно општество</h2>
              <p>
                Проектот ќе се фокусира на обезбедување и креирање иновативна
                дигитална алатка која ќе обезбеди онлајн можност за учење на
                младите од партнерски земји за развој на заедницата, активно
                граѓанство и процеси на одлучување.
              </p>
            </div>
          </div>
          <div className={projectDetail.projectPurpose}>
            <div className={projectDetail.title}>
              <h2>
                Цел на <br /> проектот
              </h2>
            </div>
            <div className={projectDetail.text}>
              <p>{data.pupose}</p>
            </div>
          </div>
          <div className={projectDetail.projectTarget}>
            <div className={projectDetail.content}>
              <h2>За кого е наменет овој проект?</h2>
              <p>{data.description}</p>
            </div>
            <div className={projectDetail.title}>
              <img src="/Image/krik za koi lica 1.png" alt="" />
            </div>
          </div>
          <div className={projectDetail.projectProgress}>
            <div className={projectDetail.progress}>
              <div style={{ width: `${data.completition}%` }}></div>
              <span>{data.completition}%</span>
            </div>
            <div className={projectDetail.contact}>
              <div className={projectDetail.content}>
                <div className={projectDetail.interested}>
                  <span>Заинтересиран/а си?</span>
                  <Link href={"/volunteeraplication"}>Пријави Се!</Link>
                </div>
                <div className={projectDetail.donate}>
                  <span>Сакаш да не поддржиш?</span>
                  <Link href={"/donate"}>Донирај</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
export const getStaticPaths: GetStaticPaths = async () => {
  const ress = await fetch("http://localhost:3001/projects");
  const data: IProject[] = await ress.json();

  let params = data.map((el) => {
    return {
      params: {
        id: el.id,
      },
    };
  });

  return {
    paths: params,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  if (params) {
    let ress = await fetch(`http://localhost:3001/projects/${params.id}`);
    let data: IProject = await ress.json();
    return {
      props: {
        data,
      },
    };
  }

  return {
    props: {
      data: [],
    },
  };
};
