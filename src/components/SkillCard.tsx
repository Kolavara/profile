import { motion } from "framer-motion";

interface SkillCardProps {
  id: number;
  category: string;
  items: string[];
  index: number;
}

export default function SkillCard({ id, category, items, index }: SkillCardProps) {
  return (
    <motion.div
      className="p-6 sm:p-8 relative arrow-tile group"
      style={{ background: "var(--card-bg)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3">
        <span className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>
          {String(id).padStart(2, "0")}
        </span>
        <span className="w-1.5 h-1.5 bg-[#ff5a00] rounded-full" />
        <span className="label-cap" style={{ color: "var(--text-secondary)" }}>
          {category}
        </span>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="label-cap px-3 py-1.5 hairline skill-tag cursor-default"
            style={{ background: "var(--card-bg)", color: "var(--text-primary)" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
