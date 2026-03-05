const personalInfo = {
  email: "karalar.alpefe@gmail.com"
};

const skills = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "JavaScript/TypeScript", "Java", "SQL", "Bash", "Rust"]
  },
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "Expo", "Tailwind CSS", "HTML/CSS", "Redux"]
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "FastAPI", "Flask", "Django", "PostgreSQL", "SQLite"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "CI/CD"]
  },
  {
    category: "Machine Learning & AI",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "OpenCV", "LLMs"]
  },
  {
    category: "Tools & Other",
    items: ["Git", "Linux", "Nginx", "GraphQL", "REST APIs", "Microservices"]
  }
];

const experiences = [
  {
    id: "work-research",
    type: "work",
    title: "Research Assistant",
    organization: "Pennsylvania State University",
    location: "State College, PA",
    startDate: "2024-12",
    endDate: "present",
    current: true,
    description: [
      "Building Python data pipelines to analyze 1+ billion job postings using advanced entity resolution and pattern extraction techniques",
      "Developing scalable data processing infrastructure for large-scale labor market analysis research",
      "Implementing machine learning approaches for entity matching and data quality assessment at scale"
    ]
  },
  {
    id: "work-1",
    type: "work",
    title: "Software Engineer",
    organization: "DementiAnalytics",
    location: "Remote",
    startDate: "2024-02",
    endDate: "present",
    current: true,
    description: [
      "Engineered full-stack mobile application using React and Expo, integrating a 5-stage ML pipeline that analyzes audio, text, and behavioral data to provide dementia risk assessments",
      "Designed and implemented RESTful APIs with Flask backend connecting mobile frontend to Python-based ML algorithms trained on validated clinical methodologies",
      "Collaborated directly with PhD researchers to translate complex algorithmic outputs into user-friendly mobile interfaces while maintaining medical accuracy",
      "Ensured HIPAA compliance and data security standards using Microsoft Azure's healthcare-certified infrastructure for Protected Health Information (PHI)"
    ]
  },
  {
    id: "edu-1",
    type: "education",
    title: "B.S. in Computer Engineering",
    organization: "Pennsylvania State University",
    location: "State College, PA",
    startDate: "2020-08",
    endDate: "2024-12",
    description: [
      "Graduated December 2024 with focus on Machine Learning, Computer Vision, and Systems Engineering",
      "Senior Capstone: Advanced Vehicle Team (AVT) Perception Department - Developed real-time computer vision models for autonomous vehicle navigation, achieving 3rd place in SAE AutoDrive Challenge II",
      "Relevant Coursework: Neural Networks (EE 456), Data Structures, Algorithms, Operating Systems, Computer Vision, Machine Learning"
    ]
  },
  {
    id: "work-3",
    type: "work",
    title: "Lead Learning Assistant",
    organization: "PSU Computer Science & Engineering Department",
    location: "State College, PA",
    startDate: "2022-01",
    endDate: "2024-05",
    description: [
      "Led instructional operations for Computer Engineering 270: Digital Design, supporting 250+ students per semester",
      "Managed team of learning assistants while overseeing course operations including exam/lab creation and grading infrastructure",
      "Delivered lectures and created supplementary educational content, receiving consistent positive feedback for clarity and teaching ability"
    ]
  },
  {
    id: "work-4",
    type: "work",
    title: "Software Engineering Intern",
    organization: "Bakkal Co.",
    location: "State College, PA",
    startDate: "2023-06",
    endDate: "2023-11",
    description: [
      "Developed automated testing frameworks for multi-platform application suite using React and JavaScript",
      "Implemented frontend features across customer, driver, and merchant interfaces",
      "Collaborated with agile development team to rapidly iterate on features in production environment"
    ]
  }
];

const projects = [
  {
    id: "project-sevanbot",
    image: "https://projects.alpkaralar.com/assets/images/projects/sevanbot.jpg",
    title: "SevanBOT",
    subtitle: "RAG Pipeline for Writer Persona",
    shortDescription: "Retrieval-augmented generation pipeline turning 1,300+ articles into a contextual AI writer persona with hybrid dense/sparse search and multi-turn conversation memory.",
    fullDescription: "SevanBOT is a production RAG system built to replicate a specific writer's voice and knowledge base for interactive Q&A. The pipeline orchestrates scraping → Markdown conversion → semantic chunking, transforming ~1,300 articles into ~7,100 retrieval-ready contextual chunks.\n\nThe retrieval stack is fully modular, supporting three strategies: dense retrieval via Qdrant vector database with OpenAI embeddings, sparse retrieval via BM25, and hybrid fusion using Reciprocal Rank Fusion (RRF) and weighted scoring. A CLI comparator allows direct benchmarking of retrieval quality across all three strategies side-by-side.\n\nThe backend is a FastAPI chat service integrating contextual retrieval with Claude-powered RAG answering and multi-turn conversation memory, enabling nuanced, persona-consistent responses grounded entirely in the author's actual writing.",
    techStack: ["Python", "FastAPI", "Qdrant", "OpenAI Embeddings", "BM25", "Claude API", "RAG", "Vector Search"],
    category: ["ml", "fullstack"],
    timeline: "Personal project",
    date: "2026-02",
    githubUrl: "https://github.com/EfeKaralar/SevanBOT",
    demoUrl: "https://sevanbot.alpkaralar.com"
  },
  {
    id: "project-lkml-dashboard",
    image: "https://projects.alpkaralar.com/assets/images/projects/lkml-dashboard.jpg",
    title: "LKML Dashboard",
    subtitle: "AI-Powered Linux Kernel Development Tool",
    shortDescription: "Full-stack platform processing 600+ daily Linux kernel mailing list emails with AI summarization, cutting developer review time from 3 hours to 15 minutes.",
    fullDescription: "The Linux Kernel Mailing List (LKML) receives 500–600+ emails per day, creating an overwhelming barrier to contribution. This platform automates the entire review workflow.\n\nThe backend is a Flask REST API with 10 endpoints and SQLite FTS5 full-text search, featuring automated IMAP-based email ingestion, intelligent thread reconstruction, and Google Gemini API summarization with 90% cost reduction via response caching (80–90% cache hit rate). Auth0 handles authentication.\n\nThe React/TypeScript frontend provides thread browsing, full-text search, and AI summary views. The system processes 101 emails into 82 reconstructed threads with 100% AI coverage in under 10 minutes — reducing daily developer review time from 3 hours to 15 minutes. Built as a hackathon project.",
    techStack: ["Python", "Flask", "React", "TypeScript", "Google Gemini API", "Auth0", "SQLite FTS5", "Tailwind CSS"],
    category: ["fullstack", "ml"],
    timeline: "Hackathon",
    date: "2025-12",
    githubUrl: "https://github.com/EfeKaralar/lkml-dashboard",
    demoUrl: null
  },
  {
    id: "project-research-summarizer",
    image: "https://projects.alpkaralar.com/assets/images/projects/research-summarizer.jpg",
    title: "Research Summarizer",
    subtitle: "AI Academic Paper Analysis Platform",
    shortDescription: "Full-stack platform automating academic literature review with multi-LLM summarization of arXiv papers, deployed live at researchtldr.xyz.",
    fullDescription: "Research Summarizer automates the most time-consuming part of academic work: reading and synthesizing papers. The platform integrates directly with the arXiv API for paper discovery, downloads and parses PDFs via PyPDF2, and routes them through multiple LLM providers (DeepSeek, Claude, GPT) for structured summarization.\n\nThe FastAPI backend uses SQLAlchemy ORM with PostgreSQL (or SQLite for local dev), caching processed summaries to avoid redundant API calls and reduce cost. The React + Chakra UI frontend provides a clean research dashboard with paper search, summary display, and side-by-side comparison views.\n\nDeployed at researchtldr.xyz with Docker and Nginx on a VPS. The platform reduces literature review time by an estimated 10× compared to manual reading.",
    techStack: ["Python", "FastAPI", "React", "Chakra UI", "SQLAlchemy", "PostgreSQL", "Docker", "Nginx", "Claude API", "DeepSeek API"],
    category: ["fullstack", "ml"],
    timeline: "Personal project",
    date: "2025-11",
    githubUrl: "https://github.com/EfeKaralar/Research-Summarizer-App",
    demoUrl: "https://researchtldr.xyz"
  },
  {
    id: "project-rust-load-balancer",
    image: "https://projects.alpkaralar.com/assets/images/projects/rust-load-balancer.jpg",
    title: "Rust Load Balancer",
    subtitle: "High-Performance Layer 7 Reverse Proxy",
    shortDescription: "Production-ready HTTP load balancer built from scratch in Rust, handling 10,000+ concurrent connections with <5ms P99 latency and a 20MB memory footprint.",
    fullDescription: "A production-grade Layer 7 load balancer and reverse proxy built entirely from scratch in Rust using the Tokio async runtime.\n\nCore features: HTTP/1.1 request parsing, four load balancing algorithms (round-robin, least-connections, weighted round-robin, IP hash), intelligent active health checking with automatic backend failover, TLS/SSL termination via RustLS, and connection pooling achieving a 60% latency reduction.\n\nBenchmark results at 10,000 req/s: <5ms P99 latency, 10,000+ concurrent connections sustained, ~20MB memory footprint. Built over 3 weeks as an exercise in systems programming and high-performance async Rust.",
    techStack: ["Rust", "Tokio", "HTTP/1.1", "TLS/SSL", "RustLS", "Docker", "Async Programming"],
    category: ["systems", "devops"],
    timeline: "3 weeks",
    date: "2025-09",
    githubUrl: "https://github.com/EfeKaralar/rust-proxy",
    demoUrl: null
  },
  {
    id: "project-avt-autodrive",
    image: "https://projects.alpkaralar.com/assets/images/projects/avt-autodrive.jpg",
    title: "Autonomous Vehicle Perception",
    subtitle: "SAE AutoDrive Challenge II — Penn State AVT",
    shortDescription: "Real-time YOLO-based object detection and lane detection deployed on an autonomous Chevrolet Bolt EUV — 3rd place overall at SAE AutoDrive Challenge II Year 3.",
    fullDescription: "The SAE AutoDrive Challenge II is a 4-year university competition challenging 10 elite teams to engineer a fully autonomous Chevrolet Bolt EUV meeting SAE Level 4 autonomy standards.\n\nAs a member of the Perception Department, I developed real-time computer vision models for the vehicle's environmental understanding: YOLO-based object detection pipelines for vehicles and pedestrians, and lane/road detection for drivable area estimation.\n\nModels were trained in PyTorch on custom-labeled datasets and integrated into the full autonomous stack via ROS2, feeding structured detections downstream to planning and control modules. At Year 3 (June 2024), Penn State AVT placed 3rd overall, 2nd in the Intersection Challenge, and 3rd in the Construction Challenge out of 10 competing universities.",
    techStack: ["Python", "YOLO", "PyTorch", "ROS2", "OpenCV", "TensorFlow", "Computer Vision", "Autonomous Vehicles"],
    category: ["ml", "systems"],
    timeline: "Senior Capstone (2023–2024)",
    date: "2024-06",
    githubUrl: null,
    demoUrl: "https://www.avt.psu.edu"
  },
  {
    id: "project-cicd-portfolio",
    image: "https://projects.alpkaralar.com/assets/images/projects/cicd-portfolio.jpg",
    title: "Automated CI/CD Deployment",
    subtitle: "Enterprise-Grade DevOps Pipeline",
    shortDescription: "Complete DevOps pipeline with containerized Next.js, GitHub Actions CI/CD, Nginx reverse proxy, and zero-downtime deployments achieving 99.9% uptime.",
    fullDescription: "A complete enterprise-grade DevOps solution for automated portfolio deployment, demonstrating production infrastructure patterns end-to-end.\n\nThe stack features a containerized Next.js application with multi-stage Docker builds, automated CI/CD via GitHub Actions, Nginx reverse proxy with automatic SSL/TLS via Let's Encrypt, and security hardening with UFW firewall rules and Fail2Ban.\n\nAll containers run as non-root users. The pipeline achieves 2-minute end-to-end deployment cycles with 99.9% uptime, zero-downtime rolling deployments, and automatic rollback on health check failure.",
    techStack: ["Docker", "GitHub Actions", "Nginx", "Let's Encrypt", "Ubuntu", "Next.js", "UFW", "Fail2Ban"],
    category: ["systems", "devops"],
    timeline: "1 week",
    date: "2025-08",
    githubUrl: "https://github.com/efekaralar/portfolio",
    demoUrl: "https://alpkaralar.com"
  },
  {
    id: "project-music-rnn",
    image: "https://projects.alpkaralar.com/assets/images/projects/music-rnn.jpg",
    title: "Classical Music Generation",
    subtitle: "Neural Networks for AI Piano Composition",
    shortDescription: "Deep learning system for AI-powered piano composition using PyTorch LSTM networks trained on 200+ hours of MAESTRO dataset performances and 7 million notes.",
    fullDescription: "A music generation system using recurrent neural networks trained on the MAESTRO dataset — 200+ hours of professional piano performances comprising 7 million notes.\n\nThe custom MIDI processing pipeline extracts pitch, timing, velocity, and duration features and encodes them as multi-dimensional sequences for modeling. The LSTM architecture uses multi-head outputs for simultaneous prediction of pitch, inter-onset interval, and note duration.\n\nInference supports temperature-based sampling to control creativity vs. coherence, tempo scaling, and real-time MIDI output. Built as a final project for EE 456 (Neural Networks) at Penn State.",
    techStack: ["PyTorch", "Python", "LSTM", "PrettyMIDI", "NumPy", "Matplotlib", "Deep Learning"],
    category: ["ml"],
    timeline: "Academic semester",
    date: "2025-05",
    githubUrl: "https://github.com/EfeKaralar/EE456-final-project",
    demoUrl: null
  },
  {
    id: "project-lisp-interpreter",
    image: "https://projects.alpkaralar.com/assets/images/projects/lisp-interpreter.jpg",
    title: "Custom LISP Interpreter",
    subtitle: "Language Implementation in C",
    shortDescription: "Fully functional Lisp interpreter built from scratch in C featuring parser combinators, recursive descent parsing, lexical closures, and an interactive REPL.",
    fullDescription: "A complete Lisp interpreter implemented from scratch in C, covering the full pipeline from raw source text to evaluated result.\n\nThe parser uses custom parser combinators — a functional approach where each combinator handles a specific grammar rule and composes cleanly with others. The recursive descent parser builds an S-expression AST which a tree-walking interpreter then evaluates with a persistent environment chain.\n\nLanguage features: first-class functions, lexical closures, proper tail call optimization, descriptive error messages with source positions, file I/O, string manipulation, and a full numeric tower. The REPL provides interactive evaluation with persistent environment state across expressions.",
    techStack: ["C", "Parser Combinators", "REPL", "Language Design", "Recursive Descent", "AST"],
    category: ["systems"],
    timeline: "Personal project",
    date: "2025-10",
    githubUrl: "https://github.com/EfeKaralar/lisp-diy",
    demoUrl: null
  },
  {
    id: "project-mdadm",
    image: "https://projects.alpkaralar.com/assets/images/projects/linux-raid.jpg",
    title: "Linux RAID Storage System",
    subtitle: "mdadm-Inspired Block Device Emulator in C",
    shortDescription: "Low-level RAID device emulator in C integrating 16 simulated JBOD disks with LRU write-through caching achieving 87.9% hit rate and 30% latency reduction.",
    fullDescription: "A full-featured linear RAID device emulator written in C, inspired by the Linux mdadm utility. The system integrates 16 simulated JBOD (Just a Bunch Of Disks) drives into a single virtual block device exposing standard mount, read, and write operations.\n\nThe write-through LRU cache uses a custom doubly-linked list + hash map implementation with configurable capacity. Under representative workloads the cache achieves an 87.9% hit rate and reduces average read latency by 30% compared to direct disk access.\n\nComprehensive testing verifies data integrity across concurrent read/write patterns, correct LRU eviction ordering, and proper fault isolation between disk segment boundaries.",
    techStack: ["C", "Memory Management", "LRU Cache", "RAID", "Systems Programming", "Unix/Linux"],
    category: ["systems"],
    timeline: "3 weeks",
    date: "2025-03",
    githubUrl: "https://github.com/efekaralar/mdadm-linear-device",
    demoUrl: null
  },
  {
    id: "project-embedded-audio",
    image: "https://projects.alpkaralar.com/assets/images/projects/embedded-audio.jpg",
    title: "Embedded Linux Audio Processor",
    subtitle: "Real-Time Guitar Amplifier on Orange Pi Zero",
    shortDescription: "Real-time audio processing system on Orange Pi Zero using RT Kernel Armbian and JACK Audio, achieving production-ready guitar amplification with fully automated boot.",
    fullDescription: "A real-time audio processing system built on the Orange Pi Zero single-board computer, architected to function as a standalone guitar amplifier and digital effects processor.\n\nThe system runs Armbian with a real-time (RT) kernel patch, providing deterministic scheduling for audio tasks and eliminating the latency spikes that cause audible glitches under standard kernel scheduling. JACK Audio Connection Kit serves as the low-latency audio server, and Guitarix implements amplifier modeling and the effects chain.\n\nAll components are configured and wired together via systemd service units that activate at boot in the correct order, eliminating any need for manual intervention. The result is a production-ready embedded audio device — plug in, power on, play.",
    techStack: ["Linux", "RT Kernel", "Armbian", "JACK Audio", "Guitarix", "systemd", "Orange Pi", "Embedded Systems"],
    category: ["systems"],
    timeline: "Personal project",
    date: "2024-08",
    githubUrl: null,
    demoUrl: null
  }
];

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ml", label: "Machine Learning" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "systems", label: "Systems" }
];

let activeCategory = "all";

function formatDate(dateString) {
  const [year, month] = dateString.split("-");
  const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function getExperienceTypeIcon(type) {
  if (type === "education") {
    return `
      <svg viewBox="0 0 24 24" fill="none" class="experience-type-icon" aria-hidden="true">
        <path d="M12 4L2.5 9L12 14L21.5 9L12 4Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 11.5V15.5C6 15.5 8 18 12 18C16 18 18 15.5 18 15.5V11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" fill="none" class="experience-type-icon" aria-hidden="true">
      <path d="M9 7V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="4" y="7" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.8" />
      <path d="M4 12H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </svg>
  `;
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = skills
    .map(
      (skillCategory) => `
        <div class="terminal-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">${skillCategory.category}</h3>
          <div class="flex flex-wrap gap-2">
            ${skillCategory.items
              .map(
                (skill) =>
                  `<span class="px-3 py-1.5 bg-white text-slate-700 text-sm rounded-lg font-medium shadow-sm hover:shadow-md transition-all cursor-default border border-slate-200">${skill}</span>`
              )
              .join("")}
          </div>
        </div>`
    )
    .join("");
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  container.innerHTML = experiences
    .map(
      (exp) => `
        <div class="relative">
          <div class="absolute left-0 md:left-6 w-8 h-8 md:w-12 md:h-12 -translate-x-1/2 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-lg z-10 experience-badge-shell">
            <span class="experience-fallback">${getExperienceTypeIcon(exp.type)}</span>
          </div>
          <div class="ml-12 md:ml-20 terminal-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <div class="flex items-start justify-between flex-wrap gap-2 mb-2">
                <h3 class="text-xl font-bold text-slate-900">${exp.title}</h3>
                ${exp.current ? '<span class="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">Current</span>' : ""}
              </div>
              <p class="text-lg text-blue-600 font-semibold mb-1">${exp.organization}</p>
              <div class="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span>${formatDate(exp.startDate)} - ${exp.current ? "Present" : formatDate(exp.endDate)}</span>
                <span>${exp.location}</span>
              </div>
            </div>
            <ul class="space-y-2">
              ${exp.description
                .map(
                  (item) =>
                    `<li class="text-slate-700 pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-600 before:font-bold">${item}</li>`
                )
                .join("")}
            </ul>
          </div>
        </div>`
    )
    .join("");
}

function renderProjectCategories() {
  const container = document.getElementById("project-categories");
  if (!container) return;

  container.innerHTML = projectCategories
    .map(
      (category) => `
      <button data-category="${category.id}" class="category-btn px-6 py-3 rounded-lg font-medium transition-all ${
        activeCategory === category.id
          ? "btn btn-primary"
          : "btn btn-outline"
      }">${category.label}</button>`
    )
    .join("");

  container.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.getAttribute("data-category") || "all";
      renderProjectCategories();
      renderProjects();
    });
  });
}

function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const projectPageUrl = `https://projects.alpkaralar.com/project.html?id=${project.id}`;

  document.getElementById("modal-letter").textContent = project.title.charAt(0);
  document.getElementById("modal-title").innerHTML = `<a href="${projectPageUrl}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">${project.title}</a>`;
  document.getElementById("modal-description").textContent = project.fullDescription;

  const readMoreBtn = document.getElementById("modal-read-more");
  if (readMoreBtn) readMoreBtn.href = projectPageUrl;
  const modalCover = document.getElementById("modal-cover");
  const modalCoverOverlay = document.getElementById("modal-cover-overlay");
  const modalLetter = document.getElementById("modal-letter");

  if (project.image && modalCover && modalCoverOverlay && modalLetter) {
    modalCover.src = project.image;
    modalCover.alt = `${project.title} preview image`;
    modalCover.classList.remove("hidden");
    modalCoverOverlay.classList.remove("hidden");
    modalLetter.classList.add("hidden");
    modalCover.onerror = () => {
      modalCover.classList.add("hidden");
      modalCoverOverlay.classList.add("hidden");
      modalLetter.classList.remove("hidden");
    };
  } else if (modalCover && modalCoverOverlay && modalLetter) {
    modalCover.classList.add("hidden");
    modalCoverOverlay.classList.add("hidden");
    modalLetter.classList.remove("hidden");
  }

  const timeline = document.getElementById("modal-timeline");
  timeline.textContent = project.timeline || "";

  const techContainer = document.getElementById("modal-tech");
  techContainer.innerHTML = project.techStack
    .map((tech) => `<span class="px-4 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium border border-slate-200">${tech}</span>`)
    .join("");

  const demoBtn = document.getElementById("modal-demo");
  if (project.demoUrl) {
    demoBtn.href = project.demoUrl;
    demoBtn.classList.remove("hidden");
  } else {
    demoBtn.classList.add("hidden");
  }

  const githubBtn = document.getElementById("modal-github");
  if (project.githubUrl) {
    githubBtn.href = project.githubUrl;
    githubBtn.classList.remove("hidden");
  } else {
    githubBtn.classList.add("hidden");
  }

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filteredProjects =
    activeCategory === "all"
      ? projects.slice(0, 3)
      : projects
          .filter((p) => p.category.includes(activeCategory))
          .sort((a, b) => (a.category[0] === activeCategory ? 0 : 1) - (b.category[0] === activeCategory ? 0 : 1))
          .slice(0, 3);

  container.innerHTML = filteredProjects
    .map(
      (project) => `
        <div>
          <article data-project-id="${project.id}" class="project-card group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer">
            <div class="relative h-48 bg-slate-100 overflow-hidden border-b border-slate-200">
              ${
                project.image
                  ? `<img src="${project.image}" alt="${project.title} preview" class="project-cover" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />`
                  : ""
              }
              <div class="absolute inset-0 flex items-center justify-center project-cover-fallback" style="${project.image ? "display:none;" : "display:flex;"}">
                <span class="text-slate-600 text-6xl font-bold opacity-20">${project.title.charAt(0)}</span>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-4 right-4 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background:rgba(13,20,31,0.85);color:var(--accent);border:1px solid rgba(100,240,173,0.35)">↗</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">${project.title}</h3>
              <p class="text-slate-600 text-sm mb-4 line-clamp-2">${project.shortDescription}</p>
              <div class="flex flex-wrap gap-2">
                ${project.techStack
                  .slice(0, 3)
                  .map((tech) => `<span class="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium">${tech}</span>`)
                  .join("")}
                ${
                  project.techStack.length > 3
                    ? `<span class="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">+${project.techStack.length - 3}</span>`
                    : ""
                }
              </div>
            </div>
          </article>
          <div class="sr-only" aria-label="Full details for ${project.title}">
            <article itemscope itemtype="https://schema.org/SoftwareSourceCode">
              <h3 itemprop="name">${project.title}</h3>
              <p itemprop="description">${project.fullDescription}</p>
              <div itemprop="programmingLanguage">${project.techStack.join(", ")}</div>
              ${project.timeline ? `<p><strong>Timeline:</strong> ${project.timeline}</p>` : ""}
            </article>
          </div>
        </div>`
    )
    .join("");

  container.querySelectorAll("[data-project-id]").forEach((card) => {
    card.addEventListener("click", () => openModal(card.getAttribute("data-project-id")));
  });
}

function renderHiddenAllProjects() {
  const container = document.getElementById("all-projects-hidden");
  if (!container) return;

  container.innerHTML = `
    <h2>Alp Efe Karalar's Complete Project Portfolio</h2>
    ${projects
      .map(
        (project) => `
          <article itemscope itemtype="https://schema.org/SoftwareSourceCode">
            <h3 itemprop="name">${project.title}</h3>
            <p itemprop="description">${project.fullDescription}</p>
            <div><strong>Technical Stack:</strong> ${project.techStack.join(", ")}</div>
            <p><strong>Project Type:</strong> ${project.category.join(", ")}</p>
            ${project.timeline ? `<p><strong>Development Timeline:</strong> ${project.timeline}</p>` : ""}
          </article>
        `
      )
      .join("")}
  `;
}

function setupNav() {
  const navbar = document.getElementById("navbar");
  const mobileMenu = document.getElementById("mobile-menu");
  const toggle = document.getElementById("mobile-menu-toggle");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("bg-black/70", "backdrop-blur-md", "shadow-lg", "border-slate-200");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-black/70", "backdrop-blur-md", "shadow-lg", "border-slate-200");
      navbar.classList.add("bg-transparent");
    }
  });

  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.getAttribute("data-scroll"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        mobileMenu.classList.add("hidden");
      }
    });
  });
}

function setupModalControls() {
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("project-modal-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function setupStickyContact() {
  const group = document.getElementById("sticky-contact-group");
  if (!group) return;
  const hero = document.getElementById("home");
  const contact = document.getElementById("contact");
  function update() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    const contactTop = contact.getBoundingClientRect().top;
    const pastHero = heroBottom < 0;
    const atContact = contactTop <= window.innerHeight;
    if (pastHero && !atContact) {
      group.classList.add("visible");
    } else {
      group.classList.remove("visible");
    }
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function init() {
  document.getElementById("current-year").textContent = String(new Date().getFullYear());
  renderSkills();
  renderExperience();
  renderProjectCategories();
  renderProjects();
  renderHiddenAllProjects();
  setupNav();
  setupModalControls();
  setupStickyContact();
}

document.addEventListener("DOMContentLoaded", init);
