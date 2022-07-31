import { useState, useEffect } from "react";
import "./index.css";

const FriendCard = ({ friendData }) => {
  const { avatar, username, id } = friendData;

  const [quoteList, setquoteList] = useState([]);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => setquoteList(quote));
  }, []);

  return (
    <div className="FriendCard">
      <img className="FriendCard__avatar" src={avatar} alt={username} />
      <p className="FriendCard__name">{username}</p>
      <p>Favorite quote:</p>
      <p>{quoteList.content}</p>
    </div>
  );
};

export default FriendCard;
