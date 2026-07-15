import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "../ui/CustomCursor";

export function Layout() {
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
    <div className="relative min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
