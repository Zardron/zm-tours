import { useState } from "react";
import Header from "./components/Header";
import "animate.css";
import SearchMenu from "./components/SearchMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

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

  const props = { darkMode, setDarkMode };

  return (
    <div className="bg-white dark:bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home {...props} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
