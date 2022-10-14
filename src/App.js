import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextForm from "./components/TextFrom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#072134";
      showAlert("Success", " DarkMode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Success ", " LightMode has been enabled");
    }
  };

  return (
    <div className="container">
      <Navbar
        title="TextUtil"
        aboutText="About"
        toggelMode={toggelMode}
        mode={mode}
      />
      <Alert alert={alert} />

      <TextForm
        showAlert={showAlert}
        heading="Enter the text analyze below"
        mode={mode}
      />

      {/* <About /> */}
    </div>
  );
}

export default App;
