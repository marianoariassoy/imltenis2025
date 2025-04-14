"use client";
import { Moon } from "@/lib/icons";
import { useEffect, useState } from "react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document
        .querySelector("meta[name=theme-color]")
        ?.setAttribute("content", "#f3f3f3");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document
        .querySelector("meta[name=theme-color]")
        ?.setAttribute("content", "#252525");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document
        .querySelector("meta[name=theme-color]")
        ?.setAttribute("content", "#f3f3f3");
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
