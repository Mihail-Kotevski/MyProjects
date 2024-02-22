import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
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
      <footer id="contact">
        <div className="wrapper">
          <div className="footer-content">
            <div className="newsletter">
              <h2>{t("footer.newsletter")}</h2>
              <p>{t("footer.newsletterText")}</p>
            </div>
            <div className="email">
              <form action="">
                <input
                  type="text"
                  className="CTA-input"
                  placeholder={t("footer.email")}
                />
                <button className="orange CTA-button ">CTA</button>
              </form>
            </div>
          </div>
          <div className="footer-content-lower">
            <div className="contact">
              <h4>{t("footer.contactUs")}</h4>
              <form action="">
                <input
                  type="text"
                  className="CTA-input "
                  placeholder={t("footer.yourName")}
                />
                <input
                  type="text"
                  className="CTA-input "
                  placeholder={t("footer.email")}
                />
                <button className="orange CTA-button">CTA</button>
              </form>
            </div>
            <div className="sign-in">
              <div className="sign-up">
                <h4>{t("footer.signIn")}</h4>
                <p>{t("footer.signInText")}</p>
              </div>
              <div className="about-krik">
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
