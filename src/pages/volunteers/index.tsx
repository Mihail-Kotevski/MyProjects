import VolunteeurCard from "@/components/VolunteurCard";
import { accesibilityContext } from "@/context/accesibilityContext";
import { IVolonteer } from "@/interfaces/types";
import volunteer from "@/styles/Volunteer.module.scss";
import globalStyle from "@/styles/globalStyles.module.scss";
import { GetServerSideProps, NextPage } from "next";
import { useContext, useState } from "react";

interface Props {
  dataShortTerm: IVolonteer[];
  dataLongTerm: IVolonteer[];
}

const Volunteeurs: NextPage<Props> = ({ dataShortTerm, dataLongTerm }) => {
  const { textSize } = useContext(accesibilityContext);
  const [term, setTerm] = useState(false);
  return (
    <>
      <section className={volunteer.volunteerPage}>
        <div className={volunteer.wrapper}>
          <div className={volunteer.menu}>
            <h2 className={textSize ? globalStyle.XLText : globalStyle.LText}>
              Нашите Волонтери
            </h2>
            <div className={volunteer.buttons}>
              <div onClick={() => setTerm(false)}>
                <p className={textSize ? globalStyle.LText : globalStyle.MText}>
                  Краток Рок
                </p>
                <div
                  className={`${
                    !term ? volunteer.activeBtn : volunteer.unactiveBtn
                  }`}
                ></div>
              </div>
              <div onClick={() => setTerm(true)}>
                <p className={textSize ? globalStyle.LText : globalStyle.MText}>
                  Долг Рок
                </p>
                <div
                  className={`${
                    term ? volunteer.activeBtn : volunteer.unactiveBtn
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className={volunteer.content}>
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
