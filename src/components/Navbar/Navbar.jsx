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
      <SectionIcon
        IconIMGlink={"https://twemoji.maxcdn.com/v/latest/svg/1f465.svg"}
        altText={"Utenti"}
        onHandleClick={() => setMainModalContent(<FriendCardList />)}
      />
      <SectionIcon
        IconIMGlink={"https://twemoji.maxcdn.com/v/latest/svg/2709.svg"}
        altText={"Messaggi"}
        onHandleClick={() => setMainModalContent(<MessageCardList />)}
      />
      <SectionIcon
        IconIMGlink={"https://twemoji.maxcdn.com/v/latest/svg/1f50f.svg"}
        altText={"Area Personale"}
        onHandleClick={() => setMainModalContent(<AreaPersonale />)}
      />
      <div className="Navbar__actualUser">
        <p className="Navbar__actualUser--name">
          {localStorage.getItem("username")}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
