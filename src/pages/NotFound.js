import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import notFoundPic from "../assets/notFound.gif";

function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(()=>{
    document.title = 'Page not found | Optionsfy';
  },[])

  return (
    <div className="container p-5 w-100 mx-auto d-flex flex-column justify-content-center align-items-center">
      <img
        className="w-50 "
        src={notFoundPic}
        alt="404 not found gif animata robot"
      ></img>
      <button
        className="heroBGButton rounded-pill p-3 col-md-4 col-8"
        onClick={() => navigate("/")}
      >
        {t("notFound")}
      </button>
    </div>
  );
}

export default NotFound;
