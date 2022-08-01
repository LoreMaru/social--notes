import { useState, useEffect } from "react";
import FriendCard from "../FriendCard";
import { GET } from "../../utils/api";
import "./index.css";

const FriendCardList = () => {
  const [friendList, setFriendList] = useState([]);
  const [isRenderedList, setRenderedList] = useState(false);

  useEffect(() => {
    GET("users").then((data) => setFriendList(data));
  }, [isRenderedList]);

  return (
    <div className="FriendCardList">
      {friendList.length ? (
        friendList.map((friend) => (
          <FriendCard
            setRenderedList={setRenderedList}
            friendData={friend}
            key={friend.id}
          />
        ))
      ) : (
        <img src="https://autodistribuzionetorino.it/Content/img/ajax-loader.gif" />
      )}
    </div>
  );
};

export default FriendCardList;
