import Card from "@/components/Card";
import { HomePage } from "@/interfaces/types";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface Props {
  data: HomePage;
}

export default function Home({ data }: Props) {
  return (
    <>
      <section className="banner-section">
        {/* <img src="/Image/56254 1.jpg" alt="" /> */}
        <div className="banner-header">
          <h1 className="XXL">{data.title}</h1>
          <div>
            <h3 className="L">{data.preTitle}</h3>
            <p className="M">{data.textContent}</p>
            <Link className="BTN" href={"/about"}>
              Повеќе за нас
            </Link>
          </div>
        </div>
      </section>

      <section className="soon-section">
        <div className="soon-content">
          <div className="dark-half">
            <h3 className="orange-color L">{data.soon.black.title}</h3>
            <h5 className="white M">{data.soon.black.pretitle}</h5>
            <div className="">
              <p className="white S">{data.soon.black.description}</p>
            </div>
            <div className="soon-btn">
              <Link
                href={"/"}
                className="black btn-style bacground-light-yellow orange BTN
          "
              >
                Види Повеќе
              </Link>
              <Link
                href={"/volunteeraplication"}
                className="black btn-style bacground-light-purple BTN"
              >
                Пријави се!
              </Link>
            </div>
          </div>
          <div className="light-half">
            <div className="text-container">
              <h2>{data.soon.white.title}</h2>
              <h3 className="">
                {data.soon.white.place}, {data.soon.white.time}
              </h3>
            </div>
            <div className="circle-wrap ">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="date">
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
      <section className="info-section">
        <div className="content">
          {data.krikSucces.map((el, index) => {
            return (
              <div key={index} className="numbers-card">
                <h2 className="NUM-SIZE red-color">{el.number}+</h2>
                <span>{el.text}</span>
              </div>
            );
          })}
        </div>
      </section>
      <section className="video-section">
        <div className="content">
          <div className="video"></div>
          <div className="info">
            <h3 className="L">
              Стани <br />
              волонтер
            </h3>
            <p className="XS">
              Сакаш да работиш со млади лица? Оваа можност е токму за тебе.
            </p>
            <Link className="BTN" href={"/volunteeraplication"}>
              Придружи ни се
            </Link>
          </div>
        </div>
      </section>

      <section className="latest-news-section">
        <div className="wrapper">
          <h1 className="XXL">Нашите услуги</h1>
          <div className="content-wrapper">
            {data.news.map((el) => (
              <div key={el.id} className="card-wrap">
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
          <Link className="see-more BTN" href={"/newsletter"}>
            Види за цел Месец
          </Link>
        </div>
      </section>
      <section className="services-section">
        <div className="wrapper-size">
          <h1 className="XXL">Нашите услуги</h1>
          <div className="services-wrappeer">
            <div
              className="image me-2"
              style={{ backgroundImage: 'url("/Image/centar krikni 2 3.png")' }}
            ></div>
            <div className="text ms-2">
              <div>
                <h3 className="my-2 L">01 Мултифункционален центар Крикни</h3>
                <p className="pe-5 S">
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
                <h3 className="L">02 Независни станбени единици</h3>
                <p className="pe-5 S">
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
                <h3 className="L">03 советувалиште за Млади и Родители</h3>
                <p className="pe-5 S">
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
      <section className="partners-section">
        <h1 className="XXL">Партнери</h1>
        <div className="wrapper pause">
          <div className="content pause">
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
