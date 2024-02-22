import { IProject } from "@/interfaces/types";
import { url } from "inspector";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  data: IProject[];
}

const Projects: NextPage<Props> = ({ data }) => {
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
      <section className="projects-first-section section-size py-5">
        <h2 className="XXL">Проекти</h2>
        <div className="wrapper-size">
          <h3 className="XL">Тековни</h3>
          <div className="grid section-size py-5">
            {uncompletedChunk?.map((el) => (
              <Link
                key={el.id}
                href={`/projects/${el.id}`}
                className="grid-item"
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
      <section className="projects-second-section section-size py-5">
        <div className="wrapper-size">
          <h3>Завршени</h3>
          <div className="grid section-size py-5">
            {CompletedChunk?.map((el) => (
              <Link
                key={el.id}
                href={`/projects/${el.id}`}
                className="grid-item"
                style={{ backgroundImage: `url("${el.image}")` }}
              >
                <div className="info">{el.title}</div>
              </Link>
            ))}
          </div>
          <div className="d-flex">
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
