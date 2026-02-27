import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const categories = sectionRef.current.querySelectorAll('.skill-category');
        const tags = sectionRef.current.querySelectorAll('.skill-tag');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                toggleActions: "play reverse play reverse"
            }
        });

        tl.fromTo(categories,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
        )
            .fromTo(tags,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, stagger: 0.05, ease: "back.out(1.7)" },
                "-=0.5"
            );
    }, []);

    const skillData = [
        {
            category: "Core Backend",
            skills: ["Java", "Spring Boot", "Node.js", "MySQL"]
        },
        {
            category: "Frontend & Web",
            skills: ["React.js", "JavaScript", "HTML5", "CSS3"]
        },
        {
            category: "Mobile & Apps",
            skills: ["React Native", "Android Development"]
        },
        {
            category: "DevOps & Cloud",
            skills: ["AWS", "Docker", "Git"]
        },
        {
            category: "AI & Intelligence",
            skills: ["Python", "AI", "ML"]
        }
    ];

    return (
        <section ref={sectionRef} className="portfolio-section skills-section">
            <div className="section-content">
                <h2 className="section-title animate-item">CORE EXPERTISE</h2>

                <div className="skills-grid">
                    {skillData.map((group, idx) => (
                        <div key={idx} className="skill-category">
                            <h3 className="category-title">{group.category}</h3>
                            <div className="skill-tags">
                                {group.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="skill-tag-wrapper">
                                        <span className="skill-tag">{skill}</span>
                                        <div className="tag-line"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
