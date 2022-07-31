import { DELETE } from "../../utils/api";
import "./index.css";

const CommentCard = ({ getcomment, isRenderedList, setRenderedList }) => {
  const deleteComments = () => {
    if (localStorage.getItem("username")) {
      DELETE("comments", getcomment.id).then(() => {
        setRenderedList(!isRenderedList);
      });
    } else {
      alert("non hai i permessi per cancellare questo commento");
    }
  };

  return (
    <div className="CommentCard">
      <hr></hr>

      <p className="MessageCard__text">{getcomment.text}</p>
      <div className="MessageCard__info">
        <p onClick={deleteComments}>X</p>
        <p className="MessageCard__info--sender">{getcomment.sender}</p>
        <p className="MessageCard__info--date">{getcomment.date}</p>
      </div>
    </div>
  );
};

export default CommentCard;
