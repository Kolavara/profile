import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  connections: number[];
}

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -999, y: -999 });
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    function resize() {
      const rect = container!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initNodes() {
      const count = 40;
      const nodes: Node[] = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 1.5 + Math.random() * 3.5,
          opacity: 0.3 + Math.random() * 0.7,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
        });
      }
      // Build connections (proximity-based)
      for (let i = 0; i < count; i++) {
        const conns: number[] = [];
        for (let j = 0; j < count; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // Connect if within a certain distance, with a max of ~6 connections
          if (dist < Math.min(w, h) * 0.35 && conns.length < 5) {
            conns.push(j);
          }
        }
        nodes[i].connections = conns;
      }
      nodesRef.current = nodes;
    }

    function draw(time: number) {
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;

      // Update nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges
        if (node.x < -20) node.x = w + 20;
        if (node.x > w + 20) node.x = -20;
        if (node.y < -20) node.y = h + 20;
        if (node.y > h + 20) node.y = -20;
      }

      // Periodically rebuild connections (every ~5s)
      if (Math.floor(time / 5000) > Math.floor((time - 16) / 5000)) {
        for (let i = 0; i < nodes.length; i++) {
          const conns: number[] = [];
          for (let j = 0; j < nodes.length; j++) {
            if (i === j) continue;
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < Math.min(w, h) * 0.35 && conns.length < 5) {
              conns.push(j);
            }
          }
          nodes[i].connections = conns;
        }
      }

      // Draw connections first (behind nodes)
      for (const node of nodes) {
        for (const connIdx of node.connections) {
          const target = nodes[connIdx];
          if (!target) continue;
          const dx = node.x - target.x;
          const dy = node.y - target.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.min(w, h) * 0.35;
          const alpha = Math.max(0, 1 - dist / maxDist) * 0.25;

          if (alpha > 0.01) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(255, 90, 0, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw glowing connections to mouse
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx > 0 && my > 0) {
        for (const node of nodes) {
          const dx = node.x - mx;
          const dy = node.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.6;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(255, 90, 0, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(time * 0.001 + node.pulsePhase) * 0.3 + 0.7;
        const r = node.radius * (0.8 + pulse * 0.4);
        const alpha = node.opacity * (0.6 + pulse * 0.4);

        // Glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 6);
        gradient.addColorStop(0, `rgba(255, 90, 0, ${alpha * 0.3})`);
        gradient.addColorStop(1, "rgba(255, 90, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 90, 0, ${alpha})`;
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -999, y: -999 };
    }

    function onScroll() {
      const offset = window.scrollY * -0.08;
      canvas!.style.transform = `translateY(${offset}px)`;
    }

    // Apply initial parallax
    onScroll();

    resize();
    initNodes();
    animId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,90,0,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  );
}
