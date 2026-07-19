import { marqueeItems } from "@/lib/data";

export default function MarqueeTicker() {
  // Duplicate items for seamless infinite scroll
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      className="hairline-t hairline-b overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="marquee-track flex whitespace-nowrap py-2">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="label-cap px-6 flex items-center gap-6"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="inline-block w-1.5 h-1.5 bg-[#ff5a00]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
