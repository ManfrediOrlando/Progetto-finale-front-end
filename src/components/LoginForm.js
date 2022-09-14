import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ login }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { t } = useTranslation();

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const fetchSignin = async (data) => {
    const response = await fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    });

    return response;
  };

  const emailValidatePattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchSignin(data)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert(t("header.loginForm.alert"));
          return null;
        }
      })
      .then((data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          login(true);
          navigate("/");
        }
      });

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <form
      className="d-flex flex-column gap-5 formBackground"
      onSubmit={handleSubmit}
    >
      <div className="d-flex flex-column align-items-center gap-3 pt-3">
        <input
          type="email"
          placeholder={t("header.loginForm.email")}
          name="email"
          className="inputForm text-center"
          value={data.email}
          onChange={inputHandle}
          pattern ={emailValidatePattern}
        ></input>
        <input
          type="password"
          placeholder={t("header.loginForm.password")}
          name="password"
          className="inputForm text-center"
          value={data.password}
          onChange={inputHandle}
        ></input>
      </div>
      <div className="d-flex flex-column align-items-center gap-4 pb-3">
        <button type="submit" className="formButton heroBGButton">
          {t("header.loginForm.login")}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
