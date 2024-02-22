import { INews, ISingleNews } from "@/interfaces/types";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  data: ISingleNews[];
}

const NewsletterTwo: NextPage<Props> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setactiveButton] = useState(1);
  const { query } = useRouter();
  const monthNews = data.filter((el) => query.category === el.slug);
  const sortedNews = monthNews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const topNews = sortedNews.slice(0, 3);

  const itemsNumber = 6;
  const startIndex = (currentPage - 1) * itemsNumber;
  const endIndex = startIndex + itemsNumber;
  const currentNews = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="newsletter-two-section section-size">
        <h1 className="header XXL">Топ Новости</h1>
        <div className="wrapper wrapper-size">
          {topNews.map((el) => (
            <div key={el.id} className="card-cont">
              <div className="content-wrapper">
                <img src={el.image} alt="" />
              </div>
              <div className="text-content-wrapper">
                <span>{el.date}</span>
                <h3>{el.title}</h3>
                <p className="S">{el.desc}</p>
                <Link className="BTN" href={`/newsletternews/${el.id}`}>
                  CTA
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="newsletter-two-section-two section-size">
        <div className="wrapper wrapper-size">
          <div className="content-wrapper section-size">
            <h2 className="XL">ОСТАНАТИ НОВОСТИ</h2>
            <div className="content section-size">
              {currentNews.map((el) => (
                <div key={el.id} className="card-div">
                  <div className="text-content-wrapper">
                    <span className="M">{el.date}</span>
                    <h3 className="L">{el.title}</h3>
                    <p className="S">{el.desc}</p>
                    <Link className="BTN" href={`/newsletternews/${el.id}`}>
                      CTA
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter-two-section-pages section-size">
        <div className="wrapper wrapper-size">
          {Array.from({
            length: Math.ceil(data.length / itemsNumber),
          }).map((_, index) => (
            <span
              className={`${
                activeButton === index + 1 ? "active-pagination-btn" : ""
              }`}
              key={index}
              onClick={() => {
                handlePageChange(index + 1);
                setactiveButton(index + 1);
              }}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsletterTwo;

export const getServerSideProps: GetServerSideProps = async () => {
  const ress = await fetch("http://localhost:3001/allnews");
  const data: ISingleNews[] = await ress.json();

  return {
    props: {
      data,
    },
  };
};
