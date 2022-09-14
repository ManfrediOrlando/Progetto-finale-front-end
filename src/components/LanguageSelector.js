import { Dropdown } from "react-bootstrap";
import { ReactComponent as Globe } from "../assets/globe.svg";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const languageHandle = (event) => {
    const lang = event.target.attributes.value.nodeValue;

    i18n.changeLanguage(lang);
  };
  return (
    <Dropdown>
      <div className="d-flex justify-content-end">
        <Dropdown.Toggle
          className="bg-transparent d-flex languageToggle  align-items-center border-0 border-0:active"
          variant="success"
          id="dropdown-basic"
        >
          <Globe />
        </Dropdown.Toggle>
      </div>
      <Dropdown.Menu>
        <Dropdown.Item value="en" onClick={languageHandle}>
          {t("language.english")}
        </Dropdown.Item>
        <Dropdown.Item value="es" onClick={languageHandle}>
          {t("language.spanish")}
        </Dropdown.Item>
        <Dropdown.Item value="de" onClick={languageHandle}>
          {t("language.german")}
        </Dropdown.Item>
        <Dropdown.Item value="fr" onClick={languageHandle}>
          {t("language.french")}
        </Dropdown.Item>
        <Dropdown.Item value="it" onClick={languageHandle}>
          {t("language.italian")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
