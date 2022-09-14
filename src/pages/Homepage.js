import CardComponent from "../components/CardComponent";
import { Hero } from "../components/Hero";
import { OfferSection } from "../components/OfferSection";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const HomePage = ({ user }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Homepage | Optionsfy";
  }, []);

  return (
    <div>
      <Outlet />
      <Hero />
      <section className="fluid-container" id="features">
        {t("homepage.cardComponent", { returnObjects: true }).map(
          (card, index) => (
            <div className="row" key={index}>
              <CardComponent
                contents={card}
                className={
                  index % 2 === 0
                    ? "d-flex flex-column flex-md-row col-10 mx-auto border-0 my-5"
                    : "d-flex flex-column flex-md-row-reverse col-10 mx-auto border-0 "
                }
                BodyClass={
                  index % 2 === 0
                    ? "card-text-box-right col-12 col-md-8 py-5"
                    : "card-text-box-left  col-12 col-md-8 py-5 "
                }
              />
            </div>
          )
        )}
      </section>
      <section id="pricing">
        <OfferSection user={user} />
      </section>
    </div>
  );
};

export default HomePage;
