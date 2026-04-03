import { useTheme } from "@/context/ThemeContext";
import DefaultLayout from "./layout/DefaultLayout";
import CyberpunkLayout from "./layout/CyberpunkLayout";

export const siteTitle = "Visakh Vijay O";

export default function Layout({ children }) {
  const { mode } = useTheme();

  if (mode === "cyberpunk") {
    return <CyberpunkLayout>{children}</CyberpunkLayout>;
  }

  return <DefaultLayout>{children}</DefaultLayout>;
}
