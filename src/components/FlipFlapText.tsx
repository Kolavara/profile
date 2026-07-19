import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["//BUILDER", "//INNOVATOR", "//TECHIE"];

export default function FlipFlapText() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setWordIndex((prev) => (prev + 1) % WORDS.length),
      3000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="text-[#ff5a00] inline-flex items-center leading-none align-middle overflow-hidden"
      style={{
        fontFamily:
          "'SF Mono', 'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Consolas', monospace",
        fontWeight: 700,
        height: "1.15em",
        minWidth: "7.2em", // width of longest word (//INNOVATOR = 11 chars)
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={wordIndex}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {WORDS[wordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
