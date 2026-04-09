import { useTheme } from "@/context/ThemeContext";
import { FiSun } from "react-icons/fi";

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
      title={mode === "default" ? "enter_wired()" : "exit_wired()"}
    >
      {mode === "default" ? (
        <img
          src="/images/running.gif"
          alt="running"
          style={{ width: "22px", height: "22px", objectFit: "contain" }}
          className="opacity-60 group-hover:opacity-100 transition-opacity duration-300 retro-glitch"
        />
      ) : (
        <span 
          className="font-mono text-xs uppercase transition-colors sm:text-sm hover:opacity-80" 
          style={{ color: "var(--accent-pink)", letterSpacing: "0.1em", fontWeight: "bold" }}
        >
          [ DISCONNECT ]
        </span>
      )}
    </button>
  );
}
