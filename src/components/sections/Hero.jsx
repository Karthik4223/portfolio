import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const content = sectionRef.current.querySelectorAll('.animate-item');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                toggleActions: "play reverse play reverse"
            }
        });

        tl.fromTo(content,
            { y: 100, opacity: 0, filter: 'blur(20px)', scale: 0.8 },
            {
                y: 0, opacity: 1, filter: 'blur(0px)', scale: 1,
                duration: 1.8, stagger: 0.15, ease: "expo.out"
            }
        );

        // Subtle floating animation for image
        gsap.to(imgRef.current, {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, []);

    return (
        <section ref={sectionRef} className="portfolio-section hero-section">
            <div className="section-content hero-layout">
                {/* Image now on the left in DOM */}
                <div className="hero-visual">
                    <div ref={imgRef} className="profile-image-container animate-item">
                        <div className="image-glow"></div>
                        <img src={`${import.meta.env.BASE_URL}Karthik1.jpg`} alt="Karthik Malasani" className="profile-img" />
                        <div className="corner-accent top-left"></div>
                        <div className="corner-accent bottom-right"></div>
                    </div>
                </div>

                {/* Info now on the right in DOM */}
                <div className="hero-info">
                    <div className="hero-text-content">
                        <h1 className="main-title animate-item">
                            KARTHIK <br />
                            <span className="last-name">MALASANI</span>
                        </h1>
                    </div>

                    <div className="badge-container animate-item">
                        <span className="role-tag">FULL STACK DEVELOPER</span>
                        <span className="availability-dot"></span>
                    </div>

                    <div className="scroll-indicator animate-item">
                        <span className="scroll-text">BEGIN EXPLORATION</span>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
