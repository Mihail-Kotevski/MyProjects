import WorkerDisplay from "@/components/WorkerDisplay";
import { IMenagementBoard, Workers } from "@/interfaces/types";
import { GetStaticProps, NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "@/styles/globalStyles.module.scss";
import ourworkers from "@/styles/OurWorkers.module.scss";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { accesibilityContext } from "@/context/accesibilityContext";

interface Props {
  data: Workers[];
  dataMBoard: IMenagementBoard[];
}

const OurTeam: NextPage<Props> = ({ data, dataMBoard }) => {
  const { textSize } = useContext(accesibilityContext);
  const worker = data;
  const [currentWorkerIndex, setCurrentWorkerIndex] = useState(0);
  const handleNextWorker = () => {
    setCurrentWorkerIndex((prevIndex) => (prevIndex + 1) % worker.length);
  };
  const handlePreviousWorker = () => {
    setCurrentWorkerIndex((prevIndex) =>
      prevIndex === 0 ? worker.length - 1 : prevIndex - 1
    );
  };

  const currentWorker = worker[currentWorkerIndex];
  const nextWorker = worker[(currentWorkerIndex + 1) % worker.length];
  const previousWorker =
    worker[
      currentWorkerIndex === 0 ? worker.length - 1 : currentWorkerIndex - 1
    ];

  return (
    <>
      <section className={ourworkers.ourTeam}>
        <div className={ourworkers.wrapper}>
          <h1 className={textSize ? globalStyle.XLText : globalStyle.LText}>
            Запознајте го нашиот тим
          </h1>
          {worker ? (
            <div className={ourworkers.content}>
              <div className={ourworkers.workers}>
                <WorkerDisplay data={previousWorker} />
                <div className={ourworkers.cWorker} id={`${currentWorker.id}`}>
                  <Link href={`/ourteam/${currentWorker.id}`}>
                    <img src={currentWorker.image} alt={"name"} />
                  </Link>
                </div>
                <WorkerDisplay data={nextWorker} />
              </div>
              <div className={ourworkers.menu}>
                <svg
                  onClick={handlePreviousWorker}
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="6"
                    width="64"
                    height="64"
                    rx="32"
                    fill="#191919"
                  />
                  <path
                    d="M42.8019 46.48L32.7619 37.2L42.8019 27.92H46.3619L36.2819 37.2L46.3619 46.48H42.8019Z"
                    fill="white"
                  />
                </svg>
                <svg
                  onClick={handleNextWorker}
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="64" height="64" rx="32" fill="#191919" />
                  <path
                    d="M25.2763 21.92H28.8363L38.8763 31.2L28.8363 40.48H25.2763L35.3563 31.2L25.2763 21.92Z"
                    fill="white"
                  />
                </svg>
                <div className={ourworkers.info}>
                  <h2
                    className={
                      textSize ? globalStyle.XLText : globalStyle.LText
                    }
                  >
                    {currentWorker.name}
                  </h2>
                  <p
                    className={textSize ? globalStyle.LText : globalStyle.MText}
                  >
                    {currentWorker.position}
                  </p>
                  <a href={currentWorker.linkedIn} target="_blank ">
                    <span
                      className={
                        textSize ? globalStyle.MText : globalStyle.SText
                      }
                    >
                      LinkedIn
                    </span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <p>No Data</p>
          )}
        </div>
      </section>
      <section className={ourworkers.upravenOdbor}>
        <h1 className={textSize ? globalStyle.XLText : globalStyle.LText}>
          Членови на управниот одбор
        </h1>
        <div className={ourworkers.wrapper}>
          {dataMBoard.map((el) => {
            return (
              <div key={el.id} className={ourworkers.memberWrapper}>
                <div className={ourworkers.content}>
                  <img src={`${el.image}`} alt="" />
                  <div>
                    <h3
                      className={
                        textSize ? globalStyle.LText : globalStyle.MText
                      }
                    >
                      {el.title}
                    </h3>
                    <h5
                      className={
                        textSize ? globalStyle.LText : globalStyle.MText
                      }
                    >
                      {el.preTitle}
                    </h5>
                    <p
                      className={
                        textSize ? globalStyle.MText : globalStyle.SText
                      }
                    >
                      {el.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default OurTeam;

export const getStaticProps: GetStaticProps = async () => {
  const ress = await fetch("http://localhost:3001/workers");
  const ressMBoard = await fetch("http://localhost:3001/menagement-board");

  let data: Workers[] = await ress.json();
  let dataMBoard: IMenagementBoard[] = await ressMBoard.json();

  return {
    props: {
      data,
      dataMBoard,
    },
  };
};
