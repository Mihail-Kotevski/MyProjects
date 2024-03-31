import Card from "@/components/Card";
import { IVolonteer } from "@/interfaces/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import volunteer from "@/styles/Volunteer.module.scss";
import globalStyle from "@/styles/globalStyles.module.scss";
import { useContext } from "react";
import { accesibilityContext } from "@/context/accesibilityContext";

interface Props {
  data: IVolonteer;
}
const VolunteeurDetails: NextPage<Props> = ({ data }) => {
  const { textSize } = useContext(accesibilityContext);

  return (
    <>
      <section className={volunteer.volunteerDetail}>
        <div className={volunteer.detailWrapper}>
          <img src={data.image} alt="" />
          <div className={volunteer.info}>
            <h2 className={textSize ? globalStyle.LText : globalStyle.MText}>
              {data.name}
            </h2>
            <p className={textSize ? globalStyle.MText : globalStyle.SText}>
              {data.description}
            </p>
          </div>
        </div>
        <div className={volunteer.projects}>
          <h2 className={textSize ? globalStyle.LText : globalStyle.MText}>
            Проекти во кои учествува
          </h2>
          <div className={volunteer.projectsWrapper}>
            {data.projects.map((el) => {
              return (
                <div key={el.id}>
                  <div className={volunteer.cardWrap}>
                    {el.state ? (
                      <span className={volunteer.state}>Tековен</span>
                    ) : (
                      <span className={volunteer.state}>Завршен</span>
                    )}
                    <Card {...el} link="/projects" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteeurDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const ress = await fetch("http://localhost:3001/volonteers");
  const data: IVolonteer[] = await ress.json();

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
  if (params) {
    const ress = await fetch(`http://localhost:3001/volonteers/${params.id}`);
    const data = await ress.json();
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
