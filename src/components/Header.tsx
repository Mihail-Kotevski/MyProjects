import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ChangeLang from "./ChangeLang";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [toggleAboutUs, settoggleAboutUs] = useState(true);
  const [hamburger, sethamburger] = useState(false);

  return (
    <>
      <header>
        <div className="top-bar">
          <div className="top-bar-content">
            <div className="left-content">
              <Link href={"/newsletter"}>NEWSLETTER</Link>
              <input type="text" placeholder="SEARCH" />
            </div>
            <div className="right-content ">
              <ul className="">
                <ChangeLang />
                <li>E-Shop</li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="orange">
          <div className="bottom-bar">
            <div>
              <Link href="/">
                <img src="/Image/icons/krik-logo 1.png" alt="" />
              </Link>
              <ul className="nav-menu">
                {toggleAboutUs ? (
                  <li
                    className="aboutusBtn"
                    onClick={() => settoggleAboutUs(!toggleAboutUs)}
                  >
                    {t("navbar.aboutUs")}
                    <FontAwesomeIcon icon={faAngleDown} />
                  </li>
                ) : (
                  <li className="dropdown">
                    <div className="za-nas ">
                      <span onClick={() => settoggleAboutUs(!toggleAboutUs)}>
                        {t("navbar.aboutUs")}
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>
                      <Link href={"/about"}>{t("navbar.aboutKrik")}</Link>
                      <Link href={"/ourteam"}>{t("navbar.ourTeam")}</Link>
                      <Link href={"/volunteers"}>{t("navbar.volunteers")}</Link>
                      <Link href={"?"}>{t("navbar.archive")}</Link>
                    </div>
                  </li>
                )}
                <li>
                  <Link href="/services?category=01">
                    {t("navbar.services")}
                  </Link>
                </li>
                <li>
                  <Link href="/projects">{t("navbar.projects")}</Link>
                </li>
                <li>
                  <Link href="#contact">{t("navbar.contact")}</Link>
                </li>
                <li className="active">
                  <Link href="/donate">{t("navbar.donate")}</Link>
                </li>
              </ul>
              {hamburger ? (
                <ul className="hamburger-menu orange">
                  {toggleAboutUs ? (
                    <li
                      className="aboutusBtn"
                      onClick={() => settoggleAboutUs(!toggleAboutUs)}
                    >
                      {t("navbar.aboutUs")}
                      <FontAwesomeIcon icon={faAngleDown} />
                    </li>
                  ) : (
                    <li className="dropdown">
                      <div className="za-nas ">
                        <span onClick={() => settoggleAboutUs(!toggleAboutUs)}>
                          {t("navbar.aboutUs")}
                          <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        <Link href={"/about"}>{t("navbar.aboutKrik")}</Link>
                        <Link href={"/ourteam"}>{t("navbar.ourTeam")}</Link>
                        <Link href={"/volunteers"}>
                          {t("navbar.volunteers")}
                        </Link>
                        <Link href={"?"}>{t("navbar.archive")}</Link>
                      </div>
                    </li>
                  )}
                  <li>
                    <Link href="/services?category=01">
                      {t("navbar.services")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">{t("navbar.projects")}</Link>
                  </li>
                  <li>
                    <Link href="#contact">{t("navbar.contact")}</Link>
                  </li>
                  <li className="active">
                    <Link href="/donate">{t("navbar.donate")}</Link>
                  </li>
                  <svg
                    onClick={() => sethamburger(false)}
                    className="close"
                    fill="#000000"
                    height="800px"
                    width="800px"
                    version="1.1"
                    id="Capa_1"
                    viewBox="0 0 460.775 460.775"
                  >
                    <path
                      d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                    c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                    c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                    c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                    l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                    c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                    />
                  </svg>
                </ul>
              ) : (
                ""
              )}
              <svg
                onClick={() => sethamburger(true)}
                className="hamburger"
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1570_957)">
                  <path
                    d="M21.3333 20.9444H2.66667C2.48986 20.9444 2.32029 20.8684 2.19526 20.7329C2.07024 20.5975 2 20.4138 2 20.2222C2 20.0307 2.07024 19.847 2.19526 19.7115C2.32029 19.5761 2.48986 19.5 2.66667 19.5H21.3333C21.5101 19.5 21.6797 19.5761 21.8047 19.7115C21.9298 19.847 22 20.0307 22 20.2222C22 20.4138 21.9298 20.5975 21.8047 20.7329C21.6797 20.8684 21.5101 20.9444 21.3333 20.9444Z"
                    fill="black"
                    stroke="black"
                  />
                  <path
                    d="M21.3333 13.7218H2.66667C2.48986 13.7218 2.32029 13.6457 2.19526 13.5103C2.07024 13.3748 2 13.1911 2 12.9996C2 12.808 2.07024 12.6243 2.19526 12.4889C2.32029 12.3534 2.48986 12.2773 2.66667 12.2773H21.3333C21.5101 12.2773 21.6797 12.3534 21.8047 12.4889C21.9298 12.6243 22 12.808 22 12.9996C22 13.1911 21.9298 13.3748 21.8047 13.5103C21.6797 13.6457 21.5101 13.7218 21.3333 13.7218Z"
                    fill="black"
                    stroke="black"
                  />
                  <path
                    d="M21.3333 6.49913H2.66667C2.48986 6.49913 2.32029 6.42304 2.19526 6.2876C2.07024 6.15215 2 5.96845 2 5.77691C2 5.58536 2.07024 5.40166 2.19526 5.26622C2.32029 5.13078 2.48986 5.05469 2.66667 5.05469H21.3333C21.5101 5.05469 21.6797 5.13078 21.8047 5.26622C21.9298 5.40166 22 5.58536 22 5.77691C22 5.96845 21.9298 6.15215 21.8047 6.2876C21.6797 6.42304 21.5101 6.49913 21.3333 6.49913Z"
                    fill="black"
                    stroke="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1570_957">
                    <rect width="24" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
