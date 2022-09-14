import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import TradingViewWidget from "react-tradingview-widget";

function Dashboard({ user }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Dashboard | Optionsfy";
  }, []);

  return (
    <div className="d-flex py-5 flex-column justify-content-center align-items-center">
      <h1 className="mb-5">
        {t("dashboard.welcome")}{" "}
        {String(user.firstName).charAt(0).toUpperCase() +
          String(user.firstName).slice(1)}{" "}
        {String(user.lastName).charAt(0).toUpperCase() +
          String(user.lastName).slice(1)}
      </h1>
      <TradingViewWidget symbol="NASDAQ:AAPL" />
    </div>
  );
}

export default Dashboard;
