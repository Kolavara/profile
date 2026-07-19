import { useState, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { personalInfo, skills, projects, commitLog } from "@/lib/data";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import MarqueeTicker from "@/components/MarqueeTicker";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import NetworkGraph from "@/components/NetworkGraph";
import FlipFlapText from "@/components/FlipFlapText";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [loading, setLoading] = useState(true);

  const handleFinishLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onFinish={handleFinishLoading} />}

      <CustomCursor />

      <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
        <Header />

        <main>
          {/* ─── HERO SECTION ─── */}
          <section id="top" className="relative hairline-b">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Hero Text */}
              <motion.div
                className="lg:col-span-8 hairline-r p-6 sm:p-10 lg:p-14 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={loading ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#ff5a00] pulse-chip" />
                  <span className="label-cap" style={{ color: "var(--text-secondary)" }}>
                    $ whoami · Bengaluru, IN
                  </span>
                </div>

                <h1 className="display-hl mt-6 text-[18vw] sm:text-[14vw] lg:text-[10.5vw] leading-[0.82] lcd-flicker" style={{ color: "var(--text-primary)" }}>
                  ARYAN<br />
                  <span className="text-[0.55em] leading-[1]"><FlipFlapText /></span>
                </h1>

                <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                  <span className="label-cap block mb-2" style={{ color: "var(--text-secondary)" }}>
                    // bio
                  </span>
                  {personalInfo.shortBio}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#work" className="btn-orange">
                    Selected Work →
                  </a>
                  <a href="#contact" className="btn-ghost">
                    Get in touch
                  </a>
                </div>
              </motion.div>

              {/* Hero Graphic + Stats */}
              <motion.div
                className="lg:col-span-4 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={loading ? {} : { opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Network Graph Canvas */}
                <div className="absolute inset-0">
                  <NetworkGraph />
                </div>

                {/* Chrome texture overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
                  }}
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 label-cap px-2 py-1 hairline" style={{ background: "var(--bg-primary)" }}>
                  // agent.graph_v3
                </div>

                {/* Stats card */}
                <div
                  className="absolute bottom-4 left-4 right-4 hairline p-4 flex items-center justify-between"
                  style={{ background: "var(--bg-primary)" }}
                >
                  <div>
                    <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
                      Shipped projects
                    </div>
                    <div className="font-display text-5xl leading-none mt-1" style={{ color: "var(--text-primary)" }}>
                      {String(personalInfo.shippedProjects).padStart(2, "0")}
                    </div>
                  </div>
                  <a href="#work" className="arrow-tile group cursor-pointer">
                    <span className="arrow inline-block font-display text-4xl" style={{ color: "var(--text-primary)" }}>
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 hairline-t">
              {[
                { label: "Role", value: "AI / ML", sub: "Engineer" },
                { label: "Location", value: "BLR", sub: "Bengaluru, IN" },
                { label: "Education", value: "CSE", sub: "B.E. · 2024–2028" },
                { label: "Status", value: "OPEN", sub: "for internships" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-5 sm:p-6 relative"
                  style={{
                    borderRight: i < 3 ? "1px solid var(--border-color)" : undefined,
                    borderBottom: "1px solid var(--border-color)",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={loading ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                >
                  <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
                    {stat.label}
                  </div>
                  <div className="font-display text-4xl sm:text-5xl mt-2" style={{ color: "var(--text-primary)" }}>
                    {stat.value}
                  </div>
                  <div className="label-cap mt-2" style={{ color: "var(--text-secondary)" }}>
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ─── MARQUEE TICKER ─── */}
          <MarqueeTicker />

          {/* ─── SKILLS SECTION ─── */}
          <section id="skills" className="hairline-b">
            <motion.div
              className="p-6 sm:p-10 hairline-b"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
                §01 · The stack
              </div>
              <h2 className="display-hl text-6xl sm:text-8xl lg:text-9xl mt-3" style={{ color: "var(--text-primary)" }}>
                THE <span className="text-[#ff5a00]">STACK.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm" style={{ color: "var(--text-tertiary)" }}>
                // 06 disciplines
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border-color)" }}>
              {skills.map((skill, i) => (
                <SkillCard key={skill.id} {...skill} index={i} />
              ))}
            </div>
          </section>

          {/* ─── WORK SECTION ─── */}
          <section id="work" className="hairline-b">
            <div className="grid grid-cols-1 lg:grid-cols-12 hairline-b">
              <motion.div
                className="lg:col-span-8 p-6 sm:p-10 hairline-r"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
                  §02 · Selected work
                </div>
                <h2 className="display-hl text-6xl sm:text-8xl lg:text-9xl mt-3" style={{ color: "var(--text-primary)" }}>
                  SHIPPED{" "}
                  <span className="text-[#ff5a00]">&amp; LIVE</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm" style={{ color: "var(--text-tertiary)" }}>
                  Three systems in production. Multimodal clinical AI, an always-on research bot, and
                  an autonomous SRE. Click any card for the full case.
                </p>
              </motion.div>

              <motion.div
                className="lg:col-span-4 p-6 sm:p-10 flex flex-col justify-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="hairline p-4" style={{ background: "var(--card-bg)" }}>
                  <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
                    // commit log
                  </div>
                  <div className="font-mono text-sm mt-2 leading-relaxed" style={{ color: "var(--text-primary)" }}>
                    {commitLog.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < commitLog.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px hairline-t" style={{ background: "var(--border-color)" }}>
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </section>

          {/* ─── MANIFESTO SECTION ─── */}
          <section className="hairline-b relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
              <motion.div
                className="p-6 sm:p-10 lg:p-14 hairline-r"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
                  §03 · Manifesto
                </div>
                <h2 className="display-hl text-5xl sm:text-7xl mt-3" style={{ color: "var(--text-primary)" }}>
                  TOOLS THAT STAY{" "}
                  <span className="text-[#ff5a00]">ALIVE AT 3 A.M.</span>
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                  I don't ship demos. I ship systems that survive real users, real errors, and real
                  budgets. Multimodal fusion, agentic pipelines, and cost-aware model routing —
                  engineered to run on their own, not to look good on a slide.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#work" className="btn-orange">
                    See what's shipped →
                  </a>
                  <a
                    href="https://github.com/Kolavara"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    github ↗
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="hidden lg:block overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-full h-full relative">
                  <img
                    src="/agent-graph.png"
                    alt="Agent network graph visualization"
                    className="w-full h-full object-cover drop-shadow-[0_20px_40px_rgba(255,90,0,0.2)]"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* ─── FOOTER / CONTACT ─── */}
        <Footer />
      </div>
    </>
  );
}
