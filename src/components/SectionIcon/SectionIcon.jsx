import "./index.css";

const SectionIcon = ({ IconIMGlink, altText, onHandleClick = () => {} }) => {
  return (
    <img
      src={IconIMGlink}
      alt={altText}
      onClick={onHandleClick}
      className="SectionIcon"
    />
  );
};

export default SectionIcon;
