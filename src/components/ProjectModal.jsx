import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectModal = ({ project, onClose }) => {
    const modalRef = useRef(null);
    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (project) {
            document.body.classList.add('modal-active');
            const tl = gsap.timeline();
            tl.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" })
                .to(modalRef.current, { scale: 1, opacity: 1, duration: 0.6, ease: "expo.out" }, "-=0.2")
                .fromTo(contentRef.current.children,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
                    "-=0.3"
                );
        } else {
            document.body.classList.remove('modal-active');
        }

        return () => {
            document.body.classList.remove('modal-active');
        };
    }, [project]);

    if (!project) return null;

    return (
        <div className="project-modal-overlay" ref={overlayRef} onClick={onClose}>
            <div className="project-modal" ref={modalRef} onClick={(e) => e.stopPropagation()} data-lenis-prevent>
                <button className="modal-close" onClick={onClose}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="modal-content" ref={contentRef}>
                    <div className="modal-badge">CASE STUDY</div>
                    <h2 className="modal-title">{project.title}</h2>

                    <div className="modal-tech">
                        {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                    </div>

                    <div className="modal-body">
                        <h3>Overview</h3>
                        <p>{project.longDescription}</p>

                        <h3>Key Features</h3>
                        <ul>
                            {project.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                    </div>

                    <div className="modal-links">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                <span>GITHUB SOURCE</span>
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn live">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                                <span>LIVE EXPERIENCE</span>
                            </a>
                        )}
                        {project.publication && (
                            <a href={project.publication} target="_blank" rel="noopener noreferrer" className="link-btn live">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                                <span>IEEE PUBLICATION</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
