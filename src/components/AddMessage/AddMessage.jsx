import { useState } from "react";
import { POST } from "../../utils/api.js";
import "./index.css";

const AddMessage = ({ isRenderedList, setRenderedList }) => {
  const [messageText, setMessageText] = useState("");
  const [messageIMG, setMessageIMG] = useState("");
  const [sender, setSender] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (messageText) {
      POST("messages", {
        text: messageText,
        sender: localStorage.getItem("username") || "Anonimo",
        IMG: messageIMG,
        date: new Date().toLocaleDateString(),
        like: 0,
        dislike: 0,
      }).then(() => {
        setMessageText("");
        setSender("");
        setMessageIMG("");
        setRenderedList(!isRenderedList);
      });
    }
  };

  return (
    <div className="AddMessage">
      <form className="AddMessage__form" onSubmit={onFormSubmit}>
        <input
          className="AddMessage__form--inputMSG"
          type="text"
          placeholder="Scrivi qualcosa"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          required
        />
        <input
          className="AddMessage__form--inputIMG"
          type="text"
          placeholder="🖼️ Aggiungi Immagine (URL)"
          value={messageIMG}
          onChange={(e) => setMessageIMG(e.target.value)}
        />
        <button className="AddMessage__form--button">Invia</button>
      </form>
    </div>
  );
};

export default AddMessage;
