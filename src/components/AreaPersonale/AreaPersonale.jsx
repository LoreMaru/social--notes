import { useState } from "react";
import { POST, GET } from "../../utils/api";
import Modal from "../Modal/Modal";
import "./index.css";

const AreaPersonale = () => {
  const [iscrizione, setIscrizione] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [avatarInput, setAvatarInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [getModalContent, setModalContent] = useState(false);

  const openSingUp = () => {
    setIscrizione(true);
    setLogIn(false);
    setModalContent("");
  };

  const openLogIn = () => {
    setLogIn(true);
    setIscrizione(false);
    setModalContent("");
  };

  const onGetUserData = (e) => {
    e.preventDefault();
    GET("users").then((data) => setUserData(data));

    let usernameData = userData.map((item) => item.username);
    let passwordData = userData.map((item) => item.password);

    if (
      usernameData.includes(localStorage.getItem("username") || usernameInput) &
      passwordData.includes(localStorage.getItem("password") || passwordInput)
    ) {
      localStorage.setItem("username", usernameInput);
      localStorage.setItem("password", passwordInput);
      setModalContent("Accesso Effettuato");
    } else {
      setModalContent("Dati errati, accesso non consentito");
    }
    setLogIn(false);
  };

  const onSetUserData = (e) => {
    e.preventDefault();
    localStorage.setItem("username", usernameInput);
    localStorage.setItem("password", passwordInput);
    localStorage.setItem("avatar", avatarInput);
    setModalContent("Iscrizione Effettuata");

    POST("users", {
      username: usernameInput,
      password: passwordInput,
      avatar: avatarInput,
    }).then(() => {
      setUsernameInput("");
      setPasswordInput("");
      setAvatarInput("");
    });

    setIscrizione(false);
  };

  const logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("avatar");
    setLogIn(false);
    setIscrizione(false);
    // setModalContent("LogOut Effettuato");
    window.location.reload();
  };

  return (
    <div className="AreaPersonale">
      <button className="AreaPersonale__accediBTN" onClick={openLogIn}>
        Accedi
      </button>

      <button className="AreaPersonale__iscrivitiBTN" onClick={openSingUp}>
        Iscriviti
      </button>

      <button
        className="AreaPersonale__logOutBTN"
        onClick={logOut}
        disabled={!localStorage.getItem("username")}
      >
        LogOut
      </button>
      <div style={{ display: logIn ? "block" : "none" }}>
        <form className="AreaPersonale__form--accedi" onSubmit={onGetUserData}>
          <input
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            type="text"
            placeholder="Nickname"
            required
          />
          <input
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button>Invia</button>
        </form>
      </div>

      <div style={{ display: iscrizione ? "block" : "none" }}>
        <form
          className="AreaPersonale__form--iscriviti"
          onSubmit={onSetUserData}
        >
          <input
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            type="text"
            placeholder="Nickname"
            required
          />
          <input
            value={avatarInput}
            onChange={(e) => setAvatarInput(e.target.value)}
            type="text"
            placeholder="URL avatar"
          />
          <input
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button>Invia</button>
        </form>
      </div>
      <Modal modalContent={getModalContent} />
    </div>
  );
};

export default AreaPersonale;
