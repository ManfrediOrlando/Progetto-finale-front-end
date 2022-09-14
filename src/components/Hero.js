import React, { useState } from "react";
import Pic1 from "../assets/pic-1.png";
import { useTranslation } from "react-i18next";
import createSendinblueAccount from "../utils/createSendinblueAccount";

export const Hero = () => {
  const [mail, setMail] = useState("");
  const { t } = useTranslation();

  const handleInput = (event) => {
    setMail(event.target.value);
  };

  const submitEmail = (event) => {
    event.preventDefault();
    createSendinblueAccount([2], mail);
    setMail("");
  };

  return (
    <div className="heroGradient text-white w-100">
      <div className="row flex-column-reverse flex-md-row justify-content-around p-3 p-md-5 mx-0">
        <div className="col-12 col-md-6">
          <img src={Pic1} className="w-100" alt="immagine computer" />
        </div>

        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-white">
          <h1 className="text-center text-md-end px-md-5">
            {t("homepage.hero.title")}
          </h1>
          <p className="mt-3 text-center text-md-end px-md-5">
            {t("homepage.hero.subTitle")}
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="fw-bold fst-italic">{t("homepage.hero.registration")}</p>
        <form className="d-flex flex-column justify-content-center align-items-center ">
          <input
            type="text"
            name="email"
            value={mail}
            onChange={handleInput}
            placeholder="Email"
            className="mb-2 bg-transparent border border-white text-white text-center"
          />
          <button
            type="submit"
            className="fw-bold heroBGButton text-white mb-4 border border-white px-3"
            onClick={submitEmail}
          >
            {t("homepage.hero.getStarted")}
          </button>
        </form>
      </div>
    </div>
  );
};
