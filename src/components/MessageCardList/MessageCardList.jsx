import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import MessageCard from "../MessageCard/MessageCard";
import AddMessage from "../AddMessage";
import CommentCard from "../CommentCard";
import "./index.css";

const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);
  const [isRenderedList, setRenderedList] = useState(false);
  const [getcomment, setComment] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessageList(data));
  }, [isRenderedList]);

  useEffect(() => {
    GET("comments")
      // .then((data) => setComment(data))
      .then((data) => {
        setComment(data);
      });
  }, [isRenderedList]);

  // useEffect(() => {
  //   GET("users").then((data) => setFriendList(data));
  // }, [isRenderedList]);

  // const printAvatar = () => {
  //   let messageSenderList = messageList.map(
  //     (item, index, array) => item.sender
  //   );
  //   let userName = friendList.map((item, index, array) => item.username);

  //   if (messageList.sender == friendList.username) {
  //     return friendList.avatar;
  //   }
  // };

  // const printAvatar = () => {
  //   messageList.filter((message) => {
  //     friendList.map((item) => {
  //       message.sender == item.username;
  //     });
  //     item.avatar;
  //   });
  // };

  // printAvatar={friendList.map((item) =>
  //               message.sender == item.username ? item.avatar : "/"
  //             )}

  return (
    <div className="MessageCardList">
      <AddMessage
        isRenderedList={isRenderedList}
        setRenderedList={setRenderedList}
      />
      {messageList.length ? (
        messageList.map((message) => (
          <MessageCard
            isRenderedList={isRenderedList}
            setRenderedList={setRenderedList}
            textContent={message}
            getcomment={getcomment}
            key={message.id}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
