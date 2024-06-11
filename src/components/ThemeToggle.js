import React, { useEffect, useState } from "react";
import localforage from "localforage";
import "../styles.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localforage.getItem("theme").then((value) => {
      if (value === "dark") {
        setDarkMode(true);
        document.body.classList.add("dark-mode");
      }
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
    localforage.setItem("theme", newTheme);
  };

  return (
    <div className="theme-toggle-container">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={darkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="checkbox" className="theme-toggle-label"></label>
    </div>
  );
};

export default ThemeToggle;
