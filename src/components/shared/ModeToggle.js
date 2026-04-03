import { useTheme } from "@/context/ThemeContext";
import { FiTerminal, FiSun } from "react-icons/fi";

export default function ModeToggle() {
  const { mode, toggleMode } = useTheme();

  const handleToggle = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty('--toggle-x', `${x}px`);
    document.documentElement.style.setProperty('--toggle-y', `${y}px`);
    toggleMode();
  };

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 rounded-lg transition-all duration-300 group"
      aria-label={mode === "default" ? "Switch to cyberpunk mode" : "Switch to default mode"}
      title={mode === "default" ? "Enter the matrix" : "Return to light"}
    >
      {mode === "default" ? (
        <FiTerminal
          size={18}
          className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
        />
      ) : (
        <FiSun
          size={18}
          className="text-cyan-400/60 group-hover:text-cyan-300 transition-colors duration-300"
        />
      )}
    </button>
  );
}
