import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle hairline w-9 h-9 grid place-items-center bg-transparent cursor-pointer"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon size={14} className="text-[var(--text-primary)]" />
      ) : (
        <Sun size={14} className="text-[var(--text-primary)]" />
      )}
    </button>
  );
}
