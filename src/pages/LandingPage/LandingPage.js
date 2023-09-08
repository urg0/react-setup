import { DarkModeContext } from "@contexts/DarkModeContext";
import React, { useContext } from "react";

const LandingPage = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "dark-mode-container" : "light-mode-container"}>
      LandingPage
    </div>
  );
};

export default LandingPage;
