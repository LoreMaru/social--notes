import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import MessageCard from "../MessageCard/MessageCard";
import AddMessage from "../AddMessage";
import "./index.css";

const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);
  const [isRenderedList, setRenderedList] = useState(false);
  const [getcomment, setComment] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessageList(data.reverse()));
  }, [isRenderedList]);

  useEffect(() => {
    GET("comments").then((data) => {
      setComment(data);
    });
  }, [isRenderedList]);

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
