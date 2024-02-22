import { INews, INewsMonth } from "@/interfaces/types";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

interface Props {
  data: INews;
}

const Newsletter: NextPage<Props> = ({ data }) => {
  return (
    <>
      <section className="newsletter-banner section-size">
        <p>МЕСЕЧЕН</p>
        <p className="newsletter">БИЛТЕН</p>
      </section>
      <section className="news-section section-size">
        <div className="wrapper wrapper-size">
          <div className="vl"></div>
          {data.months.map((el) => (
            <div key={el.id} className="content">
              <div className="content-wrapper">
                <div>
                  <div>
                    <h2 className="XL">
                      {el.month}, {el.year}
                    </h2>
                    <p className="M">{el.description}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <Link href={`/newsletternews?category=${el.slug}`}>
                      <img src="/Image/image 23.png" alt="" />
                    </Link>
                  </div>
                </div>
                <img src="/Image/icons/red circle.png" alt="" className="dot" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Newsletter;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3001/news");
  const data: INews = await res.json();

  return {
    props: {
      data,
    },
  };
};
