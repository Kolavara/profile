import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="p-4 sm:p-6"
      style={{ background: "var(--card-bg)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-left relative hairline p-5 sm:p-6 card-lift arrow-tile group w-full cursor-pointer"
        style={{ background: "var(--card-bg)" }}
      >
        {/* Corner badges */}
        <span
          className="absolute label-cap px-2 py-1 hairline -top-px -left-px !border-t-0 !border-l-0"
          style={{ background: "var(--card-bg)" }}
        >
          {project.tag}
        </span>
        <span
          className="absolute label-cap px-2 py-1 hairline -top-px -right-px !border-t-0 !border-r-0"
          style={{ background: "#ff5a00", color: "#111" }}
        >
          /{String(project.id).padStart(2, "0")}
        </span>

        {/* Header */}
        <div className="mt-8 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div
              className="font-display text-3xl sm:text-4xl leading-none truncate"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </div>
            <div className="label-cap mt-2" style={{ color: "var(--text-secondary)" }}>
              {project.subtitle}
            </div>
          </div>
          <div className="grid place-items-center w-14 h-14 hairline bg-[var(--text-primary)] text-[#ff5a00] font-display text-2xl shrink-0">
            {project.shortTitle}
          </div>
        </div>

        {/* Summary */}
        <p
          className="mt-4 text-sm leading-relaxed text-left"
          style={{ color: "var(--text-tertiary)" }}
        >
          {expanded
            ? project.summary
            : project.summary.length > 180
              ? project.summary.slice(0, 180) + "..."
              : project.summary}
        </p>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2">
                {project.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-start gap-2"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    <span className="text-[#ff5a00] mt-0.5">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div
          className="mt-6 flex items-center justify-between label-cap"
          style={{ color: "var(--text-primary)" }}
        >
          <span>{expanded ? "Show less" : "View case →"}</span>
          <span className="arrow font-display text-2xl">→</span>
        </div>
      </button>
    </motion.div>
  );
}
