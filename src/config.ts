export const siteConfig = {
  name: "Ryan Denny",
  title: "AI Engineer | ML Engineer | Data Scientist",
  description: "Building deployable AI systems. MS in Artificial Intelligence from Northeastern University. Published researcher in Computer Vision.",
  accentColor: "#e94560",
  social: {
    email: "ryandennyjohn@gmail.com",
    linkedin: "https://linkedin.com/in/ryan-denny-02",
    github: "https://github.com/rydnj",
  },

  aboutMe: `I recently finished my MS in Artificial Intelligence at Northeastern University and I'm looking for my first full-time role. During grad school, I published a paper in computer vision with Springer and got hooked on the problem of making AI systems that actually work outside of a Jupyter notebook.\n\nMost of what I build lives at the intersection of AI and software engineering — things like RAG pipelines over real financial documents, real-time collaborative apps with WebSockets, and LLM integrations with structured outputs. I care a lot about shipping code that runs somewhere real, not just passing on a test set.\n\nWhen I'm not building, I'm probably deep in a SQL problem on LeetCode or figuring out how to deploy something on AWS without breaking the free tier.`,

  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "OpenAI",
    "Hugging Face",
    "Scikit-learn",
    "RAG",
    "NLP",
    "Computer Vision",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "pgvector",
    "SQL",
    "SQLAlchemy",
    "Docker",
    "AWS",
    "SvelteKit",
    "React",
    "Streamlit",
    "WebSockets",
    "Git",
    "Pandas",
    "NumPy",
    "Java",
    "C++",
  ],

  projects: [
    {
      name: "ComplianceScope — AI Financial Compliance Analyst",
      description:
        "RAG-powered SEC filing analyzer that ingests 10-K/10-Q filings, automatically flags compliance risks across 7 categories with 85%+ precision, and generates executive risk reports. Two-tier detection engine combining keyword matching and LLM classification with structured outputs. Key metrics: 85%+ risk detection precision · <3s query response · <2 min filing ingestion.",
      link: "https://github.com/rydnj/ComplianceScope-AI-Financial-Compliance-Analyst",
      skills: ["FastAPI", "LangChain", "OpenAI", "pgvector", "PostgreSQL", "Streamlit", "Docker", "AWS"],
    },
    {
      name: "SyncBoard — Real-Time Collaborative Kanban Board",
      description:
        "Real-time collaborative workspace where teams create rooms, organize tasks on a kanban board, and see each other's changes instantly via WebSockets. Features live presence tracking, drag-and-drop cards, and persistent state. Key metrics: Sub-50ms WebSocket latency · 15+ concurrent users · 100% board state consistency.",
      link: "http://34.198.77.126:3000/",
      skills: ["SvelteKit", "FastAPI", "PostgreSQL", "WebSockets", "Docker", "AWS"],
    },
    {
      name: "LSeg — Language-Driven Semantic Segmentation",
      description:
        "Zero-shot semantic segmentation model combining DPT and CLIP encoders. Achieved 58% accuracy on ADE20K using only natural language supervision — no pixel-level training labels. Custom ViTWrapper enables arbitrary input sizes via position embedding interpolation.",
      link: "https://github.com/rz-collab/ML_Project",
      skills: ["PyTorch", "PyTorch Lightning", "CLIP", "DPT", "MSeg"],
    },
  ],

  experience: [
    {
      company: "Bayanat Smart Services",
      title: "Data Science Intern",
      dateRange: "May 2022 – July 2022",
      bullets: [
        "Developed a spam classification POC, improving F1-score by 10% within 2 months to reduce manual data processing costs for legacy system upgrades.",
        "Benchmarked XGBoost and Logistic Regression achieving 90%+ accuracy and reducing production latency by 15%.",
        "Authored validation reports for stakeholders documenting results across 1,000+ records to support model review and traceability.",
      ],
    },
  ],

  education: [
    {
      school: "Northeastern University",
      degree: "Master of Science in Artificial Intelligence",
      dateRange: "Jan 2024 – Dec 2025",
      achievements: [
        "GPA: 3.54",
        "Published research in Computer Vision (Springer LNNS, ICITA 2023)",
      ],
    },
    {
      school: "Heriot-Watt University",
      degree: "Bachelor of Science (Hons) in Computer Science",
      dateRange: "Sep 2020 – Jul 2023",
      achievements: [
        "First Class with Honours (Equivalent to ~4.0 GPA)",
      ],
    },
  ],
};