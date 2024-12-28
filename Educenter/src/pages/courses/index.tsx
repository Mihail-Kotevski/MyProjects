import { GetStaticProps, NextPage } from "next";
import { CoursesPage } from "..";
import PageTitle from "../../components/elements/PageTitle";
import CourseCard from "../../components/elements/CourseCard";

export interface courseProp {
  title: string;
  first_content_block: string;
}

interface Props {
  data: courseProp;
  dataAll: CoursesPage[];
}

const courses: NextPage<Props> = ({ data, dataAll }) => {
  return (
    <>
      <PageTitle title={data.title} content={data.first_content_block} />
      <div className="row mt-4">
        {dataAll.map((el, index) => (
          <CourseCard key={index} {...el} />
        ))}
      </div>
    </>
  );
};

export default courses;

export const getStaticProps: GetStaticProps = async () => {
  const ress = await fetch("http://localhost:5001/courses_page");
  const data: courseProp = await ress.json();

  const ressAll = await fetch("http://localhost:5001/courses");
  const dataAll: CoursesPage[] = await ressAll.json();
  return {
    props: {
      data,
      dataAll,
    },
  };
};
