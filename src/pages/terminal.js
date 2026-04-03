import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@/context/ThemeContext";

// /terminal route — switches to cyberpunk mode and redirects to home
export default function TerminalPage() {
  const router = useRouter();
  const { setMode } = useTheme();

  useEffect(() => {
    setMode("cyberpunk");
    router.replace("/");
  }, [setMode, router]);

  return null;
}
