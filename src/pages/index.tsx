import Card from "@/components/Card";
import home from "../styles/Home.module.scss";
import globalStyle from "@/styles/globalStyles.module.scss";
import { HomePage } from "@/interfaces/types";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useContext } from "react";
import { accesibilityContext } from "@/context/accesibilityContext";

interface Props {
  data: HomePage;
}

export default function Home({ data }: Props) {
  const { contrast, textSize } = useContext(accesibilityContext);
  return (
    <>
      <section className={home.banner}>
        <div className={home.header}>
          <h1 className={textSize ? globalStyle.XLText : globalStyle.LText}>
            {data.title}
          </h1>
          <div>
            <h3 className={textSize ? globalStyle.LText : globalStyle.MText}>
              {data.preTitle}
            </h3>
            <p className={textSize ? globalStyle.MText : globalStyle.SText}>
              {data.textContent}
            </p>
            <Link
              className={
                textSize ? globalStyle.BTNTextBigger : globalStyle.BTNText
              }
              href={"/about"}
            >
              Повеќе за нас
            </Link>
          </div>
        </div>
      </section>

      <section className={home.soon}>
        <div className={home.content}>
          <div className={home.dark}>
            <h3 className={textSize ? globalStyle.LText : globalStyle.MText}>
              {data.soon.black.title}
            </h3>
            <h5 className={textSize ? globalStyle.MText : globalStyle.SText}>
              {data.soon.black.pretitle}
            </h5>
            <div className="">
              <p className={textSize ? globalStyle.MText : globalStyle.SText}>
                {data.soon.black.description}
              </p>
            </div>
            <div className={home.btn}>
              <Link
                href={"/"}
                className={`${globalStyle.purpleBg} ${
                  textSize ? globalStyle.BTNTextBigger : globalStyle.BTNText
                }`}
              >
                Види Повеќе
              </Link>
              <Link
                href={"/volunteeraplication"}
                className={`${globalStyle.bgColorOrange} ${
                  textSize ? globalStyle.BTNTextBigger : globalStyle.BTNText
                }`}
              >
                Пријави се!
              </Link>
            </div>
          </div>
          <div className={home.light}>
            <div className={home.container}>
              <h2 className={textSize ? globalStyle.LText : globalStyle.MText}>
                {data.soon.white.title}
              </h2>
              <h3 className={textSize ? globalStyle.MText : globalStyle.SText}>
                {data.soon.white.place}, {data.soon.white.time}
              </h3>
            </div>
            <div className={home.circleContainer}>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
              <div className={home.circle}></div>
            </div>
            <div className={home.date}>
              <div>
                <span className="num-1">2</span>
                <p className="num-2">3</p>
                <br />
              </div>
              <span className="">Септ</span>
            </div>
          </div>
        </div>
      </section>
      <section className={home.info}>
        <div className={home.content}>
          {data.krikSucces.map((el, index) => {
            return (
              <div
                key={index}
                className={`${home.numberCard} ${
                  contrast ? globalStyle.redColorContrast : globalStyle.redColor
                }`}
              >
                <h2
                  className={` ${
                    textSize ? globalStyle.NumTextBigger : globalStyle.NumText
                  }`}
                >
                  {el.number}+
                </h2>
                <span>{el.text}</span>
              </div>
            );
          })}
        </div>
      </section>
      <section className={home.videoSection}>
        <div className={home.content}>
          <div className={home.video}></div>
          <div className={home.info}>
            <h3 className={textSize ? globalStyle.LText : globalStyle.MText}>
              Стани <br />
              волонтер
            </h3>
            <p className={textSize ? globalStyle.MText : globalStyle.SText}>
              Сакаш да работиш со млади лица? Оваа можност е токму за тебе.
            </p>
            <Link
              className={`${globalStyle.bgColorOrange} ${
                textSize ? globalStyle.BTNTextBigger : globalStyle.BTNText
              }`}
              href={"/volunteeraplication"}
            >
              Придружи ни се
            </Link>
          </div>
        </div>
      </section>
      <section className={home.latestNews}>
        <div className={home.wrapper}>
          <h2 className={textSize ? globalStyle.XLText : globalStyle.LText}>
            Нашите услуги
          </h2>
          <div className={home.contentWrapper}>
            {data.news.map((el) => (
              <div key={el.id} className={home.cardWrapper}>
                <Card
                  id={el.id}
                  image={el.image}
                  date={el.date}
                  description={el.text}
                  link="/newsletter"
                />
              </div>
            ))}
          </div>
          <Link
            className={`${home.seeMore} ${
              textSize ? globalStyle.BTNTextBigger : globalStyle.BTNText
            }`}
            href={"/newsletter"}
          >
            Види за цел Месец
          </Link>
        </div>
      </section>
      <section className={home.services}>
        <div className={home.wrapper}>
          <h1 className="XXL">Нашите услуги</h1>
          <div className={home.servicesWrapper}>
            <div
              className={home.image}
              style={{ backgroundImage: 'url("/Image/centar krikni 2 3.png")' }}
            ></div>
            <div className={home.text}>
              <div>
                <h3
                  className={textSize ? globalStyle.LText : globalStyle.MText}
                >
                  01 Мултифункционален центар Крикни
                </h3>
                <p className={textSize ? globalStyle.MText : globalStyle.SText}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam sequi quae, in eaque repellat itaque, perferendis
                  ab aut corrupti laudantium nesciunt quidem odit quasi
                  asperiores!
                </p>
                <Link href={"/services?category=01"}>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="51" height="51" rx="25.5" fill="#191919" />
                    <path
                      d="M17.8813 34.1667L32.9473 19M32.9473 19V33.56M32.9473 19H18.484"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <h3
                  className={textSize ? globalStyle.LText : globalStyle.MText}
                >
                  02 Независни станбени единици
                </h3>
                <p className={textSize ? globalStyle.MText : globalStyle.SText}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam sequi quae, in eaque repellat itaque, perferendis
                  ab aut corrupti laudantium nesciunt quidem odit quasi
                  asperiores!
                </p>
                <Link href={"/services?category=02"}>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="51" height="51" rx="25.5" fill="#FB5E3C" />
                    <path
                      d="M17.8813 34.1667L32.9473 19M32.9473 19V33.56M32.9473 19H18.484"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <h3
                  className={textSize ? globalStyle.LText : globalStyle.MText}
                >
                  03 советувалиште за Млади и Родители
                </h3>
                <p className={textSize ? globalStyle.MText : globalStyle.SText}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam sequi quae, in eaque repellat itaque, perferendis
                  ab aut corrupti laudantium nesciunt quidem odit quasi
                  asperiores!
                </p>
                <Link href={"/services?category=03"}>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="51" height="51" rx="25.5" fill="#FB5E3C" />
                    <path
                      d="M17.8813 34.1667L32.9473 19M32.9473 19V33.56M32.9473 19H18.484"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={home.partners}>
        <h1 className={textSize ? globalStyle.XLText : globalStyle.LText}>
          Партнери
        </h1>
        <div className={home.wrapper}>
          <div className={home.content}>
            {data.partners.map((el, index) => (
              <img key={index} src={el.image} alt="" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const ress = await fetch("http://localhost:3001/homePage");
  const data: HomePage = await ress.json();

  return {
    props: {
      data,
    },
  };
};
