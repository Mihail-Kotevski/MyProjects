import React, { useState } from "react";
import i18n from "../../i18next/i18next";

const ChangeLang = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <li
      onClick={() => {
        setToggle(!toggle);
        i18n.changeLanguage(toggle ? "mkd" : "en");
      }}
    >
      En/Mkd
    </li>
  );
};

export default ChangeLang;
