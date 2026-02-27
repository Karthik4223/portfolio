import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const content = sectionRef.current.querySelectorAll('.animate-item');

        gsap.fromTo(content,
            { x: -50, opacity: 0 },
            {
                x: 0, opacity: 1,
                duration: 1.2, stagger: 0.2, ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="portfolio-section experience-section">
            <div className="section-content">
                <h2 className="section-title animate-item">EXPERIENCE</h2>

                <div className="experience-timeline">
                    <div className="experience-item animate-item">
                        <div className="exp-dot"></div>
                        <div className="exp-content">
                            <div className="exp-header">
                                <div className="exp-title-group">
                                    <h3>Software Development Intern</h3>
                                    <p className="company">Optival Health Solutions (MedPlus)</p>
                                </div>
                                <span className="date">June 2025 – Dec 2025</span>
                            </div>
                            <div className="exp-description">
                                <p>Integrated smart wearable ecosystems into a native Android environment, specifically focusing on the <strong>Smart Ring</strong> platform.</p>
                                <ul className="exp-details">
                                    <li>Developed robust <strong>Data Reading Layers</strong> using Bluetooth Low Energy (BLE) to interface with smart ring hardware.</li>
                                    <li>Implemented complex <strong>Binary Data Parsing</strong> to convert raw device packets into meaningful health metrics.</li>
                                    <li>Architected a <strong>Data Analytics Engine</strong> to present health data from a clinical perspective, providing deep insights into user wellness.</li>
                                    <li>Engineered <strong>Custom Visualization Components</strong> using SVG and Canvas to render high-performance health trend graphs.</li>
                                    <li>Collaborated on the core Android app backend using <strong>Spring Boot</strong> and <strong>MySQL</strong> for seamless data synchronization.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="experience-item animate-item">
                        <div className="exp-dot"></div>
                        <div className="exp-content">
                            <div className="exp-header">
                                <div className="exp-title-group">
                                    <h3>Teaching Assistant</h3>
                                    <p className="company">VFSTR University</p>
                                </div>
                                <span className="date">Sept 2024 – April 2025</span>
                            </div>
                            <div className="exp-description">
                                <p>Mentored undergraduate students in core computer science disciplines.</p>
                                <ul className="exp-details">
                                    <li>Led laboratory sessions for <strong>DBMS</strong> and <strong>Competitive Programming</strong>.</li>
                                    <li>Guided students in architecting database solutions using <strong>MySQL</strong> and normalized schemas.</li>
                                    <li>Facilitated problem-solving workshops focusing on <strong>Data Structures and Algorithms (DSA)</strong>.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
