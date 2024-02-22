import VolunteeurCard from "@/components/VolunteurCard";
import { IVolonteer } from "@/interfaces/types";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

interface Props {
  dataShortTerm: IVolonteer[];
  dataLongTerm: IVolonteer[];
}

const Volunteeurs: NextPage<Props> = ({ dataShortTerm, dataLongTerm }) => {
  const [term, setTerm] = useState(false);
  return (
    <>
      <section className="volunteeurs-section section-size py-5">
        <div className="wrapper-size">
          <div className="menu">
            <h2 className="py-4 XXL">Нашите Волонтери</h2>
            <div className="buttons">
              <div onClick={() => setTerm(false)}>
                <p className="L">Краток Рок</p>
                <div
                  className={`${!term ? "active-btn" : "button-unactive"}`}
                ></div>
              </div>
              <div onClick={() => setTerm(true)}>
                <p className="L">Долг Рок</p>
                <div
                  className={`${term ? "active-btn" : "button-unactive"}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-container wrapper-size py-5">
          <>
            {!term
              ? dataShortTerm.map((el) => (
                  <VolunteeurCard key={el.id} data={el} />
                ))
              : dataLongTerm.map((el) => (
                  <VolunteeurCard key={el.id} data={el} />
                ))}
          </>
        </div>
      </section>
    </>
  );
};

export default Volunteeurs;

export const getServerSideProps: GetServerSideProps = async () => {
  const ressShortTerm = await fetch(
    " http://localhost:3001/volonteers?longTerm=false"
  );
  const dataShortTerm = await ressShortTerm.json();

  const ressLongTerm = await fetch(
    " http://localhost:3001/volonteers?longTerm=true"
  );
  const dataLongTerm = await ressLongTerm.json();

  return {
    props: {
      dataShortTerm,
      dataLongTerm,
    },
  };
};
