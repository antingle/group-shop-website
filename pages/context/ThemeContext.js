import React, {
  createContext,
  useState,
  useLayoutEffect,
  useContext,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Checks system theme before loading page to assign appropriate theme
  useLayoutEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    console.log(darkThemeMq);
    if (darkThemeMq.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const colors =
    theme == "light"
      ? {
          // light mode
          primary: "#2DDB74",
          foreground: "#fff",
          background: "#edf7f6",
          opposite: "#2c2c2e",
          light: "#edf7f6",
          dark: "#2c2c2e",
          caption: "#636366",
          caption2: "#ababab",
        }
      : {
          // dark mode
          primary: "#2DDB74",
          foreground: "#2c2c2e",
          background: "#1c1c1e",
          opposite: "#edf7f6",
          light: "#edf7f6",
          dark: "#2c2c2e",
          caption: "#ababab",
          caption2: "#636366",
        };

  return (
    <ThemeContext.Provider value={{ colors, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within the ThemeProvider");
  }

  return context;
}
