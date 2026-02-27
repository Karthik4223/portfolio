import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const content = sectionRef.current.querySelectorAll('.animate-item');

        gsap.fromTo(content,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1,
                duration: 1.5, stagger: 0.3, ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="portfolio-section contact-section">
            <div className="section-content">
                <h2 className="section-title animate-item">GET IN TOUCH</h2>
                <div className="contact-links animate-item">
                    <a href="mailto:karthikmalasani21@gmail.com" className="contact-btn">Email Me</a>
                    <p className="meta">9347139149 | Ongole, India</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
