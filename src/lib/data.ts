export const personalInfo = {
  name: "Aryan Gurudath",
  title: "AI / ML Engineer",
  tagline: "tools that stay alive at 3 a.m.",
  shortBio:
    "Second-year CSE at RNSIT, Bengaluru. I build production LLM agents, behavioral anomaly systems, and tools that stay alive at 3 a.m. — not demos that die after the pitch.",
  location: "Bengaluru, IN",
  education: "B.E. CSE · 2024–2028",
  role: "AI / ML",
  email: "aryangurudath3@gmail.com",
  github: "https://github.com/Kolavara",
  status: "OPEN for internships",
  shippedProjects: 3,
};

export const skills = [
  {
    id: 1,
    category: "Languages",
    items: ["Python", "C++", "C", "SQL"],
  },
  {
    id: 2,
    category: "AI / ML",
    items: [
      "Groq API",
      "LLaMA 3.1",
      "PyTorch",
      "Scikit-learn",
      "SHAP",
      "Isolation Forest",
      "Autoencoders",
    ],
  },
  {
    id: 3,
    category: "Backend",
    items: [
      "FastAPI",
      "REST",
      "GraphQL",
      "python-telegram-bot",
      "threading",
      "asyncio",
    ],
  },
  {
    id: 4,
    category: "DevOps",
    items: ["Git", "GitHub", "Render", "UptimeRobot", "Linux CLI", "Env Vars"],
  },
  {
    id: 5,
    category: "Data",
    items: ["MongoDB", "ChromaDB", "JSON persistence"],
  },
  {
    id: 6,
    category: "Exploring",
    items: [
      "Machine Learning (Udemy)",
      "Quantum Computing",
      "Agentic AI",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "SENTIENCE",
    shortTitle: "SE",
    tag: "Shipped",
    subtitle: "Multimodal Clinical AI",
    summary:
      "Local-first FastAPI SPA for mental-health diagnostics. Real-time WebSocket telemetry fuses facial emotion, vocal prosody (pitch, arousal, rate) and a LangGraph psychologist agent with continuity of care, JWT RBAC, and longitudinal risk trends.",
    details: [
      "Real-time facial emotion recognition via WebSocket",
      "Vocal prosody analysis (pitch, arousal, speech rate)",
      "LangGraph-powered psychologist agent with continuity of care",
      "JWT-based role-based access control",
      "Longitudinal risk trend visualization",
    ],
    image: null,
    links: {
      github: null,
      live: null,
    },
  },
  {
    id: 2,
    title: "ARYAN",
    shortTitle: "AR",
    tag: "Live",
    subtitle: "AI Research Telegram Bot",
    summary:
      "Production LLM assistant on Telegram. Custom persona, strict AI/Tech focus, GraphQL-based X scraper without the paid API, daily digest at 22:00 IST.",
    details: [
      "Production-deployed LLM assistant on Telegram",
      "Custom persona with strict AI/Tech focus",
      "GraphQL-based X (Twitter) scraper — no paid API needed",
      "Daily news digest scheduled at 22:00 IST",
      "Always-on with monitoring via UptimeRobot",
    ],
    image: null,
    links: {
      github: null,
      live: "https://t.me/aryan_x_bot",
    },
  },
  {
    id: 3,
    title: "INCIDENT-AGENT",
    shortTitle: "IN",
    tag: "Shipped",
    subtitle: "AI-Powered SRE Assistant",
    summary:
      "Automated incident diagnosis → tested auto-remediation → PR-ready code. Hindsight vector memory learns from every incident; cascadeflow routes known issues to cheap models ($0.001) and novel ones to powerful models ($0.031) — ~77% cheaper at scale. 8-step pipeline: Detect → Analyze → Diagnose → Plan → Fix → Test → Commit → PR.",
    details: [
      "8-step automated pipeline: Detect → Analyze → Diagnose → Plan → Fix → Test → Commit → PR",
      "Hindsight vector memory that learns from every past incident",
      "CascadeFlow router: $0.001 for known issues, $0.031 for novel ones — ~77% cost reduction",
      "Auto-remediation with tested PR-ready code output",
      "Self-improving over time with each incident handled",
    ],
    image: null,
    links: {
      github: null,
      live: null,
    },
  },
];

export const marqueeItems = [
  "LLMs",
  "Agentic AI",
  "Anomaly Detection",
  "FastAPI",
  "PyTorch",
  "Groq",
  "SHAP",
  "Cybersecurity",
  "Quantum Computing",
];

export const commitLog = [
  "feat: multimodal fusion (WS)",
  "feat: telegram digest 22:00 IST",
  "feat: cascadeflow router (-77% $)",
];
