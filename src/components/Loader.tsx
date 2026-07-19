import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        return next >= 100 ? 100 : next;
      });
    }, 200);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(onFinish, 600);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] grid place-items-center"
        style={{
          background: "var(--overlay-bg)",
          color: "#f1f1f1",
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center">
          <div className="label-cap text-[#ff5a00]">// booting</div>
          <div className="font-display text-6xl sm:text-8xl mt-4 lcd-flicker">
            ARYAN//GURUDATH
          </div>
          <div className="mt-6 w-64 h-[2px] bg-[#f1f1f1]/20 mx-auto overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-[#ff5a00] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
