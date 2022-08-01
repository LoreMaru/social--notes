import "./index.css";
import wellcomIMG from "../../asset/humaaans.png";

const WelcomeMSG = () => {
  return (
    <div className="WelcomeMSG">
      <img src={wellcomIMG} className="WelcomeMSG__IMG" />
      <h1>Benvenuto su Social Notes!</h1>
      <h2>Iscriviti o accedi per postare</h2>
      <h3>
        Clicca sulle icone in alto per leggere i messagi o vedere gli utenti
      </h3>
    </div>
  );
};
export default WelcomeMSG;
