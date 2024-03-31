import { ISingleNews } from "@/interfaces/types";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NewsStyle from "@/styles/News.module.scss";

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
      <section className={NewsStyle.topNews}>
        <h1 className="header XXL">Топ Новости</h1>
        <div className={NewsStyle.wrapper}>
          {topNews.map((el) => (
            <div key={el.id} className={NewsStyle.newsCard}>
              <div className={NewsStyle.image}>
                <img src={el.image} alt="" />
              </div>
              <div className={NewsStyle.text}>
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
      <section className={NewsStyle.oldNews}>
        <div className={NewsStyle.wrapper}>
          <div className={NewsStyle.content}>
            <h2 className="XL">ОСТАНАТИ НОВОСТИ</h2>
            <div className={NewsStyle.wrapper}>
              {currentNews.map((el) => (
                <div key={el.id} className={NewsStyle.oldNewsCard}>
                  <div className={NewsStyle.text}>
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
          <div className={NewsStyle.pagination}>
            {Array.from({
              length: Math.ceil(data.length / itemsNumber),
            }).map((_, index) => (
              <span
                className={`${
                  activeButton === index + 1 ? NewsStyle.active : ""
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
