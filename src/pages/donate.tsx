import { NextPage } from "next";
import donate from "@/styles/Donate.module.scss";

const Donate: NextPage = () => {
  return (
    <>
      <section className={donate.donatePage}>
        <h2 className="XL">Донирај!</h2>
        <div className={donate.menu}>
          <div className={donate.buttons}>
            <div className={donate.button}>
              <p className="M">Индивидуа</p>
              <div className={donate.activeBtn}></div>
            </div>
            <div className={donate.button}>
              <p className="M">Организација/Претпријатие</p>
              <div className={donate.unactiveBtn}></div>
            </div>
          </div>
        </div>
        <div className={donate.donate}>
          <h5 className="M">Lorem ipsum dolor sit amet consectetur. </h5>
          <div className={donate.amounts}>
            <div className="XS">1000 Ден</div>
            <div className="XS">3000 Ден</div>
            <div className="XS">6000 Ден</div>
            <div className="XS">Промени валута</div>
          </div>
          <div className={donate.text}>
            <span className="S">
              Lorem ipsum dolor sit amet consectetur. In sed lobortis donec a
              cras feugiat mattis velit venenatis. Adipiscing viverra praesent
              tristique non. Nunc blandit turpis tellus natoque mi odio viverra
              fermentum.{" "}
            </span>
          </div>
          <div className={donate.payMethod}>
            <p>Друг износ:</p>
            <input type="text" name="" id="" placeholder="Amount" />
            <div className={donate.donateChoice}>
              <button className={donate.card}>Донирај со 💳</button>
              <button className={donate.paypall}>PayPal</button>
            </div>
          </div>
        </div>
        <div className={donate.donateForm}>
          <form action="">
            <div className={donate.formContent}>
              <div className={donate.left}>
                <div className={donate.inputContainer}>
                  <label className="M" htmlFor="">
                    Име на Донатор*
                  </label>
                  <input type="text" placeholder="Example Namington" />
                </div>
                <div className={donate.inputContainer}>
                  <label className="M" htmlFor="">
                    Email*
                  </label>
                  <input type="text" placeholder="example@email.com" />
                </div>
                <div className={donate.inputContainer}>
                  <label className="M" htmlFor="">
                    Телефонски број*
                  </label>
                  <input type="text" placeholder="+38900000000" />
                </div>
                <div className={donate.inputContainer}>
                  <label className="M" htmlFor="">
                    Сума за донирање*
                  </label>
                  <input
                    className="fullwidth"
                    type="text"
                    placeholder="a million?"
                  />
                </div>
              </div>
              <div className={donate.right}>
                <div className={donate.inputContainer}>
                  <label className="M" htmlFor="">
                    Број на картичка*
                  </label>
                  <input type="text" placeholder="****   ****   ****   ****" />
                </div>
                <div className={donate.date}>
                  <input type="text" placeholder="MM/YY" />
                  <input className="halfwidth" type="text" placeholder="CVV" />
                </div>
                <div className={donate.inputContainer}>
                  <label className="M" htmlFor="">
                    Име на сопственик*
                  </label>
                  <input type="text" placeholder="Example Namington" />
                </div>
                <button type="submit" className={donate.submitBtn}>Донирај</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Donate;
