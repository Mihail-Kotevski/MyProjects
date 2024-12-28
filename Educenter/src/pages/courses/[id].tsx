import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { CoursesPage } from "..";
import PageTitle from "../../components/elements/PageTitle";
import CourseDetailPage from "../../components/templates/CourseDetailPage";
import CourseCard from "../../components/elements/CourseCard";
interface Props {
  data: CoursesPage | null;
  dataRandom: CoursesPage[];
}

const CourseDetail: NextPage<Props> = ({ data, dataRandom }) => {
  if (!data) {
    return <div>Undefined</div>;
  }

  return (
    <>
      <PageTitle title={data.title} content={data.content} />
      <CourseDetailPage {...data} />
      <div className="row mt-5">
        {dataRandom.map((el) => (
          <CourseCard
            id={el.id}
            title={el.title}
            excerpt={el.excerpt}
            is_full={el.is_full}
            category={el.category}
            image={el.image}
            start_time={el.start_time}
          />
        ))}
      </div>
    </>
  );
};

export default CourseDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:5001/courses");
  const data: CoursesPage[] = await res.json();
  const paths = data.map((el) => {
    return {
      params: {
        id: el.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let data: CoursesPage | null = null;

  const resRandomCourses = await fetch(
    `http://localhost:5001/courses?_start=@%7BrandomNo%7d&_limit=3`
  );
  const dataRandom: CoursesPage[] = await resRandomCourses.json();

  if (params?.id) {
    const res = await fetch(`http://localhost:5001/courses/${params.id}`);
    data = await res.json();
  }
  return {
    props: {
      data,
      dataRandom,
    },
  };
};
