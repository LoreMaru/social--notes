import { useState, useEffect } from "react";
import { DELETE, PATCH } from "../../utils/api";
import Modal from "../Modal/Modal";
import CommentCard from "../CommentCard";
import AddComment from "../AddComment/AddComment";
import "./index.css";

const MessageCard = ({
  textContent,
  isRenderedList,
  setRenderedList,
  getcomment,
}) => {
  const [getModalContent, setModalContent] = useState(false);

  const deleteMessage = () => {
    if (localStorage.getItem("username") == textContent.sender) {
      DELETE("messages", textContent.id).then(() => {
        setRenderedList(!isRenderedList);
      });
    } else {
      setModalContent("non hai i permessi per cancellare questo messaggio");
    }
  };

  let likeValue = textContent.like;

  const likePost = (postId) => {
    likeValue += 1;
    PATCH("messages/", postId, { like: likeValue }).then(() => {
      setRenderedList(!isRenderedList);
    });
  };

  let dislikeValue = textContent.dislike;

  const dislikePost = (postId) => {
    dislikeValue += 1;
    PATCH("messages/", postId, { dislike: dislikeValue }).then(() => {
      setRenderedList(!isRenderedList);
    });
  };

  useEffect(() => {
    setTimeout(function () {
      setModalContent(false);
    }, 2500);
  });

  return (
    <div className="MessageCard">
      <div className="MessageCard__content">
        <button className="MessageCard__delete" onClick={() => deleteMessage()}>
          X
        </button>
        <img src={textContent.IMG} />
        <p className="MessageCard__text">{textContent.text}</p>
        <div className="MessageCard__info">
          <p className="MessageCard__info--sender">{textContent.sender}</p>
          <p className="MessageCard__info--date">{textContent.date}</p>
        </div>
        <div className="MessageCard__reaction">
          <h2
            onClick={() => likePost(textContent.id)}
            className="MessageCard__reaction--emote"
          >
            👍️
          </h2>
          <p> {textContent.like}</p>
          <h2
            onClick={() => dislikePost(textContent.id)}
            className="MessageCard__reaction--emote"
          >
            👎️
          </h2>
          <p> {textContent.dislike}</p>
          <p>{}</p>
        </div>
      </div>
      <Modal modalContent={getModalContent} />
      {getcomment.map(
        (comment) =>
          comment.messageId == textContent.id && (
            <CommentCard
              getcomment={comment}
              key={comment.id}
              isRenderedList={isRenderedList}
              setRenderedList={setRenderedList}
            />
          )
      )}
      <AddComment
        setRenderedList={setRenderedList}
        isRenderedList={isRenderedList}
        messageTextId={textContent.id}
        textContent={textContent}
        setModalContent={setModalContent}
      />
    </div>
  );
};

export default MessageCard;
