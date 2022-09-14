import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-cards-gradient py-5">
      <div className="w-75 mx-auto">
        <div className="row mb-4">
          <img
            src={logo}
            className="col-7 mx-auto col-md-2 mx-md-0 text-md-start text-center"
            alt="Optionsfy Logo"
          />
        </div>
        <div className="row flex-column-reverse flex-md-row">
          <p className="col-10 mx-auto text-center text-md-start col-md-6 text-white ">
            {t("footer.disclaimerText")}
          </p>
          <ul className="col-10 mx-auto text-center text-md-end col-md-6 text-white list-unstyled">
            <li>
              <Link
                to="terms-of-service"
                className="text-white text-decoration-none"
              >
                {t("footer.termOfService")}
              </Link>
            </li>
            <li>
              <Link
                to="privacy-policy"
                className="text-white text-decoration-none"
              >
                {t("footer.privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link to="disclaimer" className="text-white text-decoration-none">
                {t("footer.disclaimer")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
