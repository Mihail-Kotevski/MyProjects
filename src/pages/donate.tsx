import { NextPage } from "next";

const Donate: NextPage = () => {
  return (
    <>
      <section className="donate-section section-size py-5">
        <h2 className="XL">Донирај!</h2>
        <div className="menu py-5">
          <div className="buttons wrapper-size">
            <div className="button">
              <p className="M">Индивидуа</p>
              <div className="active-btn"></div>
            </div>
            <div className="button">
              <p className="M">Организација/Претпријатие</p>
              <div className="button-unactive"></div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h5 className="M">Lorem ipsum dolor sit amet consectetur. </h5>
          <div className="donate-options">
            <div className="XS">1000 Ден</div>
            <div className="XS">3000 Ден</div>
            <div className="XS">6000 Ден</div>
            <div className="XS">Промени валута</div>
          </div>
          <div className="donate-text">
            <span className="S">
              Lorem ipsum dolor sit amet consectetur. In sed lobortis donec a
              cras feugiat mattis velit venenatis. Adipiscing viverra praesent
              tristique non. Nunc blandit turpis tellus natoque mi odio viverra
              fermentum.{" "}
            </span>
          </div>
          <div className="donate-amount">
            <p>Друг износ:</p>
            <input type="text" name="" id="" placeholder="Amount" />
            <div>
              <button className="donate-with BTN">Донирај со 💳</button>
              <button className="paypal BTN">PayPal</button>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form action="">
            <div className="form-content">
              <div className="left">
                <div className="input-container">
                  <label className="M" htmlFor="">Име на Донатор*</label>
                  <input
                    className="fullwidth"
                    type="text"
                    placeholder="Example Namington"
                  />
                </div>
                <div className="input-container">
                  <label className="M" htmlFor="">Email*</label>
                  <input
                    className="fullwidth"
                    type="text"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="input-container">
                  <label className="M" htmlFor="">Телефонски број*</label>
                  <input
                    className="fullwidth"
                    type="text"
                    placeholder="+38900000000"
                  />
                </div>
                <div className="input-container">
                  <label className="M" htmlFor="">Сума за донирање*</label>
                  <input
                    className="fullwidth"
                    type="text"
                    placeholder="a million?"
                  />
                </div>
              </div>
              <div className="right">
                <div className="input-container">
                  <label className="M" htmlFor="">Број на картичка*</label>
                  <input
                    className="fullwidth"
                    type="text"
                    placeholder="****   ****   ****   ****"
                  />
                </div>
                <div className="date">
                  <input
                    className="halfwidth"
                    type="text"
                    placeholder="MM/YY"
                  />
                  <input className="halfwidth" type="text" placeholder="CVV" />
                </div>
                <div className="input-container">
                  <label className="M" htmlFor="">Име на сопственик*</label>
                  <input
                    className="fullwidth"
                    type="text"
                    placeholder="Example Namington"
                  />
                </div>
                <button type="submit">Донирај</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Donate;
