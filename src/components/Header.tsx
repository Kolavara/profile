import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "whoami", href: "#top" },
  { label: "skills", href: "#skills" },
  { label: "work", href: "#work" },
  { label: "contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 hairline-b"
      style={{ background: "var(--header-bg)", backdropFilter: "blur(12px)" }}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 py-3">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#top");
          }}
          className="flex items-center gap-2 min-w-0 cursor-pointer"
        >
          <span className="grid place-items-center w-8 h-8 hairline bg-[var(--text-primary)] text-[#ff5a00] font-display text-xl leading-none">
            A
          </span>
          <span className="font-display text-2xl leading-none" style={{ color: "var(--text-primary)" }}>
            aryan.gurudath / portfolio_v1
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="label-cap hover:text-[#ff5a00] transition-colors cursor-pointer"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 justify-end">
          <a
            href="https://github.com/Kolavara"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost hidden md:inline-flex"
          >
            github ↗
          </a>
          <a
            href="mailto:aryangurudath3@gmail.com"
            className="btn-orange"
          >
            Contact →
          </a>
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden hairline w-9 h-9 grid place-items-center cursor-pointer"
            style={{ background: "transparent" }}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block w-4 h-[1px] bg-[var(--text-primary)] relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-[1px] before:bg-[var(--text-primary)] after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-4 after:h-[1px] after:bg-[var(--text-primary)]"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden hairline-t"
            style={{ background: "var(--bg-primary)" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="label-cap py-2 hover:text-[#ff5a00] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/Kolavara"
                target="_blank"
                rel="noreferrer"
                className="label-cap py-2 hover:text-[#ff5a00] transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                github ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
