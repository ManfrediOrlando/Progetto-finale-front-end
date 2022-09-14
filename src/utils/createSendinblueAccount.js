import i18next from "i18next";

function createSendinblueAccount(
  listId,
  email = "",
  data = { firstName: "", lastName: "", note: "" }
) {
  const { firstName, lastName, note } = data;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key":process.env.REACT_APP_SENDBLUE_KEY,
    },
    body: JSON.stringify({
      email: email,
      attributes: {
        NOME: firstName,
        COGNOME: lastName,
        NOTE: note,
      },
      listIds: listId,
      updateEnabled: false,
      emailBlacklisted: false,
      smsBlacklisted: false,
    }),
  };

  fetch("https://api.sendinblue.com/v3/contacts", options)
    .then((response) => response.json())
    .then((response) => {if(response.message ==="Contact already exist"){return alert(i18next.t("fetchAlert"))}})
    .catch((err) => console.error(err));
}
export default createSendinblueAccount;
