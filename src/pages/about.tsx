import { GetStaticProps, NextPage } from "next";
import { IAboutPage } from "@/interfaces/types";
import { useState } from "react";
interface Props {
  data: IAboutPage;
}
const About: NextPage<Props> = ({ data }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestion = (id: any) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <>
      <section className="about-info-section">
        <div className="wrapper">
          <div className="content">
            <img src="/Image/krik za nas 1.png" alt="" />
            <div className="text px-4">
              <h4 className="L pb-3">{data.title}</h4>
              <p className="S">{data.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-krik-section">
        <div className="about-header py-4">
          <h2 className="XL">За Крик</h2>
        </div>
        {data.aboutKrik.map((el) => {
          return (
            <div key={el.id} className="wrapper">
              <div className="info-card py-4">
                <h4 className="L">{el.title}</h4>
                <p className="S">{el.content}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section className="about-questions-section">
        <div className="wrapper">
          <h2 className="XL">Најчесто поставувани прашања</h2>
          {data.commonQuestions.map((el) => {
            return (
              <div key={el.id}>
                {activeQuestion !== el.id ? (
                  <div
                    className="question"
                    onClick={() => {
                      handleQuestion(el.id);
                    }}
                  >
                    <div key={el.id} className="header">
                      <h4 className="L">{el.question}</h4>
                      <img src="/Image/icons/Vector.png" alt="" />
                    </div>
                  </div>
                ) : (
                  <div
                    className="answer"
                    onClick={() => setActiveQuestion(null)}
                  >
                    <div className="header">
                      <h4 className="L">{el.question}</h4>
                      <img src="/Image/icons/Vector (1).png" alt="" />
                    </div>
                    <span className="S">{el.answer}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const ress = await fetch(" http://localhost:3001/about-page");
  const data: IAboutPage = await ress.json();
  return {
    props: {
      data,
    },
  };
};
