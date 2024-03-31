import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import style from "../styles/layout/Footer.module.scss";
import {
  faLinkedinIn,
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className={style.footer} id="contact">
        <div className={style.wrapper}>
          <div className={style.content}>
            <div className={style.newsletter}>
              <h2>{t("footer.newsletter")}</h2>
              <p>{t("footer.newsletterText")}</p>
            </div>
            <div className={style.email}>
              <form action="">
                <input
                  type="text"
                  className={style.CTAinput}
                  placeholder={t("footer.email")}
                />
                <button className={style.CTAButton}>CTA</button>
              </form>
            </div>
          </div>
          <div className={style.lowerContent}>
            <div className={style.contact}>
              <h4>{t("footer.contactUs")}</h4>
              <form action="">
                <input
                  type="text"
                  placeholder={t("footer.yourName")}
                />
                <input
                  type="text"
                  placeholder={t("footer.email")}
                />
                <button className="orange CTA-button">CTA</button>
              </form>
            </div>
            <div className={style.signIn}>
              <div className={style.signUp}>
                <h4>{t("footer.signIn")}</h4>
                <p>{t("footer.signInText")}</p>
              </div>
              <div className={style.aboutKrik}>
                <h4 className="">{t("footer.aboutKrik")}</h4>
                <p>{t("footer.aboutKrikText")}</p>
                <div className="footer-icons">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebookF} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
