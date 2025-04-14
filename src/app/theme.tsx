"use client";
import { Moon } from "@/lib/icons";
import { useEffect, useState } from "react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <button
      className={`cursor-pointer hover:text-primary hover:opacity-100 transition-opacity ${
        darkMode ? "opacity-40" : "opacity-100"
      }`}
      aria-label="Moon"
      onClick={() => setDarkMode(!darkMode)}
    >
      <Moon />
    </button>
  );
};

export default Theme;
