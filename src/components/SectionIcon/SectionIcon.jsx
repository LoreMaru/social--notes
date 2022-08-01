import { Icon } from "@iconify/react";
import "./index.css";

const SectionIcon = ({ IconIMGlink, altText, onHandleClick = () => {} }) => {
  return (
    <Icon icon={IconIMGlink} onClick={onHandleClick} className="SectionIcon" />
  );
};

// <img
//   src={IconIMGlink}
//   alt={altText}
//   onClick={onHandleClick}
//   className="SectionIcon"
// />
export default SectionIcon;
