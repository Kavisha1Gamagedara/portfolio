import type { Experience, Education, SkillGroup } from '../types';

export const experienceData: Experience[] = [
  {
    period: '2023 — Present',
    title: 'Agentic AI & Predictive Systems Developer',
    company: 'Applied AI & Research Projects',
    location: 'Sri Lanka',
    description: 'Engineered an agentic AI solution using multi-agent LLM workflows and NLP techniques (NER, semantic retrieval) to interpret diagnostic text and automate triage. Designed SARIMAX time-series forecasting models with weather and biological lag features for Dengue risk prediction, integrated with a React Native mobile frontend. Trained Random Forest and SVM clinical classifiers deployed via FastAPI and Docker.',
    skills: ['Python', 'FastAPI', 'Docker', 'scikit-learn', 'TensorFlow', 'SARIMAX', 'Multi-Agent LLMs', 'React Native'],
  },
  {
    period: '2023 — Present',
    title: 'Full-Stack Web & Security Architecture Developer',
    company: 'Software Engineering Projects',
    location: 'Sri Lanka',
    description: 'Developed Modular Web Security Framework (SecureKit) featuring an authentication engine, audit telemetry, AES-256-GCM encryption, JWT authentication, 2FA, and geo-blocking. Built MERN e-commerce platform with interactive SVG customization library and AI design generation. Collaborated in an agile team on a campus management system using React, Spring Boot, and Git.',
    skills: ['React', 'Node.js', 'Spring Boot', 'TypeScript', 'AES-256-GCM', 'MERN Stack', 'Git', 'JWT / 2FA'],
  },
  {
    period: '2023 — Present',
    title: 'Data Science Undergraduate & Analytics Specialist',
    company: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Sri Lanka',
    description: 'Bridging the gap between advanced statistical modeling and production software engineering. Conducting statistical analysis including ANOVA and regression modeling, structured querying across relational databases (MySQL, MS SQL Server, Oracle SQL), and predictive modeling for real-world datasets.',
    skills: ['R Programming', 'ANOVA', 'Regression Modeling', 'MySQL', 'MS SQL Server', 'Oracle SQL', 'JIRA'],
  },
];

export const educationData: Education[] = [
  {
    period: '2023 — Present',
    degree: 'Bachelor of Science (Honours) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Sri Lanka',
    description: 'Specialized in Data Science. Hands-on focus on machine learning algorithms, deep learning, statistical modeling, data structures, and production software engineering.',
  },
  {
    period: '2013 — 2021',
    degree: 'G.C.E. Advanced Level (Physical Science Stream)',
    institution: 'Royal College – Colombo 07',
    location: 'Colombo 07, Sri Lanka',
    description: 'Completed Advanced Level secondary education in the Physical Science stream with rigorous foundation in Combined Mathematics, Physics, and Chemistry.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Data Science & Machine Learning',
    skills: [
      { name: 'Python & Data Analysis', level: 95 },
      { name: 'Machine Learning (TensorFlow, scikit-learn)', level: 90 },
      { name: 'Predictive Modeling & SVM / Random Forest', level: 92 },
      { name: 'Time-Series Forecasting (SARIMAX)', level: 88 },
      { name: 'Multi-Agent LLMs & NLP (NER, Retrieval)', level: 86 },
      { name: 'Statistical Analysis (ANOVA, Regression, R)', level: 85 },
    ],
  },
  {
    category: 'Full-Stack & Systems Engineering',
    skills: [
      { name: 'React & React Native', level: 92 },
      { name: 'JavaScript & TypeScript', level: 90 },
      { name: 'Node.js & Express / MERN Stack', level: 88 },
      { name: 'Spring Boot & Java', level: 84 },
      { name: 'C / C++ & Data Structures', level: 82 },
      { name: 'FastAPI, Docker & Web Security (AES-256)', level: 88 },
    ],
  },
  {
    category: 'Databases & Development Tools',
    skills: [
      { name: 'MySQL, MS SQL Server, Oracle SQL', level: 90 },
      { name: 'Version Control (Git & GitHub)', level: 92 },
      { name: 'Agile & PM Tools (JIRA, Confluence, Trello)', level: 88 },
      { name: 'English (Fluent Professional)', level: 95 },
    ],
  },
];
