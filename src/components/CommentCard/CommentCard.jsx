import { DELETE } from "../../utils/api";
import "./index.css";

const CommentCard = ({
  getcomment,
  isRenderedList,
  setRenderedList,
  CSSclass,
}) => {
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

      <p className="CommentCard__text">{getcomment.text}</p>
      <div className="CommentCard__info">
        <p onClick={deleteComments}>X</p>
        <p className="CommentCard__info--sender">{getcomment.sender}</p>
        <p className="CommentCard__info--date">{getcomment.date}</p>
      </div>
    </div>
  );
};

export default CommentCard;
