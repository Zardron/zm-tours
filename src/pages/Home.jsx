import React from "react";
import SearchMenu from "../components/SearchMenu";
import Header from "../components/Header";

const Home = ({ darkMode, setDarkMode }) => {
  const props = { darkMode, setDarkMode };
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchMenu {...props} />
      <div
        className={`${
          darkMode === "light"
            ? "popular_destination"
            : "popular_destination-dark"
        } h-screen dark:bg-black`}
      >
        asd
      </div>
    </>
  );
};

export default Home;
