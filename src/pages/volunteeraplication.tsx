import { NextPage } from "next";
import VolunteeringPage from "@/styles/Volunteering.module.scss";

const VolunteerAplication: NextPage = () => {
  return (
    <>
      <section className={VolunteeringPage.volunteerAplicationPage}>
        <h1>Волонтирај Сега!</h1>
        <div className={VolunteeringPage.wrapper}>
          <form action="">
            <div className={VolunteeringPage.content}>
              <div className={VolunteeringPage.left}>
                <div className={VolunteeringPage.inputContainer}>
                  <label htmlFor="">Име на Волонтер*</label>
                  <input className="" type="" placeholder="Example Namington" />
                </div>
                <div className={VolunteeringPage.inputContainer}>
                  <label htmlFor="">Адреса*</label>
                  <input className="" type="" placeholder="Example Namington" />
                </div>
                <div className={VolunteeringPage.inputContainer}>
                  <label htmlFor="">Телефонски број*</label>
                  <input className="" type="text" placeholder="+38900000000" />
                </div>
                <div className={VolunteeringPage.inputContainer}>
                  <label htmlFor="">Еmail*</label>
                  <input
                    className=""
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className={VolunteeringPage.right}>
                <div className={VolunteeringPage.inputContainer}>
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
                <div className={VolunteeringPage.range}>
                  <div className={VolunteeringPage.container}>
                    <label htmlFor="">Искуство со волонтирање*</label>
                    <input
                      className={VolunteeringPage.rangeInput}
                      name="stars"
                      type="range"
                      max={10}
                      min={1}
                      step={1}
                    />
                    <div className={VolunteeringPage.numbers}>
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
                <div className={VolunteeringPage.interests}>
                  <label htmlFor="">Волонтерски интереси*</label>
                  <div className={VolunteeringPage.content}>
                    <div className={VolunteeringPage.inputContainer}>
                      <input className="" type="text" placeholder="MM/YY" />
                      <input className="" type="text" placeholder="CVV" />
                    </div>
                    <div className={VolunteeringPage.inputContainer}>
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
