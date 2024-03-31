import { GetStaticProps, NextPage } from "next";
import { IAboutPage } from "@/interfaces/types";
import about from "@/styles/About.module.scss";
import globalStyle from "@/styles/globalStyles.module.scss";
import { useContext, useState } from "react";
import { accesibilityContext } from "@/context/accesibilityContext";
interface Props {
  data: IAboutPage;
}
const About: NextPage<Props> = ({ data }) => {
  const { textSize } = useContext(accesibilityContext);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestion = (id: any) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <>
      <section className={about.aboutInfo}>
        <div className={about.wrapper}>
          <div className={about.content}>
            <img src="/Image/krik za nas 1.png" alt="" />
            <div className="">
              <h4 className={textSize ? globalStyle.LText : globalStyle.MText}>
                {data.title}
              </h4>
              <p className={textSize ? globalStyle.MText : globalStyle.SText}>
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={about.aboutKrik}>
        <div className={about.header}>
          <h2 className={textSize ? globalStyle.XLText : globalStyle.LText}>
            За Крик
          </h2>
        </div>
        {data.aboutKrik.map((el) => {
          return (
            <div key={el.id} className={about.wrapper}>
              <div className={about.aboutCard}>
                <h4
                  className={textSize ? globalStyle.XLText : globalStyle.LText}
                >
                  {el.title}
                </h4>
                <p className={textSize ? globalStyle.MText : globalStyle.SText}>
                  {el.content}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <section className={about.questions}>
        <div className={about.wrapper}>
          <h2 className={textSize ? globalStyle.XLText : globalStyle.LText}>
            Најчесто поставувани прашања
          </h2>
          {data.commonQuestions.map((el) => {
            return (
              <div key={el.id} className={about.questionContainer}>
                {activeQuestion !== el.id ? (
                  <div
                    className={about.question}
                    onClick={() => {
                      handleQuestion(el.id);
                    }}
                  >
                    <div key={el.id} className={about.questionHeader}>
                      <h4
                        className={
                          textSize ? globalStyle.LText : globalStyle.MText
                        }
                      >
                        {el.question}
                      </h4>
                      <img src="/Image/icons/Vector.png" alt="" />
                    </div>
                  </div>
                ) : (
                  <div
                    className={about.answer}
                    onClick={() => setActiveQuestion(null)}
                  >
                    <div className={about.answerHeader}>
                      <h4
                        className={
                          textSize ? globalStyle.XLText : globalStyle.LText
                        }
                      >
                        {el.question}
                      </h4>
                      <img src="/Image/icons/Vector (1).png" alt="" />
                    </div>
                    <span
                      className={
                        textSize ? globalStyle.MText : globalStyle.SText
                      }
                    >
                      {el.answer}
                    </span>
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
