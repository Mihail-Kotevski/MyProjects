import { Workers } from "@/interfaces/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ourteamID from "@/styles/OurWorkers.module.scss";
import globalStyle from "@/styles/globalStyles.module.scss";
import { useContext } from "react";
import { accesibilityContext } from "@/context/accesibilityContext";

interface Props {
  data: Workers;
}

const Member: NextPage<Props> = ({ data }) => {
  const { textSize } = useContext(accesibilityContext);
  return (
    <>
      <section className={ourteamID.worker}>
        <div className={ourteamID.wrapper}>
          <div className={ourteamID.imgContainer}>
            <img src={`${data.image}`} alt="" />
          </div>
          <div className={ourteamID.info}>
            <h2 className={textSize ? globalStyle.LText : globalStyle.MText}>
              {data.name}
            </h2>
            <p className={textSize ? globalStyle.MText : globalStyle.SText}>
              {data.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Member;

export const getStaticPaths: GetStaticPaths = async () => {
  const ress = await fetch("http://localhost:3001/workers");
  const data: Workers[] = await ress.json();

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
  console.log(params);
  if (params) {
    let ress = await fetch(`http://localhost:3001/workers/${params.id}`);
    let data: Workers = await ress.json();
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
