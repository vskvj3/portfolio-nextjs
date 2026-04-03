import { personalInfo } from "@/data/portfolioData";

export default function DefaultFooter() {
  return (
    <footer
      className="py-8 mt-16 border-t"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
        color: "var(--text-tertiary)",
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
