import { NextPage } from "next";
import Link from "next/link";

const VolunteerAplication: NextPage = () => {
  return (
    <>
      <section className="page-volunteer-aplication section-size">
        <h1>Волонтирај Сега!</h1>
        <div className="wrapper">
          <form action="" className="section-size">
            <div className="content-wrapper section-size">
              <div className="left">
                <div className="input-container">
                  <label htmlFor="">Име на Волонтер*</label>
                  <input className="" type="" placeholder="Example Namington" />
                </div>
                <div className="input-container">
                  <label htmlFor="">Адреса*</label>
                  <input className="" type="" placeholder="Example Namington" />
                </div>
                <div className="input-container">
                  <label htmlFor="">Телефонски број*</label>
                  <input className="" type="text" placeholder="+38900000000" />
                </div>
                <div className="input-container">
                  <label htmlFor="">Еmail*</label>
                  <input
                    className=""
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className="right-container">
                <div className="input-container">
                  <label htmlFor="">Возраст*</label>
                  <div>
                    <input
                      className=""
                      type="text"
                      placeholder="Под 18 Години"
                    />
                    <input
                      className=""
                      type="text"
                      placeholder="Над 18 Години"
                    />
                  </div>
                </div>
                <div className="range-container section-size">
                  <div className="range-wrapper">
                    <label htmlFor="">Искуство со волонтирање*</label>
                    <input
                      className="experience-range-input"
                      name="stars"
                      type="range"
                      max={10}
                      min={1}
                      step={1}
                    />
                    <div className="numbers">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>9</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>
                <div className="interesi-container">
                  <label htmlFor="">Волонтерски интереси*</label>
                  <div className="interesi">
                    <div className="short-input-container">
                      <input className="" type="text" placeholder="MM/YY" />
                      <input className="" type="text" placeholder="CVV" />
                    </div>
                    <div className="short-input-container">
                      <input className="" type="text" placeholder="MM/YY" />
                      <input className="" type="text" placeholder="CVV" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit">Пријави Се</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default VolunteerAplication;
