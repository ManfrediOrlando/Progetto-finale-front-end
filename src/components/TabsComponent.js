import { Tab, Tabs } from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useTranslation } from "react-i18next";

const TabsComponent = ({ renderKey, login }) => {
  const { t } = useTranslation();
  return (
    <Tabs
      defaultActiveKey={renderKey}
      id="uncontrolled-tab-example"
      className="d-flex mb-3 d-flex flex-row justify-content-center"
    >
      <Tab eventKey="login" title={t("header.tabsComponent.login")}>
        <LoginForm login={login} />
      </Tab>
      <Tab eventKey="signup" title={t("header.tabsComponent.signUp")}>
        <SignUpForm />
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;
