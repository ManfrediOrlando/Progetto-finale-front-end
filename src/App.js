import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import GoToTop from "./utils/GoToTop";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import Protected from "./components/Protected";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import ContactUsModal from "./components/ContactUsModal";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ModalComponent from "./components/ModalComponent";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [login, setLogin] = useState(false);
  const [contactModalShow, setContactModalShow] = useState(false);

  const userSetting = (par) => setLogin(par);
  const { t } = useTranslation();

  useEffect(() => {
    const userJoin = JSON.parse(localStorage.getItem("user"));
    if (userJoin) {
      setUser(userJoin);
      setLogin(true);
    } else {
      setUser(userJoin);
    }
  }, [login]);

  return (
    <>
      <Header user={user} login={userSetting} />

      <GoToTop />
      <Routes>
        <Route index element={<HomePage user={user} />} />
        <Route path="/" element={<HomePage user={user} />}>
          <Route
            path="login"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <ModalComponent
                  renderKey="login"
                  show={true}
                  login={userSetting}
                />
              )
            }
          />
          <Route
            path="signup"
            element={
              user ? (
                <Navigate to="/" />
              ) : (
                <ModalComponent
                  renderKey="signup"
                  show={true}
                  login={userSetting}
                />
              )
            }
          />
        </Route>
        <Route element={<Protected user={user} />}>
          <Route path="dashboard" element={<Dashboard user={user} />} />
        </Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Button
        className="contactUsButton"
        onClick={() => setContactModalShow(true)}
      >
        {t("contactUs.title")}
      </Button>
      <ContactUsModal
        show={contactModalShow}
        onHide={() => setContactModalShow(false)}
      />
    </>
  );
};

export default App;
