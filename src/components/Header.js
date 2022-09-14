import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logoMobile from "../assets/logoMobile.png";
import burgerIcon from "../assets/burgerIcon.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Header = ({ user, login }) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const logoutHandle = () => {
    login(false);
    localStorage.removeItem("user");
  };
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const loggedMenu = [
      { title: "header.navbar.dashboard", active: () => navigate("dashboard") },
      { title: "header.navbar.logout", active: logoutHandle },
    ];
    const notLoggedMenu = [
      { title: "header.navbar.login", active: () => navigate("login") },
      { title: "header.navbar.signUp", active: () => navigate("signup") },
    ];
    if (user) {
      setMenu(loggedMenu);
    } else {
      setMenu(notLoggedMenu);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Navbar className="heroGradient" expand="md">
      <Container className="justify-content-space-between">
        <Navbar.Brand
          className="w-25 d-inline d-md-none cursor"
          onClick={() => navigate("/")}
        >
          <img src={logoMobile} alt="logo optionsfy" style={{cursor:"pointer"}} className="w-50" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="justify-content-end border-0 burgerMenu "
          aria-controls="basic-navbar-nav"
        >
          <img src={burgerIcon} alt="burger menu"></img>
        </Navbar.Toggle>

        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="d-flex gap-md-4 gap-0 justify-content-center align-items-end align-items-md-center">
            <HashLink
              className="text-white text-decoration-none"
              to="/#pricing"
            >
              {t("header.navbar.pricing")}
            </HashLink>
            <HashLink
              className="text-white text-decoration-none"
              to="/#features"
            >
              {t("header.navbar.features")}
            </HashLink>
            <Navbar.Brand className="w-25 py-0 cursor" onClick={() => navigate("/")}>
              <img
                src={logo}
                className="w-100 mx-0 d-none d-md-flex"
                alt="Optionsfy Logo"
                style={{cursor:"pointer"}}
              />
            </Navbar.Brand>
            {menu.map((item, index) => (
              <Nav.Link
                className="text-white"
                key={index}
                onClick={item.active}
              >
                {t(item.title)}
              </Nav.Link>
            ))}

            <LanguageSelector />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
