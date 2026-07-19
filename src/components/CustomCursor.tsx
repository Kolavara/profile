import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: "translate(-100px, -100px)",
        transition: "transform 0.08s ease-out",
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: 8,
          height: 8,
          background: "#ff5a00",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 6px rgba(255, 90, 0, 0.5)",
        }}
      />
    </div>
  );
}
