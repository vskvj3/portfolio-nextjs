import { useTheme } from "@/context/ThemeContext";
import DefaultLayout from "./layout/DefaultLayout";
import CyberpunkLayout from "./layout/CyberpunkLayout";

export const siteTitle = "Visakh Vijay O";

export default function Layout({ children }) {
  const { mode } = useTheme();

  return (
    <div key={mode} className="theme-transition-wrapper min-h-screen">
      {mode === "cyberpunk" ? (
        <CyberpunkLayout>{children}</CyberpunkLayout>
      ) : (
        <DefaultLayout>{children}</DefaultLayout>
      )}
    </div>
  );
}
