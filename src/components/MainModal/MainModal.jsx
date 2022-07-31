import WelcomeMSG from "../WelcomeMSG";
import "./index.css";

const MainModal = ({ MainModalContent }) => {
  return (
    <div className="MainModal">
      {MainModalContent == ""
        ? (MainModalContent = <WelcomeMSG />)
        : MainModalContent}
    </div>
  );
};

export default MainModal;

/*{MainModalContent ? { MainModalContent } : <WelcomeMSG />}*/
