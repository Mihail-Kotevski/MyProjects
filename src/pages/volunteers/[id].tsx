import Card from "@/components/Card";
import { IVolonteer } from "@/interfaces/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
interface Props {
  data: IVolonteer;
}
const VolunteeurDetails: NextPage<Props> = ({ data }) => {
  return (
    <>
      <section className="volunteeur-details-section section-size ">
        <div className="wrapper-size volunteeur-wrapper">
          <img src={data.image} alt="" />
          <div className="info">
            <h2 className="XL">{data.name}</h2>
            <p className="S">{data.description}</p>
          </div>
        </div>
        <div className="projects wrapper-size">
          <h2 className="XXL">Проекти во кои учествува</h2>
          <div className="wrapper">
            {data.projects.map((el) => {
              return (
                <div key={el.id}>
                  <div className="card-wrap">
                    {el.state ? (
                      <span className="project-state M">Tековен</span>
                    ) : (
                      <span className="project-state M">Завршен</span>
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
