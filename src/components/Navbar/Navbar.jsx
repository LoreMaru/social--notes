import { Icon } from "@iconify/react";
import Logo from "../Logo/Logo";
import SectionIcon from "../SectionIcon/SectionIcon";
import FriendCardList from "../FriendCardList/FriendCardList";
import MessageCardList from "../MessageCardList/MessageCardList";
import AreaPersonale from "../AreaPersonale";
import "./index.css";

const Navbar = ({ setMainModalContent }) => {
  return (
    <div className="Navbar">
      <Logo />
      <span className="Navbar__icon">
        <SectionIcon
          IconIMGlink={"carbon:user-multiple"}
          altText={"Utenti"}
          onHandleClick={() => setMainModalContent(<FriendCardList />)}
        />
        <SectionIcon
          IconIMGlink={"ic:outline-local-post-office"}
          altText={"Messaggi"}
          onHandleClick={() => setMainModalContent(<MessageCardList />)}
        />
        <SectionIcon
          IconIMGlink={"bi:shield-lock"}
          altText={"Area Personale"}
          onHandleClick={() => setMainModalContent(<AreaPersonale />)}
        />
      </span>
      <span>
        <div className="Navbar__actualUser">
          <p className="Navbar__actualUser--name">
            {localStorage.getItem("username")}
          </p>
        </div>
      </span>
    </div>
  );
};

// IconIMGlink={"https://twemoji.maxcdn.com/v/latest/svg/1f465.svg"}
// IconIMGlink={"https://twemoji.maxcdn.com/v/latest/svg/2709.svg"}
// IconIMGlink={"https://twemoji.maxcdn.com/v/latest/svg/1f50f.svg"}

export default Navbar;
