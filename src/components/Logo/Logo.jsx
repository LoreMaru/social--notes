import { Icon } from "@iconify/react";
import spiralnotepad from "../../asset/spiralnotepad.svg";
import "./index.css";

const Logo = () => {
  return (
    <span className="Logo">
      <img
        src="https://twemoji.maxcdn.com/v/latest/svg/1f58a.svg"
        className="Logo__penIcon"
      />
      <h2>Social Notes</h2>
      <img src={spiralnotepad} />
    </span>
  );
};

export default Logo;
