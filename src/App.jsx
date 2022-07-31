import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MainModal from "./components/MainModal";
import { Icon } from "@iconify/react";
import "./App.css";

function App() {
  const [getMainModalContent, setMainModalContent] = useState("");

  return (
    <div className="App">
      <Navbar setMainModalContent={setMainModalContent} />
      <MainModal MainModalContent={getMainModalContent} />
    </div>
  );
}

export default App;
