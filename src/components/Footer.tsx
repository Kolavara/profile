import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="hairline-t"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Contact Info */}
        <div className="p-6 sm:p-10 lg:p-14 hairline-r">
          <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
            §03 · Contact
          </div>
          <h2 className="display-hl text-5xl sm:text-7xl mt-3" style={{ color: "var(--text-primary)" }}>
            LET'S BUILD{" "}
            <span className="text-[#ff5a00]">SOMETHING.</span>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
            I'm always open to interesting projects, research collaborations, and
            internship opportunities. If your system needs to stay alive at 3
            a.m. — let's talk.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:aryangurudath3@gmail.com" className="btn-orange">
              Send a message →
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
        </div>

        {/* Right: Contact details */}
        <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
          <div>
            <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
              // contact.txt
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
                  Email
                </div>
                <a
                  href="mailto:aryangurudath3@gmail.com"
                  className="font-display text-2xl sm:text-3xl mt-1 inline-block hover:text-[#ff5a00] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  aryangurudath3@gmail.com
                </a>
              </div>
              <div>
                <div className="label-cap" style={{ color: "var(--text-secondary)" }}>
                  GitHub
                </div>
                <a
                  href="https://github.com/Kolavara"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-2xl sm:text-3xl mt-1 inline-block hover:text-[#ff5a00] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  @Kolavara
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 label-cap" style={{ color: "var(--text-secondary)" }}>
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
            <span className="w-1 h-1 bg-[#ff5a00]" />
            <span>RNSIT · Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
