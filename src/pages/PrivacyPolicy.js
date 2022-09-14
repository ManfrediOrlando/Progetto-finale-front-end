import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function PrivacyPolicy() {
  const { t } = useTranslation();

  useEffect(()=>{
    document.title = 'Privacy policy | Optionsfy';
  },[])

  return (
    <div className="container py-5">
      {t("privacyPolicy", { returnObjects: true }).map((item, index) => {
        return (
          <div key={index}>
            {item.pageTitle && <h1>{item.pageTitle}</h1>}
            {item.pageSubtitle && <p>{item.pageSubtitle}</p>}
            {item.sectionMainTitle && <h2>{item.sectionMainTitle}</h2>}
            {item.sectionMainSubTitle && <h3>{item.sectionMainSubTitle}</h3>}
            {item.sectionTitle && <h4>{item.sectionTitle}</h4>}
            {item.sectionTextContent && <p>{item.sectionTextContent}</p>}
            {item.listTextItems && (
              <ul>
                {item.listTextItems.map((li) => {
                  return (
                    <li key={li.id}>
                      {li.title && <strong>{li.title}</strong>}
                      {li.content}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PrivacyPolicy;
