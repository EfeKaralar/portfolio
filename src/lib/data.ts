// src/lib/data.ts
// UPDATED VERSION with current information (December 2025)

import { SocialLink, Skill, Project, Experience } from '@/types';

export const personalInfo = {
  name: "Alp Efe Karalar",
  title: "Software Engineer & AI/ML Specialist",
  objective: "Computer Engineering graduate from Penn State University (December 2024) specializing in AI/ML systems, large-scale data pipelines, and full-stack development. Currently building machine learning platforms and processing billion-scale datasets while seeking opportunities in AI strategy and Answer Engine Optimization.",
  email: "karalar.alpefe@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/efekaralar",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alp-efe-karalar/",
    icon: "linkedin"
  },
  {
    name: "CydoniaTech",
    url: "https://cydoniatech.org",
    icon: "globe"
  }
];

export const skills: Skill[] = [
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

export const experiences: Experience[] = [
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

export const projects: Project[] = [
  {
    id: "project-lkml-dashboard",
    title: "LKML Dashboard - AI-Powered Linux Kernel Development Tool",
    shortDescription: "Full-stack platform democratizing Linux kernel contribution through AI summarization of 600+ daily mailing list emails",
    fullDescription: "Built production-ready full-stack application addressing critical barrier to Linux kernel contribution: overwhelming volume of 500-600+ daily emails. Features automated email parsing, intelligent thread reconstruction, and AI-powered summarization using Google Gemini API. Implemented caching achieving 90% cost reduction and 80-90% cache hit rate. Flask REST API with 10 endpoints, full-text search via SQLite FTS5. React/TypeScript frontend with Auth0 authentication. Processes 101 emails into 82 threads with 100% AI coverage in <10 minutes, reducing developer time from 3 hours to 15 minutes daily.",
    image: "/images/projects/lkml-dashboard.jpg",
    techStack: ["Python", "Flask", "React", "TypeScript", "Google Gemini API", "Auth0", "SQLite", "Tailwind CSS"],
    category: ["fullstack", "ml"],
    timeline: "Hackathon project",
    githubUrl: "https://github.com/EArakoni/OSH",
    demoUrl: "https://github.com/EArakoni/OSH"
  },
  {
    id: "project-rust-load-balancer",
    title: "Load Balancer & Reverse Proxy in Rust",
    shortDescription: "High-performance HTTP load balancer built from scratch with 10,000+ concurrent connection handling",
    fullDescription: "Architected production-ready Layer 7 load balancer in Rust using Tokio async runtime. Handles 10,000+ concurrent connections with ~20MB memory footprint. Features HTTP/1.1 parsing, four load balancing algorithms, intelligent health checking, TLS/SSL termination with RustLS, and connection pooling achieving 60% latency reduction. Achieved <5ms P99 latency at 10,000 req/s throughput.",
    image: "/images/projects/rust-load-balancer.jpg",
    techStack: ["Rust", "Tokio", "HTTP/1.1", "TLS/SSL", "RustLS", "Docker"],
    category: ["systems", "devops"],
    timeline: "3 weeks",
    githubUrl: "https://github.com/EfeKaralar/rust-proxy",
    demoUrl: "https://github.com/EfeKaralar/rust-proxy"
  },
  {
    id: "project-mdadm",
    title: "Linux RAID Storage System in C",
    shortDescription: "Low-level RAID device emulator with LRU caching achieving 87.9% cache hit rate",
    fullDescription: "Developed full-featured linear RAID device emulator in C integrating 16 simulated JBOD disks. Implemented write-through caching with custom LRU eviction policy, reducing average read latency by 30% with up to 87.9% cache hit rate. Comprehensive testing ensuring data integrity and fault isolation at systems level.",
    image: "/images/projects/mdadm-storage.jpg",
    techStack: ["C", "Memory Management", "RAID", "LRU Cache", "Systems Programming", "Unix/Linux"],
    category: ["systems"],
    timeline: "3 weeks",
    githubUrl: "https://github.com/efekaralar/mdadm-linear-device",
    demoUrl: "https://github.com/efekaralar/mdadm-linear-device"
  },
  {
    id: "project-music-rnn",
    title: "Classical Music Generation with Neural Networks",
    shortDescription: "Deep learning system for AI-powered piano composition using PyTorch and MAESTRO dataset",
    fullDescription: "Built music generation system using RNNs learning from 200+ hours of piano performances. Processes 7 million notes from MAESTRO dataset with custom MIDI processing pipeline. LSTM architecture with multi-head outputs for pitch, timing, and duration prediction. Features temperature-based sampling, tempo scaling, and comprehensive visualization tools. Demonstrates practical sequence modeling in creative domains.",
    image: "/images/projects/music-generation.jpg",
    techStack: ["PyTorch", "Python", "LSTM", "PrettyMIDI", "NumPy", "Deep Learning"],
    category: ["ml"],
    timeline: "Academic semester",
    githubUrl: "https://github.com/EfeKaralar/EE456-final-project",
    demoUrl: "https://github.com/EfeKaralar/EE456-final-project"
  },
  {
    id: "project-cicd",
    title: "Automated CI/CD Portfolio Deployment",
    shortDescription: "Enterprise-grade DevOps pipeline with Docker, GitHub Actions, and zero-downtime deployments",
    fullDescription: "Architected complete DevOps solution featuring containerized Next.js with multi-stage Docker builds, automated CI/CD via GitHub Actions, Nginx reverse proxy with SSL/TLS. Security hardened with UFW firewall, Fail2Ban, non-root containers. Achieved 2-minute deployment cycles with 99.9% uptime.",
    image: "/images/projects/cicd-pipeline.jpg",
    techStack: ["Docker", "GitHub Actions", "Nginx", "Let's Encrypt", "Ubuntu", "Next.js"],
    category: ["devops"],
    timeline: "1 week",
    githubUrl: "https://github.com/efekaralar/portfolio",
    demoUrl: "https://alpkaralar.com"
  },
  {
    id: "project-research-summarizer",
    title: "Research Summarizer - AI-Powered Paper Analysis",
    shortDescription: "Full-stack platform for automated research paper discovery and comparative analysis",
    fullDescription: "Built web application automating academic literature review with arXiv API integration, PDF processing, and multi-LLM summarization (DeepSeek, Claude, GPT). Structured extraction pipeline identifies key findings and methodologies. SQLAlchemy persistence with SQLite/PostgreSQL support. React frontend with Chakra UI. Deployed at researchtldr.xyz with Docker and Nginx. Reduces literature review time by 10x.",
    image: "/images/projects/research-summarizer.jpg",
    techStack: ["Python", "FastAPI", "React", "Chakra UI", "SQLAlchemy", "PostgreSQL", "Docker", "DeepSeek API", "Claude API"],
    category: ["fullstack", "ml"],
    timeline: "Personal project",
    githubUrl: "https://github.com/EfeKaralar/Research-Summarizer-App/",
    demoUrl: "https://researchtldr.xyz/"
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'devops', label: 'DevOps' },
  { id: 'systems', label: 'Systems Engineering' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'fullstack', label: 'Full-Stack' }
] as const;