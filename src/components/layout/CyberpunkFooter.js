import { RiNextjsLine } from "react-icons/ri";

export default function CyberpunkFooter() {
  return (
    <footer
      className="w-full py-6 mt-8 relative z-20 backdrop-blur-lg"
      style={{
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-secondary)",
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <span className="flex justify-center items-center text-sm font-mono">
          [ made with fun using <RiNextjsLine className="mx-1" /> ]
        </span>
      </div>
    </footer>
  );
}
