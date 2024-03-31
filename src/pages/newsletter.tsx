import { INews, INewsMonth } from "@/interfaces/types";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import NewsletterStyle from "@/styles/Newsletter.module.scss";

interface Props {
  data: INews;
}

const Newsletter: NextPage<Props> = ({ data }) => {
  return (
    <>
      <section className={NewsletterStyle.newsletterBanner}>
        <p>МЕСЕЧЕН</p>
        <p>БИЛТЕН</p>
      </section>
      <section className={NewsletterStyle.newsletterContent}>
        <div className={NewsletterStyle.wrapper}>
          <div className={NewsletterStyle.vl}></div>
          {data.months.map((el) => (
            <div key={el.id} className={NewsletterStyle.content}>
              <div className={NewsletterStyle.wrapper}>
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
                <img
                  src="/Image/icons/red circle.png"
                  alt=""
                  className={NewsletterStyle.dot}
                />
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
