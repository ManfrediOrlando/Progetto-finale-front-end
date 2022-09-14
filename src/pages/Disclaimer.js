import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Disclaimer() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Disclaimer | Optionsfy";
  }, []);

  return (
    <div className="container py-5">
      {t("disclaimer", { returnObjects: true }).map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          {item.content && <p>{item.content}</p>}
          {item.list && (
            <ul>
              {item.list.map((list, index) => (
                <li key={index}>
                  <strong>{list.title}</strong>
                  {list.content}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Disclaimer;
