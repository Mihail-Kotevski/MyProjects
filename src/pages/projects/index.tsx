import { IProject } from "@/interfaces/types";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useContext, useState } from "react";
import globalStyle from "@/styles/globalStyles.module.scss";
import project from "@/styles/Projects.module.scss";
import { accesibilityContext } from "@/context/accesibilityContext";

interface Props {
  data: IProject[];
}

const Projects: NextPage<Props> = ({ data }) => {
  const { textSize } = useContext(accesibilityContext);
  const [currentUncompletedPage, setCurrentUncompletedPage] = useState(1);
  const [activeUncompletedButton, setactiveUncompletedButton] = useState(1);
  const [currentCompletedPage, setCompletedPage] = useState(1);
  const [activeCompletedButton, setactiveCompletedButton] = useState(1);

  const uncompleted = data.filter((el) => el.state === false);
  const completed = data.filter((el) => el.state === true);

  const unCompletedItemsNumber = 4;
  const uncompletedStartIndex =
    (currentUncompletedPage - 1) * unCompletedItemsNumber;
  const UncompletedendIndex = uncompletedStartIndex + unCompletedItemsNumber;
  const uncompletedChunk = uncompleted.slice(
    uncompletedStartIndex,
    UncompletedendIndex
  );

  const completedItemsNumber = 8;
  const startIndex = (currentCompletedPage - 1) * completedItemsNumber;
  const endIndex = startIndex + completedItemsNumber;
  const CompletedChunk = completed.slice(startIndex, endIndex);

  const handleUncompletedChange = (pageNumber: number) => {
    setCurrentUncompletedPage(pageNumber);
  };

  const handleCompletedChange = (pageNumber: number) => {
    setCompletedPage(pageNumber);
  };
  return (
    <>
      <section className={project.projectPage}>
        <h2 className={textSize ? globalStyle.XLText : globalStyle.LText}>
          Проекти
        </h2>
        <div className={project.wrapper}>
          <h3 className={textSize ? globalStyle.LText : globalStyle.MText}>
            Тековни
          </h3>
          <div className={project.grid}>
            {uncompletedChunk?.map((el) => (
              <Link
                key={el.id}
                href={`/projects/${el.id}`}
                className={project.gridItem}
                style={{ backgroundImage: `url("${el.image}")` }}
              >
                <div className="info">{el.title}</div>
              </Link>
            ))}
          </div>
          <div className="wrapper wrapper-size">
            {Array.from({
              length: Math.ceil(uncompleted.length / unCompletedItemsNumber),
            }).map((_, index) => (
              <span
                className={`${
                  activeUncompletedButton === index + 1
                    ? "active-pagination-btn"
                    : ""
                }`}
                key={index}
                onClick={() => {
                  handleUncompletedChange(index + 1);
                  setactiveUncompletedButton(index + 1);
                }}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className={project.secondProjectSection}>
        <div className={project.wrapper}>
          <h3 className={textSize ? globalStyle.LText : globalStyle.MText}>
            Завршени
          </h3>
          <div className={project.grid}>
            {CompletedChunk?.map((el) => (
              <Link
                key={el.id}
                href={`/projects/${el.id}`}
                className={project.gridItem}
                style={{ backgroundImage: `url("${el.image}")` }}
              >
                <div className="info">{el.title}</div>
              </Link>
            ))}
          </div>
          <div>
            {Array.from({
              length: Math.ceil(completed.length / completedItemsNumber),
            }).map((_, index) => (
              <span
                className={`${
                  activeCompletedButton === index + 1
                    ? "active-pagination-btn"
                    : ""
                }`}
                key={index}
                onClick={() => {
                  handleCompletedChange(index + 1);
                  setactiveCompletedButton(index + 1);
                }}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

export const getServerSideProps: GetServerSideProps = async () => {
  const ress = await fetch("http://localhost:3001/projects");
  const data: IProject[] = await ress.json();
  return {
    props: {
      data,
    },
  };
};
