import { ISingleNews } from "@/interfaces/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";
import NewsDetail from "@/styles/NewsDetail.module.scss";

interface Props {
  data: ISingleNews;
}
const NewsletterThree: NextPage<Props> = ({ data }) => {
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
  const currentImage = imageData[image];
  return (
    <>
      <section className={NewsDetail.newsDetailInfo}>
        <div className={NewsDetail.wrapper}>
          <div className={NewsDetail.contentOne}>
            <div className={NewsDetail.image}>
              <img src={data.image} alt="" />
            </div>
            <div className={NewsDetail.text}>
              <span className="M">{data.date}</span>
              <h3 className="XXL">{data.title}</h3>
              <p className="S">{data.descriptionOne}</p>
            </div>
          </div>
          <div className={NewsDetail.contentTwo}>
            <div className={NewsDetail.text}>
              <p className="S">{data.descriptionTwo}</p>
            </div>
            <div className="image-container">
              <img src={`${data.imageTwo}`} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={NewsDetail.newsDetailImages}>
        <div className={NewsDetail.wrapper}>
          <h2 className="L">Галерија со активности:</h2>
          <div className={NewsDetail.content}>
            <img src={`${currentImage.image}`} alt="" />
            <div className={NewsDetail.leftBtn} onClick={handlePreviousImage}>
              <img src="/Image/icons/Main Button Left.png" alt="" />
            </div>
            <div className={NewsDetail.rightBtn} onClick={handleNextImage}>
              <img src="/Image/icons/Main Button.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterThree;

export const getStaticPaths: GetStaticPaths = async () => {
  const ress = await fetch("http://localhost:3001/allnews");
  const data: ISingleNews[] = await ress.json();

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
    let ress = await fetch(`http://localhost:3001/allnews/${params.id}`);
    let data: ISingleNews = await ress.json();
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
