import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ProjectModal from '../ProjectModal';

const Projects = () => {
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const projectData = [
        {
            title: "AI Support Assistant",
            description: "Sophisticated multi-purpose AI support platform with specialized medical data processing.",
            longDescription: "A multi-modal AI workstation featuring three specialized modes: General Assistant (with global memory), Docs Specialist (RAG-based knowledge retrieval), and Prescription Extractor (multimodal OCR for medical data extraction). Built for high-performance AI interactions and structured data processing.",
            tech: ["React", "Node.js", "Gemini", "OpenAI", "SQLite", "Docker"],
            features: [
                "3 Specialized AI Modes (Assistant, RAG, Medical)",
                "Handwritten Prescription OCR to JSON extraction",
                "Global Context Persistence across sessions",
                "Glassmorphic Medical Emerald UI theme"
            ],
            live: "https://ai-support-assistant-hp80.onrender.com/",
            github: "https://github.com/Karthik4223/ai-support-assistant"
        },
        {
            title: "User Management System",
            description: "Full-stack RBAC system with Spring Boot & React.js.",
            longDescription: "A comprehensive Role-Based Access Control (RBAC) system built for enterprise security. It manages users, roles, and permissions dynamically through a secure REST API.",
            tech: ["Java", "Spring Boot", "React", "MySQL"],
            features: [
                "Dynamic Role & Permission mapping",
                "JWT Authentication & Spring Security",
                "Real-time access level updates",
                "Responsive Admin Dashboard"
            ],
            github: "https://github.com/Karthik4223/Emp_Manage"
        },
        {
            title: "Disease Classification",
            description: "ML ensemble model achieving 82% accuracy in clinical classification.",
            longDescription: "Developed an advanced Machine Learning ensemble model to classify 33 different disease types with high precision using clinical semantics.",
            tech: ["Python", "ML", "Jupyter", "Pandas"],
            features: [
                "Ensemble model (Random Forest, XGBoost)",
                "Precise semantics classification",
                "Pre-processing pipeline for clinical data",
                "82% Accuracy across 33 categories"
            ],
            github: "https://github.com/Karthik4223/Disease_Sementic_Type_Classifiation",
            publication: "https://ieeexplore.ieee.org/document/10947870"
        },
        // {
        //     title: "Library Management",
        //     description: "Automated inventory control system for book issuance and inventory.",
        //     longDescription: "A full-scale library automation system built using Java Servlets and JSP, handling complex transactions for thousands of books and members.",
        //     tech: ["Java", "MySQL", "JSP", "Servlets"],
        //     features: [
        //         "Automated book issuance & returns",
        //         "Fine calculation system",
        //         "Inventory reporting & search",
        //         "Member activity tracking"
        //     ],
        //     github: "https://github.com/Karthik4223"
        // },
        {
            title: "Cancer Diagnosis",
            description: "High-precision ML model for early malignant vs benign detection.",
            longDescription: "An IEEE publication-based project that leverages ensemble machine learning to distinguish breast cancer types with a state-of-the-art accuracy of 98.8%.",
            tech: ["Jupyter", "Ensemble", "Python"],
            features: [
                "98.8% Classification Accuracy",
                "Feature Engineering for medical imaging",
                "Robust cross-validation pipeline",
                "IEEE research-backed methodology"
            ],
            github: "https://github.com/Karthik4223/Breast_Cancer_Classification",
            publication: "https://ieeexplore.ieee.org/document/10985553"
        }
    ];

    useEffect(() => {
        const content = sectionRef.current.querySelectorAll('.animate-item');

        gsap.fromTo(content,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1, opacity: 1,
                duration: 1, stagger: 0.1, ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 640;
            const currentScroll = scrollRef.current.scrollLeft;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section ref={sectionRef} className="portfolio-section projects-section">
            <div className="section-content">
                <h2 className="section-title animate-item">PROJECTS</h2>

                <div className="projects-container-wrapper">
                    <button className="side-nav left-nav animate-item" onClick={() => scroll('left')} aria-label="Previous Project">
                        <div className="nav-arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </div>
                    </button>

                    <div ref={scrollRef} className="projects-grid" data-lenis-prevent>
                        {projectData.map((project, index) => (
                            <div
                                key={index}
                                className="project-card animate-item"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="card-top">
                                    <div className="project-number">0{index + 1}</div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                                <div className="tech-tags">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="view-detail">
                                    <span>VIEW PROJECT</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="side-nav right-nav animate-item" onClick={() => scroll('right')} aria-label="Next Project">
                        <div className="nav-arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    </button>
                </div>

                <div className="scroll-hint horizontal animate-item">
                    <span>EXPLORE PROJECTS</span>
                    <div className="horizontal-line"></div>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
