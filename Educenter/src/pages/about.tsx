import { GetStaticProps } from "next";
import { AboutPageProp } from ".";
import PageTitle from "../components/elements/PageTitle";
import AboutPage from "../components/templates/AboutPage";
import Teachers from "../components/elements/Teachers";

export interface TeacherProp {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  position: string;
}

interface Props {
  dataAbout: AboutPageProp;
  dataTeacher: TeacherProp[];
}

export default function About({ dataAbout, dataTeacher }: Props) {
  return (
    <>
      <PageTitle
        title={dataAbout.title}
        content={dataAbout.first_content_block}
      />
      <AboutPage {...dataAbout} />
      <Teachers data={dataTeacher} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const ressAbout = await fetch("http://localhost:5001/about_page");
  const dataAbout: AboutPageProp = await ressAbout.json();

  const ressTeacher = await fetch("http://localhost:5001/teachers");
  const dataTeacher: TeacherProp[] = await ressTeacher.json();

  return {
    props: {
      dataAbout,
      dataTeacher,
    },
  };
};
