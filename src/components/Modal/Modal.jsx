import "./index.css";

const Modal = ({ modalContent, CSSclass }) => {
  return <div className={CSSclass}>{modalContent}</div>;
};

export default Modal;
