import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Education = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const content = sectionRef.current.querySelectorAll('.animate-item');

        gsap.fromTo(content,
            { y: 100, opacity: 0 },
            {
                y: 0, opacity: 1,
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
        <section ref={sectionRef} className="portfolio-section education-section">
            <div className="section-content">
                <h2 className="section-title animate-item">EDUCATION</h2>

                <div className="education-timeline">
                    <div className="education-item animate-item">
                        <div className="edu-year">2021 – 2025</div>
                        <h3>B.Tech in Computer Science</h3>
                        <p className="highlight">Vignan's Foundation for Science, Technology and Research</p>
                        <p className="meta">CGPA: 8.7 | Vadlamudi</p>
                    </div>

                    <div className="education-item animate-item">
                        <div className="edu-year">2019 – 2021</div>
                        <h3>Intermediate (MPC)</h3>
                        <p className="highlight">Vignan Co-operative Junior College</p>
                        <p className="meta">Percentage: 95.9% | Vadlamudi</p>
                    </div>

                    <div className="education-item animate-item">
                        <div className="edu-year">2019</div>
                        <h3>SSC (10th Standard)</h3>
                        <p className="highlight">Apex High School</p>
                        <p className="meta">CGPA: 10.0 | Ongole</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
