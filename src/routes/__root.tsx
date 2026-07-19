import { useEffect } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ThemeProvider } from "@/hooks/useTheme";
import Lenis from "lenis";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Scroll anchor for top */}
      <div id="top" />

      <Outlet />
    </ThemeProvider>
  );
}
