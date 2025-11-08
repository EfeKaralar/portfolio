// src/lib/data.ts

import { SocialLink, Skill, Project, Experience } from '@/types';

export const personalInfo = {
  name: "Alp Karalar",
  title: "Software Engineer",
  objective: "Recent Computer Engineering graduate from Penn State University with a passion for building scalable systems and innovative solutions. Experienced in DevOps, Machine Learning, and fullstack Development, I thrive on solving complex technical challenges and delivering high-quality software.",
  email: "karalar.alpefe@gmail.com",
  resumeUrl: "/resume.pdf", // Update this path when you add your resume
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
    items: ["Python", "TypeScript", "C", "Bash", "Java"]
  },
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"]
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "FastAPI", "Django", "PostgreSQL", "SQLite"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "AWS", "GitHub Actions"]
  },
  {
    category: "Machine Learning & AI",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenCV"]
  },
  {
    category: "Tools & Other",
    items: ["Git", "Linux", "Nginx", "GraphQL", "REST APIs", "Microservices"]
  }
];

export const projects: Project[] = [
  // Highlighted projects 
  {
    id: "project-cicd",
    title: "Automated CI/CD Portfolio Deployment",
    shortDescription: "Enterprise-grade DevOps pipeline with Docker, GitHub Actions, and zero-downtime deployments",
    fullDescription: "Architected and implemented a complete DevOps solution for portfolio website deployment featuring containerized Next.js application with multi-stage Docker builds, automated CI/CD pipeline using GitHub Actions, Nginx reverse proxy with SSL/TLS termination, and comprehensive monitoring. The pipeline includes automated testing, building, and deployment with health checks ensuring zero-downtime updates. Security hardened with UFW firewall, Fail2Ban, and non-root container execution. Achieved 2-minute deployment cycles from code push to production with 99.9% uptime.",
    image: "/images/projects/cicd-pipeline.jpg",
    techStack: ["Docker", "GitHub Actions", "Nginx", "Let's Encrypt", "Ubuntu", "Bash", "YAML", "Next.js"],
    category: ["devops"],
    timeline: "1 week",
    githubUrl: "https://github.com/efekaralar/portfolio",
    demoUrl: "https://alpkaralar.com"
  },
  {
    id: "project-rust-load-balancer",
    title: "Load Balancer & Reverse Proxy in Rust",
    shortDescription: "High-performance http load balancer built from scratch in rust with advanced traffic management and zero-downtime failover",
    fullDescription: "Architected and implemented a production-ready layer 7 load balancer and reverse proxy entirely in rust, leveraging tokio's async runtime for handling 10,000+ concurrent connections with minimal memory footprint (~20mb for 1000 connections vs 2gb for equivalent thread-based solution). the system features http/1.1 protocol parsing with keep-alive support, four load balancing algorithms (round-robin, least connections, weighted distribution, ip hash), and intelligent health checking with automatic backend failover. implemented tls/ssl termination using rustls for secure client connections, connection pooling to backend servers for 60% latency reduction, and comprehensive monitoring via tokio console and structured logging. achieved <5ms p99 latency under load testing (10,000 req/s) and demonstrated practical understanding of distributed systems concepts including service mesh patterns, graceful degradation, and backpressure handling. the project showcases expertise in systems programming, async i/o, network protocols, and building scalable infrastructure components from first principles.",
    image: "/images/projects/rust-load-balancer.jpg",
    techStack: ["rust", "tokio", "http/1.1", "tls/ssl", "rustls", "tcp/ip", "docker", "linux", "systems programming"],
    category: ["systems", "devops"],
    timeline: "3 weeks",
    githubUrl: "https://github.com/EfeKaralar/rust-proxy",
    demoUrl: "https://github.com/EfeKaralar/rust-proxy",
    // highlights: [
    //   "10,000+ concurrent connections with <20mb memory overhead",
    //   "4 load balancing algorithms with automatic failover",
    //   "tls termination with zero-copy forwarding",
    //   "99.9% uptime with intelligent health checking",
    //   "60% latency improvement via connection pooling"
    // ]
  },
  // DevOps Projects

  // Machine Learning Projects
  {
    id: "project-music-rnn",
    title: "Classical Music Generation with RNNs",
    shortDescription: "Deep learning system for AI-powered classical piano composition using PyTorch and the MAESTRO dataset",
    fullDescription: "Architected and implemented a complete music generation system using Recurrent Neural Networks (RNNs) that learns from 200+ hours of virtuosic piano performances. The system processes 7 million individual notes from the MAESTRO dataset, extracting pitch, timing, and duration features through a custom MIDI processing pipeline. Built a sophisticated LSTM architecture with multi-head outputs for simultaneous prediction of three musical attributes using specialized loss functions tailored to each characteristic. Implemented temperature-based sampling for creative control, tempo scaling for natural timing, and comprehensive visualization tools including piano roll analysis and distribution comparisons. The training pipeline features efficient batch processing, model checkpointing, early stopping mechanisms, and caching optimizations for handling large-scale datasets. Achieved functional music generation with configurable randomness and tempo parameters, demonstrating practical applications of sequence modeling in creative domains.",
    image: "/images/projects/music-generation.jpg",
    techStack: ["PyTorch", "Python", "LSTM", "PrettyMIDI", "NumPy", "Pandas", "Matplotlib", "Deep Learning"],
    category: ["ml"],
    timeline: "Academic semester project",
    githubUrl: "https://github.com/EfeKaralar/EE456-final-project",
    demoUrl: "https://github.com/EfeKaralar/EE456-final-project"
  },
  {
    id: "project-mlp-scratch",
    title: "Multi-Layer Perceptron from Scratch",
    shortDescription: "Pure Python implementation of a neural network with backpropagation, built without ML frameworks",
    fullDescription: "Implemented a complete Multi-Layer Perceptron (MLP) neural network from the ground up using only Python and NumPy, without relying on high-level ML frameworks like PyTorch or TensorFlow. Built a modular architecture featuring 2 hidden layers with forward propagation for inference and backpropagation for training. Developed all core components including activation functions, loss computation, gradient calculations, and weight update mechanisms. The implementation demonstrates deep understanding of neural network fundamentals including matrix operations, chain rule application for gradient descent, and layer-wise computation. Extended from a previous perceptron project by adding hidden layers and implementing the full backpropagation algorithm. Trained and validated the network on synthetic datasets to verify correct implementation of learning algorithms.",
    image: "/images/projects/mlp-scratch.jpg",
    techStack: ["Python", "NumPy", "Neural Networks", "Backpropagation", "Machine Learning Fundamentals"],
    category: ["ml"],
    timeline: "Academic assignment",
    githubUrl: "https://github.com/EfeKaralar/EE456-MP2",
    demoUrl: "https://github.com/EfeKaralar/EE456-MP2"
  },
  // Systems Engineering Projects
  {
    id: "project-mdadm",
    title: "Linux-Style RAID Storage System in C",
    shortDescription: "Low-level reimplementation of Linux mdadm with optimized caching and block-level I/O",
    fullDescription: "Developed a full-featured linear RAID device emulator inspired by Linux mdadm, entirely in C. The system integrates 16 simulated JBOD disks into a single virtual block device, supporting mounting, reading, writing, and caching operations. Implemented a robust write-through caching mechanism with a custom Least Recently Used (LRU) eviction policy, reducing average read latency by over 30% and achieving up to 87.9% cache hit rate under randomized workloads. Comprehensive testing was performed using both unit and trace-driven verification tools to ensure data integrity, fault isolation, and compliance with system-level I/O correctness. Emphasized modularity, safety, and performance tuning to simulate enterprise-grade RAID software behavior at the systems level.",
    image: "/images/projects/mdadm-storage.jpg",
    techStack: ["C", "Memory Management", "RAID", "LRU Cache", "Systems Programming", "Testing Frameworks", "Unix/Linux"],
    category: ["systems"],
    timeline: "3 weeks",
    githubUrl: "https://github.com/efekaralar/mdadm-linear-device",
    demoUrl: "https://github.com/efekaralar/mdadm-linear-device#readme"
  },

  // fullstack Projects
  {
    id: "project-lkml-dashboard",
    title: "LKML Dashboard - AI-Powered Kernel Development Tool",
    shortDescription: "fullstack platform democratizing Linux kernel contribution through AI summarization of 600+ daily mailing list emails",
    fullDescription: "Built a production-ready fullstack application that solves a critical barrier to Linux kernel contribution: the overwhelming volume of 500-600+ daily emails on the Linux Kernel Mailing List (LKML). Architected a complete solution featuring automated email parsing (EML, Atom, mbox formats), intelligent thread reconstruction, and AI-powered summarization using Google Gemini API. Implemented advanced caching strategy achieving 90% cost reduction and 80-90% cache hit rate. Designed Flask REST API with 10 endpoints supporting pagination, CORS, and full-text search via SQLite FTS5 indexes. Built React/TypeScript frontend with Tailwind CSS and integrated Auth0 for secure social authentication (GitHub, Google). The system processes 101 emails into 82 coherent threads with 100% AI coverage in under 10 minutes. Achieved sub-second search performance and reduced developer time from 3 hours to 15 minutes daily. Features context-aware summarization that identifies patches, bugs, security issues, affected subsystems, and action items. Designed for scalability to handle 10,000+ emails at ~$9/month operational cost.",
    image: "/images/projects/lkml-dashboard.jpg",
    techStack: ["Python", "Flask", "React", "TypeScript", "Google Gemini API", "Auth0", "SQLite", "Tailwind CSS", "REST API"],
    category: ["fullstack"],
    timeline: "Hackathon project",
    githubUrl: "https://github.com/EArakoni/OSH",
    demoUrl: "https://github.com/EArakoni/OSH",
  },
  {
    id: "project-research-summarizer",
    title: "Research Summarizer - AI-Powered Academic Paper Analysis",
    shortDescription: "fullstack platform for automated research paper discovery, summarization, and comparative analysis using multiple LLM providers",
    fullDescription: "Built a production-deployed web application that revolutionizes academic literature review by automating the discovery, processing, and analysis of research papers. Architected a FastAPI backend that integrates with arXiv API to fetch papers, processes PDF documents with PyPDF2, and leverages multiple LLM providers (DeepSeek, Anthropic Claude, OpenAI GPT) for intelligent summarization. Implemented structured extraction pipeline that identifies key findings, methodologies, and implications from academic papers, with advanced comparative analysis feature that discovers connections and relationships across multiple papers. Designed SQLAlchemy-based persistence layer with support for both SQLite (development) and PostgreSQL (production) to track search history and cache summaries. Built modern React frontend with Chakra UI component library, featuring intuitive search interface, real-time processing status, markdown rendering for summaries, and comprehensive search history management. Deployed to production at researchtldr.xyz using Docker containerization and Nginx as reverse proxy. The platform enables researchers to reduce literature review time by 10x, efficiently processing multiple papers simultaneously while maintaining context and identifying cross-paper insights that might be missed in manual review.",
    image: "/images/projects/research-summarizer.jpg",
    techStack: ["Python", "FastAPI", "React", "Chakra UI", "SQLAlchemy", "PostgreSQL", "Docker", "Nginx", "DeepSeek API", "Claude API", "OpenAI API", "arXiv API", "PyPDF2"],
    category: ["fullstack", "ml"],
    timeline: "Personal project",
    githubUrl: "https://github.com/EfeKaralar/Research-Summarizer-App/",
    demoUrl: "https://researchtldr.xyz/"
  },
];

export const experiences: Experience[] = [
  {
    id: "work-1",
    type: "work",
    title: "Software Engineer",
    organization: "DementiAnalytics",
    location: "Remote",
    startDate: "2025-02",
    endDate: "present",
    current: true,
    description: [
      "Engineered full-stack mobile application using React and Expo, integrating a 5-stage ML pipeline that analyzes audio, text, and behavioral data to provide dementia risk assessments",
      "Designed and implemented RESTful APIs connecting frontend mobile experience to Python-based ML algorithms trained on validated clinical research methodologies including the Boston Cookie Theft Test",
      "Collaborated directly with PhD researchers and clinical experts to translate complex algorithmic outputs into user-friendly mobile interfaces while maintaining medical accuracy",
      "Ensured HIPAA compliance and data security standards by architecting solutions on Microsoft Azure's healthcare-certified infrastructure for handling Protected Health Information (PHI)"
    ]
  },
  {
    id: "work-2",
    type: "work",
    title: "Founder & Developer",
    organization: "CydoniaTech",
    location: "State College, PA",
    startDate: "2025-01",
    endDate: "present",
    current: true,
    description: [
      "Founded specialized hardware-software company delivering professional-grade guitar amplification solutions at consumer prices",
      "Engineered custom embedded Linux system (RT Kernel Armbian) on Orange Pi Zero achieving <5ms audio latency—matching performance of professional amplification hardware costing 10-20x more",
      "Developed automated boot and launch sequences integrating JACK Audio Connection Kit and Guitarix for seamless, production-ready guitar processing",
      "Reduced barrier to entry for high-quality guitar amplification by 90% compared to traditional dedicated hardware solutions"
    ]
  },
  {
    id: "edu-1",
    type: "education",
    title: "Bachelor of Science in Computer Engineering",
    organization: "Pennsylvania State University",
    location: "State College, PA",
    startDate: "2020-08",
    endDate: "2024-12",
    description: [
      "Senior Capstone: Advanced Vehicle Team (AVT) Perception Department - Developed real-time computer vision models for autonomous vehicle navigation, achieving 3rd place overall in SAE AutoDrive Challenge II Competition (Year 3)",
      "Executive Board Member: Pi Delta Psi Fraternity & Turkish Student Association",
      "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Machine Learning, Database Systems"
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
      "Managed team of learning assistants while overseeing complete course operations including exam/lab/homework creation, grading infrastructure, and quality assurance",
      "Delivered lectures and created supplementary video content when primary instructor was unavailable, receiving consistent feedback for clarity and approachability",
      "Developed and implemented assessment materials for digital logic design and circuit analysis, ensuring alignment with course learning objectives"
    ]
  },
  {
    id: "work-4",
    type: "work",
    title: "Software Engineering Intern & Co-op",
    organization: "Bakkal",
    location: "State College, PA",
    startDate: "2023-06",
    endDate: "2023-11",
    description: [
      "Led quality assurance initiatives by developing automated testing frameworks for multi-platform application suite (customer, driver, and merchant interfaces)",
      "Implemented frontend features using React and JavaScript across three distinct user-facing applications",
      "Collaborated with small, agile development team to rapidly iterate on features and resolve critical bugs in production environment"
    ]
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'devops', label: 'DevOps' },
  { id: 'systems', label: 'Systems Engineering' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'fullstack', label: 'Full-Stack' }
] as const;
