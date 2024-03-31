import { NextPage } from "next";
import { useRouter } from "next/router";
import services from "@/styles/Services.module.scss";
import { useContext } from "react";
import globalStyle from "@/styles/globalStyles.module.scss";
import { accesibilityContext } from "@/context/accesibilityContext";

const Service: NextPage = () => {
  const { textSize } = useContext(accesibilityContext);
  const { query, push } = useRouter();

  return (
    <>
      <section className={services.servicesPage}>
        <div className={services.wrapper}>
          <div className={services.header}>
            <div className={services.menu}>
              <div className={services.buttons}>
                <div
                  className={services.button}
                  onClick={() => {
                    push("/services?category=01");
                  }}
                >
                  <p
                    className={textSize ? globalStyle.LText : globalStyle.MText}
                  >
                    Центар Крикни
                  </p>
                  <div
                    className={
                      query.category === "01"
                        ? services.activeBtn
                        : services.unactiveBtn
                    }
                  ></div>
                </div>
                <div
                  className={services.button}
                  onClick={() => {
                    push("/services?category=02");
                  }}
                >
                  <p
                    className={textSize ? globalStyle.LText : globalStyle.MText}
                  >
                    Независни станбени единици
                  </p>
                  <div
                    className={
                      query.category === "02"
                        ? services.activeBtn
                        : services.unactiveBtn
                    }
                  ></div>
                </div>
                <div
                  className={services.button}
                  onClick={() => {
                    push("/services?category=03");
                  }}
                >
                  <p
                    className={textSize ? globalStyle.LText : globalStyle.MText}
                  >
                    Советувалиште
                  </p>
                  <div
                    className={
                      query.category === "03"
                        ? services.activeBtn
                        : services.unactiveBtn
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {query.category === "01" ? (
            <div className={services.contentWrap}>
              <div className={services.content}>
                <div className={services.text}>
                  <h2
                    className={textSize ? globalStyle.LText : globalStyle.MText}
                  >
                    Центар Крикни
                  </h2>
                  <p
                    className={textSize ? globalStyle.MText : globalStyle.SText}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa sunt nobis molestiae cupiditate accusamus repellat
                    veritatis omnis! Debitis blanditiis nam corporis. Provident
                    nulla eius accusantium dolor eveniet? Debitis ea dicta neque
                    culpa adipisci assumenda quasi provident hic! Nihil
                    reiciendis tenetur eius et aut nostrum laudantium
                    praesentium, saepe similique labore alias repellat.
                    Consequuntur veritatis voluptatum debitis praesentium
                    tempore iste accusantium, voluptates et laudantium quibusdam
                    cum maxime placeat aperiam, molestiae neque commodi officiis
                    hic ipsam reiciendis quos iure? Quae unde dolorem nihil?
                    Dolorum in eligendi possimus iusto facere unde excepturi
                    modi quasi quisquam, nemo delectus cum perferendis
                    exercitationem quod eos laborum vitae!
                  </p>
                </div>
                <div className={services.gallery}>
                  <p className="L">Галерија со Активности</p>
                </div>
              </div>
              <div className={services.gallery}>
                <div className={services.cube}>
                  <img src="/Image/Rectangle 11.png" alt="" />
                </div>
                <div className={services.rectangle}>
                  <img src="/Image/centar krikni 2 4.png" alt="" />
                </div>
                <div className={services.cube}>
                  <img src="/Image/Rectangle 21.png" alt="" />
                </div>
                <div className={services.cube}>
                  <img src="/Image/Rectangle 22.png" alt="" />
                </div>
                <div className={services.cube}>
                  <img src="/Image/Rectangle 23.png" alt="" />
                </div>
              </div>
            </div>
          ) : query.category === "02" ? (
            <div>
              <div className="content section-size">
                <div className="text">
                  <h2
                    className={textSize ? globalStyle.LText : globalStyle.MText}
                  >
                    Центар Крикни
                  </h2>
                  <p
                    className={textSize ? globalStyle.MText : globalStyle.SText}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa sunt nobis molestiae cupiditate accusamus repellat
                    veritatis omnis! Debitis blanditiis nam corporis. Provident
                    nulla eius accusantium dolor eveniet? Debitis ea dicta neque
                    culpa adipisci assumenda quasi provident hic! Nihil
                    reiciendis tenetur eius et aut nostrum laudantium
                    praesentium, saepe similique labore alias repellat.
                    Consequuntur veritatis voluptatum debitis praesentium
                    tempore iste accusantium, voluptates et laudantium quibusdam
                    cum maxime placeat aperiam, molestiae neque commodi officiis
                    hic ipsam reiciendis quos iure? Quae unde dolorem nihil?
                    Dolorum in eligendi possimus iusto facere unde excepturi
                    modi quasi quisquam, nemo delectus cum perferendis
                    exercitationem quod eos laborum vitae!
                  </p>
                </div>
                <div className="gallery"></div>
                <p className="L">Галерија со Активности</p>
              </div>
              <div className="gallery">
                <div className="cube">
                  <img src="/Image/Rectangle 11.png" alt="" />
                </div>
                <div className="rectangle">
                  <img src="/Image/centar krikni 2 4.png" alt="" />
                </div>
                <div className="cube">
                  <img src="/Image/Rectangle 21.png" alt="" />
                </div>
                <div className="cube">
                  <img src="/Image/Rectangle 22.png" alt="" />
                </div>
                <div className="cube">
                  <img src="/Image/Rectangle 23.png" alt="" />
                </div>
              </div>
            </div>
          ) : query.category === "03" ? (
            <div>
              <div className="content section-size">
                <div className="text">
                  <h2
                    className={textSize ? globalStyle.LText : globalStyle.MText}
                  >
                    Центар Крикни
                  </h2>
                  <p
                    className={textSize ? globalStyle.MText : globalStyle.SText}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa sunt nobis molestiae cupiditate accusamus repellat
                    veritatis omnis! Debitis blanditiis nam corporis. Provident
                    nulla eius accusantium dolor eveniet? Debitis ea dicta neque
                    culpa adipisci assumenda quasi provident hic! Nihil
                    reiciendis tenetur eius et aut nostrum laudantium
                    praesentium, saepe similique labore alias repellat.
                    Consequuntur veritatis voluptatum debitis praesentium
                    tempore iste accusantium, voluptates et laudantium quibusdam
                    cum maxime placeat aperiam, molestiae neque commodi officiis
                    hic ipsam reiciendis quos iure? Quae unde dolorem nihil?
                    Dolorum in eligendi possimus iusto facere unde excepturi
                    modi quasi quisquam, nemo delectus cum perferendis
                    exercitationem quod eos laborum vitae!
                  </p>
                </div>
                <div className="gallery"></div>
                <p className="L">Галерија со Активности</p>
              </div>
              <div className="gallery">
                <div className="cube">
                  <img src="/Image/Rectangle 11.png" alt="" />
                </div>
                <div className="rectangle">
                  <img src="/Image/centar krikni 2 4.png" alt="" />
                </div>
                <div className="cube">
                  <img src="/Image/Rectangle 21.png" alt="" />
                </div>
                <div className="cube">
                  <img src="/Image/Rectangle 22.png" alt="" />
                </div>
                <div className="cube">
                  <img src="/Image/Rectangle 23.png" alt="" />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default Service;
