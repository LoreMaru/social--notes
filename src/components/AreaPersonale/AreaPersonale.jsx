import { useState, useReducer } from "react";
import { POST, GET } from "../../utils/api";
import Modal from "../Modal/Modal";
import "./index.css";

const AreaPersonale = () => {
  const [iscrizione, setIscrizione] = useState(false);
  const [logIn, setLogIn] = useState(false);
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
      usernameData.includes(
        localStorage.getItem("username") || state.usernameInput
      ) &
      passwordData.includes(
        localStorage.getItem("password") || state.passwordInput
      )
    ) {
      localStorage.setItem("username", state.usernameInput);
      localStorage.setItem("password", state.passwordInput);
      setModalContent("Accesso Effettuato");
    } else {
      setModalContent("Dati errati, accesso non consentito");
    }
    setLogIn(false);
  };

  const onSetUserData = (e) => {
    e.preventDefault();
    localStorage.setItem("username", state.usernameInput);
    localStorage.setItem("password", state.passwordInput);
    localStorage.setItem("avatar", state.avatarInput);
    setModalContent("Iscrizione Effettuata");

    POST("users", {
      username: state.usernameInput,
      password: state.passwordInput,
      avatar: state.avatarInput,
    });

    setIscrizione(false);
  };

  const logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("avatar");
    setLogIn(false);
    setIscrizione(false);
    window.location.reload();
  };

  //REDUCER
  const initialFormState = {
    usernameInput: "",
    passwordInput: "",
    avatarInput: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "update":
        return {
          ...state,
          [action.key]: action.value,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialFormState);

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
            value={state.usernameInput}
            onChange={(e) =>
              dispatch({
                type: "update",
                value: e.target.value,
                key: "usernameInput",
              })
            }
            type="text"
            placeholder="Nickname"
            required
          />
          <input
            value={state.passwordInput}
            onChange={(e) =>
              dispatch({
                type: "update",
                value: e.target.value,
                key: "passwordInput",
              })
            }
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
            value={state.usernameInput}
            onChange={(e) =>
              dispatch({
                type: "update",
                value: e.target.value,
                key: "usernameInput",
              })
            }
            type="text"
            placeholder="Nickname"
            required
          />
          <input
            value={state.avatarInput}
            onChange={(e) =>
              dispatch({
                type: "update",
                value: e.target.value,
                key: "avatarInput",
              })
            }
            type="text"
            placeholder="URL avatar"
          />
          <input
            value={state.passwordInput}
            onChange={(e) =>
              dispatch({
                type: "update",
                value: e.target.value,
                key: "passwordInput",
              })
            }
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
