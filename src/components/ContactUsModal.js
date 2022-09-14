import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import contactUsGif from "../assets/contactUs.gif";
import createSendinblueAccount from "../utils/createSendinblueAccount";

function ContactUsModal(props) {
  const { t } = useTranslation();

  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    text: "",
  });

  const inputHandle = (event) => {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type !== "checkbox" ? value : checked,
      };
    });
  };

  const contactUsSubmit = (e) => {
    e.preventDefault();
    createSendinblueAccount([6], data.email, {
      firstName: data.firstName,
      lastName: data.lastName,
      note: data.text,
    });
    setData({
      email: "",
      firstName: "",
      lastName: "",
      text: "",
    });
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="mf"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="d-flex">
        <img src={contactUsGif} alt="letter" className="col-4" />
        <form
          className="d-flex flex-column align-items-start gap-3 py-3 col-8"
          onSubmit={contactUsSubmit}
        >
          <input
            name="firstName"
            type="text"
            value={data.firstName}
            onChange={inputHandle}
            placeholder={t("contactUs.firstName")}
            className="w-100"
          ></input>
          <input
            name="lastName"
            type="text"
            value={data.lastName}
            onChange={inputHandle}
            placeholder={t("contactUs.lastName")}
            className="w-100"
          ></input>
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={inputHandle}
            placeholder={t("contactUs.email")}
            className="w-100"
          ></input>
          <textarea
            name="text"
            onChange={inputHandle}
            value={data.text}
            placeholder={t("contactUs.message")}
            className="w-100"
          ></textarea>
          <button
            type="submit"
            className="formButton heroBGButton align-self-center"
          >
            {t("contactUs.title")}
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={props.onHide}
          className="modalCloseButton heroBGButton"
        >
          {t("contactUs.close")}
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactUsModal;
