import { useState } from "react";
import Header from "./components/Header";
import "animate.css";

const App = () => {
  const [darkMode, setDarkMode] = useState("light");
  const element = document.documentElement;

  switch (darkMode) {
    case "dark":
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      break;

    case "light":
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      break;

    default:
      element.classList.add("light");
      break;
  }

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <p>asd</p>
    </>
  );
};

export default App;
