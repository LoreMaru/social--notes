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
        messageList
          .sort((a, b) => (a.order < b.order ? 1 : b.order < a.order ? -1 : 0))
          .map((message) => (
            <MessageCard
              isRenderedList={isRenderedList}
              setRenderedList={setRenderedList}
              textContent={message}
              getcomment={getcomment}
              key={message.id}
            />
          ))
      ) : (
        <img src="https://autodistribuzionetorino.it/Content/img/ajax-loader.gif" />
      )}
    </div>
  );
};

export default MessageCardList;
