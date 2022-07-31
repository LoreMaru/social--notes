import { useState } from "react";
import { POST } from "../../utils/api.js";
import "./index.css";

const AddComment = ({ isRenderedList, setRenderedList, messageTextId }) => {
  const [commentText, setCommentText] = useState("");
  const [sender, setSender] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (commentText) {
      POST("comments", {
        text: commentText,
        sender: localStorage.getItem("username") || "Anonimo",
        messageId: messageTextId,
        date: new Date().toLocaleDateString(),
      }).then(() => {
        setCommentText("");
        setSender("");
        setRenderedList(!isRenderedList);
      });
    }
  };

  return (
    <div className="AddComment">
      <hr></hr>
      <form className="AddComment__form" onSubmit={onFormSubmit}>
        <input
          className="AddComment__form--inputMSG"
          type="text"
          placeholder="Commenta il post"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        />
        <button className="AddComment__form--button">Invia</button>
      </form>
    </div>
  );
};

export default AddComment;
