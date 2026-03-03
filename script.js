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
    id: "project-lkml-dashboard",
    image: "assets/images/projects/lkml-dashboard.jpg",
    title: "LKML Dashboard - AI-Powered Linux Kernel Development Tool",
    shortDescription: "Full-stack platform democratizing Linux kernel contribution through AI summarization of 600+ daily mailing list emails",
    fullDescription: "Built production-ready full-stack application addressing critical barrier to Linux kernel contribution: overwhelming volume of 500-600+ daily emails. Features automated email parsing, intelligent thread reconstruction, and AI-powered summarization using Google Gemini API. Implemented caching achieving 90% cost reduction and 80-90% cache hit rate. Flask REST API with 10 endpoints, full-text search via SQLite FTS5. React/TypeScript frontend with Auth0 authentication. Processes 101 emails into 82 threads with 100% AI coverage in <10 minutes, reducing developer time from 3 hours to 15 minutes daily.",
    techStack: ["Python", "Flask", "React", "TypeScript", "Google Gemini API", "Auth0", "SQLite", "Tailwind CSS"],
    category: ["fullstack", "ml"],
    timeline: "Hackathon project",
    githubUrl: "https://github.com/EArakoni/OSH",
    demoUrl: "https://github.com/EArakoni/OSH"
  },
  {
    id: "project-rust-load-balancer",
    image: "assets/images/projects/rust-load-balancer.jpg",
    title: "Load Balancer & Reverse Proxy in Rust",
    shortDescription: "High-performance HTTP load balancer built from scratch with 10,000+ concurrent connection handling",
    fullDescription: "Architected production-ready Layer 7 load balancer in Rust using Tokio async runtime. Handles 10,000+ concurrent connections with ~20MB memory footprint. Features HTTP/1.1 parsing, four load balancing algorithms, intelligent health checking, TLS/SSL termination with RustLS, and connection pooling achieving 60% latency reduction. Achieved <5ms P99 latency at 10,000 req/s throughput.",
    techStack: ["Rust", "Tokio", "HTTP/1.1", "TLS/SSL", "RustLS", "Docker"],
    category: ["systems", "devops"],
    timeline: "3 weeks",
    githubUrl: "https://github.com/EfeKaralar/rust-proxy",
    demoUrl: "https://github.com/EfeKaralar/rust-proxy"
  },
  {
    id: "project-mdadm",
    image: "assets/images/projects/linux-raid.jpg",
    title: "Linux RAID Storage System in C",
    shortDescription: "Low-level RAID device emulator with LRU caching achieving 87.9% cache hit rate",
    fullDescription: "Developed full-featured linear RAID device emulator in C integrating 16 simulated JBOD disks. Implemented write-through caching with custom LRU eviction policy, reducing average read latency by 30% with up to 87.9% cache hit rate. Comprehensive testing ensuring data integrity and fault isolation at systems level.",
    techStack: ["C", "Memory Management", "RAID", "LRU Cache", "Systems Programming", "Unix/Linux"],
    category: ["systems"],
    timeline: "3 weeks",
    githubUrl: "https://github.com/efekaralar/mdadm-linear-device",
    demoUrl: "https://github.com/efekaralar/mdadm-linear-device"
  },
  {
    id: "project-music-rnn",
    image: "assets/images/projects/music-rnn.jpg",
    title: "Classical Music Generation with Neural Networks",
    shortDescription: "Deep learning system for AI-powered piano composition using PyTorch and MAESTRO dataset",
    fullDescription: "Built music generation system using RNNs learning from 200+ hours of piano performances. Processes 7 million notes from MAESTRO dataset with custom MIDI processing pipeline. LSTM architecture with multi-head outputs for pitch, timing, and duration prediction. Features temperature-based sampling, tempo scaling, and comprehensive visualization tools. Demonstrates practical sequence modeling in creative domains.",
    techStack: ["PyTorch", "Python", "LSTM", "PrettyMIDI", "NumPy", "Deep Learning"],
    category: ["ml"],
    timeline: "Academic semester",
    githubUrl: "https://github.com/EfeKaralar/EE456-final-project",
    demoUrl: "https://github.com/EfeKaralar/EE456-final-project"
  },
  {
    id: "project-cicd",
    image: "assets/images/projects/cicd-portfolio.jpg",
    title: "Automated CI/CD Portfolio Deployment",
    shortDescription: "Enterprise-grade DevOps pipeline with Docker, GitHub Actions, and zero-downtime deployments",
    fullDescription: "Architected complete DevOps solution featuring containerized Next.js with multi-stage Docker builds, automated CI/CD via GitHub Actions, Nginx reverse proxy with SSL/TLS. Security hardened with UFW firewall, Fail2Ban, non-root containers. Achieved 2-minute deployment cycles with 99.9% uptime.",
    techStack: ["Docker", "GitHub Actions", "Nginx", "Let's Encrypt", "Ubuntu", "Next.js"],
    category: ["devops"],
    timeline: "1 week",
    githubUrl: "https://github.com/efekaralar/portfolio",
    demoUrl: "https://alpkaralar.com"
  },
  {
    id: "project-research-summarizer",
    image: "assets/images/projects/research-summarizer.jpg",
    title: "Research Summarizer - AI-Powered Paper Analysis",
    shortDescription: "Full-stack platform for automated research paper discovery and comparative analysis",
    fullDescription: "Built web application automating academic literature review with arXiv API integration, PDF processing, and multi-LLM summarization (DeepSeek, Claude, GPT). Structured extraction pipeline identifies key findings and methodologies. SQLAlchemy persistence with SQLite/PostgreSQL support. React frontend with Chakra UI. Deployed at researchtldr.xyz with Docker and Nginx. Reduces literature review time by 10x.",
    techStack: ["Python", "FastAPI", "React", "Chakra UI", "SQLAlchemy", "PostgreSQL", "Docker", "DeepSeek API", "Claude API"],
    category: ["fullstack", "ml"],
    timeline: "Personal project",
    githubUrl: "https://github.com/EfeKaralar/Research-Summarizer-App/",
    demoUrl: "https://researchtldr.xyz/"
  }
];

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "devops", label: "DevOps" },
  { id: "systems", label: "Systems Engineering" },
  { id: "ml", label: "Machine Learning" },
  { id: "fullstack", label: "Full-Stack" }
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

  document.getElementById("modal-letter").textContent = project.title.charAt(0);
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.fullDescription;
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
    activeCategory === "all" ? projects.slice(0, 4) : projects.filter((p) => p.category.includes(activeCategory)).slice(0, 4);

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
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</div>
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

function init() {
  document.getElementById("current-year").textContent = String(new Date().getFullYear());
  renderSkills();
  renderExperience();
  renderProjectCategories();
  renderProjects();
  renderHiddenAllProjects();
  setupNav();
  setupModalControls();
}

document.addEventListener("DOMContentLoaded", init);
