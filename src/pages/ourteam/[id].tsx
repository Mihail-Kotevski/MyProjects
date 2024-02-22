import { IMenagementBoard, Workers } from "@/interfaces/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
  data: Workers;
}

const Member: NextPage<Props> = ({ data }) => {
  console.log(data);
  return (
    <>
      <section className="member-section py-5">
        <div className="wrapper py-5">
          <div className="img">
            <img src={`${data.image}`} alt="" />
          </div>
          <div className="info ps-3">
            <h2 className="XL">{data.name}</h2>
            <p className="S">{data.description}</p>
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
