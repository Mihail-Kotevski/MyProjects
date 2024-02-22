import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            aboutUs: "About Us",
            aboutKrik: "About KRIK",
            ourTeam: "Our Team",
            volunteers: "Volunteers",
            archive: "Archive",
            services: "Services",
            projects: "Projects",
            contact: "Contact",
            donate: "Donate",
          },
          footer: {
            newsletter: "Montly Newsletter",
            newsletterText:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste repudiandae inventore hic. Rerum!",
            email: "Your email adress",
            contactUs: "Contact Us",
            yourNameInp: "Your Name",
            yourName: "Your Name",
            signIn: "Sign In",
            signInText:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste repudiandae inventore hic. Rerum!",
            aboutKrik: "About Krik",
            aboutKrikText:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid numquam quam non tempora! Animi.",
          },
        },
      },
      mkd: {
        translation: {
          navbar: {
            aboutUs: "За Нас",
            aboutKrik: "За Крик",
            ourTeam: "Нашиот Тим",
            volunteers: "Волонтери",
            archive: "Архива",
            services: "Услуги",
            projects: "Проекти",
            contact: "Контакт",
            donate: "Донирај",
          },
          footer: {
            newsletter: "Месечен Билтен",
            newsletterText:
              "Лорем ипсум долор сит аме консектетур адипсинг елит. Плацеат исте репидуандае инветоре хиц, Рерум!",
            email: "Вашата Емаил Адреса",
            contactUs: "Контактирај не",
            yourNameInp: "Вашето Име",
            yourName: "Your Name",
            signIn: "Приклучи Се",
            signInText:
              "Лорем ипсум долор сит аме консектетур адипсинг елит. Плацеат исте репидуандае инветоре хиц, Рерум! Плацеат исте репидуандае инветоре хиц, Рерум",
            aboutKrik: "За Крик",
            aboutKrikText:
              "Лорем ипсум долор сит аме консектетур адипсинг елит. Плацеат исте репидуандае инветоре хиц, Рерум!",
          },
        },
      },
    },
    lng: "mkd",
    fallbackLng: "mkd",
  });

export default i18n;
