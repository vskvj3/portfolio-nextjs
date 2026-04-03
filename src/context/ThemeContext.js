import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  mode: "default",
  toggleMode: () => {},
  setMode: () => {},
});

export function ThemeProvider({ children }) {
  const [mode, setModeState] = useState("default");
  const [mounted, setMounted] = useState(false);

  // Read from localStorage on mount (SSR-safe)
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-mode");
    if (stored === "cyberpunk" || stored === "default") {
      setModeState(stored);
    }
    setMounted(true);
  }, []);

  // Persist mode changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("portfolio-mode", mode);
      // Update data attribute on html element for CSS theming
      document.documentElement.setAttribute("data-mode", mode);
    }
  }, [mode, mounted]);

  const toggleMode = () => {
    setModeState((prev) => (prev === "default" ? "cyberpunk" : "default"));
  };

  const setMode = (newMode) => {
    if (newMode === "default" || newMode === "cyberpunk") {
      setModeState(newMode);
    }
  };

  // Prevent flash of wrong theme during SSR hydration
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeContext;
