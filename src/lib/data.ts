// src/lib/data.ts

import { SocialLink, Skill, Project, Experience } from '@/types';

export const personalInfo = {
  name: "Alp Karalar",
  title: "Software Engineer",
  objective: "Recent Computer Engineering graduate from Penn State University with a passion for building scalable systems and innovative solutions. Experienced in DevOps, Machine Learning, and Full-Stack Development, I thrive on solving complex technical challenges and delivering high-quality software.",
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
  // DevOps Projects
  {
    id: "project-1",
    title: "Kubernetes Auto-Scaler",
    shortDescription: "Intelligent auto-scaling system for K8s clusters based on custom metrics",
    fullDescription: "Built a sophisticated auto-scaling solution that monitors custom application metrics and automatically scales Kubernetes deployments. Integrates with Prometheus for metrics collection and implements predictive scaling algorithms to handle traffic spikes proactively. Reduced infrastructure costs by 35% while maintaining 99.9% uptime.",
    image: "/images/projects/k8s-scaler.jpg",
    techStack: ["Kubernetes", "Go", "Prometheus", "Docker", "Helm"],
    category: "devops",
    timeline: "3 months",
    githubUrl: "https://github.com/alpkaralar/k8s-autoscaler"
  },
  {
    id: "project-2",
    title: "CI/CD Pipeline Orchestrator",
    shortDescription: "Custom CI/CD pipeline with advanced deployment strategies",
    fullDescription: "Designed and implemented a comprehensive CI/CD pipeline orchestration system supporting blue-green deployments, canary releases, and automatic rollbacks. Features include integration testing automation, security scanning, and multi-environment deployment with approval workflows.",
    image: "/images/projects/cicd-pipeline.jpg",
    techStack: ["GitHub Actions", "Docker", "Terraform", "AWS", "Python"],
    category: "devops",
    timeline: "2 months"
  },
  {
    id: "project-3",
    title: "Infrastructure as Code Framework",
    shortDescription: "Reusable IaC modules for rapid cloud infrastructure deployment",
    fullDescription: "Created a modular Infrastructure as Code framework that enables rapid deployment of production-ready cloud infrastructure. Includes reusable modules for networking, compute, databases, and monitoring. Deployed across 15+ projects with consistent security and compliance standards.",
    image: "/images/projects/iac-framework.jpg",
    techStack: ["Terraform", "AWS", "Ansible", "Python", "Bash"],
    category: "devops",
    timeline: "4 months"
  },

  // Machine Learning Projects
  {
    id: "project-4",
    title: "Computer Vision Object Tracker",
    shortDescription: "Real-time multi-object tracking system with custom neural network",
    fullDescription: "Developed a real-time object detection and tracking system using custom-trained YOLOv8 model. Achieved 92% accuracy on custom dataset and processes 60+ FPS on edge devices. Implemented kalman filtering for smooth tracking and object re-identification capabilities.",
    image: "/images/projects/cv-tracker.jpg",
    techStack: ["Python", "PyTorch", "OpenCV", "CUDA", "TensorRT"],
    category: "ml",
    timeline: "5 months",
    demoUrl: "https://demo.alpkaralar.com/cv-tracker"
  },
  {
    id: "project-5",
    title: "NLP Sentiment Analyzer",
    shortDescription: "Advanced sentiment analysis engine with transformer architecture",
    fullDescription: "Built an enterprise-grade sentiment analysis system using fine-tuned BERT models. Handles multiple languages and achieves 94% accuracy on industry-standard benchmarks. Deployed as microservice handling 10k+ requests per second with sub-100ms latency.",
    image: "/images/projects/nlp-sentiment.jpg",
    techStack: ["Python", "TensorFlow", "HuggingFace", "FastAPI", "Docker"],
    category: "ml",
    timeline: "3 months"
  },
  {
    id: "project-6",
    title: "Predictive Maintenance System",
    shortDescription: "ML-powered predictive maintenance for industrial equipment",
    fullDescription: "Designed machine learning pipeline for predicting equipment failures using sensor data. Implemented ensemble methods combining LSTM networks and gradient boosting. Reduced unplanned downtime by 45% and maintenance costs by 30% in pilot deployment.",
    image: "/images/projects/pred-maintenance.jpg",
    techStack: ["Python", "scikit-learn", "Pandas", "PostgreSQL", "Grafana"],
    category: "ml",
    timeline: "6 months"
  },

  // Systems Engineering Projects
  {
    id: "project-7",
    title: "High-Performance Web Server",
    shortDescription: "Custom HTTP server built from scratch in C++",
    fullDescription: "Implemented a high-performance HTTP/1.1 web server in C++ with epoll-based event loop. Supports connection pooling, zero-copy operations, and handles 50k+ concurrent connections. Includes built-in TLS support and comprehensive logging system.",
    image: "/images/projects/web-server.jpg",
    techStack: ["C++", "Linux", "OpenSSL", "CMake", "Nginx"],
    category: "systems",
    timeline: "4 months",
    githubUrl: "https://github.com/alpkaralar/http-server"
  },
  {
    id: "project-8",
    title: "Distributed Cache System",
    shortDescription: "Redis-like distributed caching system with custom protocol",
    fullDescription: "Built a distributed in-memory caching system with consistent hashing for data distribution. Implements custom binary protocol for efficient serialization and supports replication, persistence, and cluster mode. Benchmarks show 100k+ ops/sec on commodity hardware.",
    image: "/images/projects/dist-cache.jpg",
    techStack: ["Go", "Protocol Buffers", "Redis", "Docker", "Kubernetes"],
    category: "systems",
    timeline: "5 months"
  },
  {
    id: "project-9",
    title: "Process Scheduler Simulator",
    shortDescription: "Educational OS process scheduler with multiple algorithms",
    fullDescription: "Created comprehensive process scheduling simulator implementing FCFS, SJF, Priority, and Round Robin algorithms. Features visualization of scheduling decisions, context switches, and performance metrics. Used as teaching tool for operating systems course.",
    image: "/images/projects/scheduler.jpg",
    techStack: ["C++", "Qt", "Python", "Matplotlib"],
    category: "systems",
    timeline: "2 months"
  },

  // Full-Stack Projects
  {
    id: "project-10",
    title: "Real-Time Collaboration Platform",
    shortDescription: "Google Docs-like collaborative editing platform",
    fullDescription: "Full-stack real-time collaboration platform with operational transformation for conflict resolution. Features include real-time cursors, comments, version history, and rich text editing. Scales to 1000+ concurrent users per document with WebSocket connections.",
    image: "/images/projects/collab-platform.jpg",
    techStack: ["React", "Node.js", "WebSocket", "MongoDB", "Redis", "AWS"],
    category: "fullstack",
    timeline: "6 months",
    demoUrl: "https://demo.alpkaralar.com/collab"
  },
  {
    id: "project-11",
    title: "E-Commerce Microservices",
    shortDescription: "Scalable e-commerce platform with microservices architecture",
    fullDescription: "Architected and implemented complete e-commerce platform using microservices pattern. Services include user management, product catalog, inventory, payments, and notifications. Implements event-driven architecture with message queues and API gateway for routing.",
    image: "/images/projects/ecommerce.jpg",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "RabbitMQ", "Docker", "Stripe API"],
    category: "fullstack",
    timeline: "8 months"
  },
  {
    id: "project-12",
    title: "Social Analytics Dashboard",
    shortDescription: "Analytics platform for social media performance tracking",
    fullDescription: "Built comprehensive analytics dashboard aggregating data from multiple social media platforms. Features real-time data processing, customizable reports, competitor analysis, and predictive insights using ML models. Processes 1M+ data points daily.",
    image: "/images/projects/analytics-dash.jpg",
    techStack: ["React", "Python", "FastAPI", "PostgreSQL", "Redis", "Chart.js"],
    category: "fullstack",
    timeline: "4 months"
  }
];

export const experiences: Experience[] = [
  {
    id: "edu-1",
    type: "education",
    title: "Bachelor of Science in Computer Engineering",
    organization: "Pennsylvania State University",
    location: "State College, PA",
    startDate: "2020-08",
    endDate: "2024-12",
    description: [
      "GPA: 3.8/4.0",
      "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Machine Learning, Database Systems",
      "Dean's List: Fall 2020, Spring 2021, Fall 2022, Spring 2023"
    ]
  },
  {
    id: "work-1",
    type: "work",
    title: "Software Engineering Intern",
    organization: "Tech Company Inc.",
    location: "Remote",
    startDate: "2023-06",
    endDate: "2023-08",
    description: [
      "Developed microservices using Node.js and Docker, improving system modularity and deployment efficiency by 40%",
      "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time from 2 hours to 15 minutes",
      "Collaborated with cross-functional teams to design and implement RESTful APIs serving 100k+ daily requests",
      "Wrote comprehensive unit and integration tests achieving 85% code coverage"
    ]
  },
  {
    id: "work-2",
    type: "work",
    title: "Founder & Developer",
    organization: "CydoniaTech",
    location: "State College, PA",
    startDate: "2022-01",
    endDate: "present",
    current: true,
    description: [
      "Founded solo software consulting company delivering custom solutions for small businesses",
      "Architected and deployed 5+ full-stack applications with React, Node.js, and cloud infrastructure",
      "Managed complete project lifecycle from requirements gathering to deployment and maintenance",
      "Implemented DevOps best practices including containerization, CI/CD, and monitoring"
    ]
  },
  {
    id: "work-3",
    type: "work",
    title: "Research Assistant",
    organization: "PSU Computer Science Department",
    location: "State College, PA",
    startDate: "2022-09",
    endDate: "2023-05",
    description: [
      "Conducted research on machine learning applications in computer vision under Dr. Jane Smith",
      "Implemented and optimized deep learning models using PyTorch, improving accuracy by 12%",
      "Co-authored research paper on novel object detection techniques (pending publication)",
      "Presented findings at university research symposium"
    ]
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'devops', label: 'DevOps' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'systems', label: 'Systems Engineering' },
  { id: 'fullstack', label: 'Full-Stack' }
] as const;
