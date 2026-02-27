import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WelcomeText = () => {
    const sectionRef = useRef(null);
    const textLinesRef = useRef([]);

    useEffect(() => {
        const textLines = textLinesRef.current;

        gsap.fromTo(textLines,
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    const addToRefs = (el) => {
        if (el && !textLinesRef.current.includes(el)) {
            textLinesRef.current.push(el);
        }
    };

    return (
        <section ref={sectionRef} className="welcome-section">
            <div className="text-container">
                <h1 ref={addToRefs} className="reveal-text main-title">KARTHIK</h1>
                <h2 ref={addToRefs} className="reveal-text sub-title">CREATIVE DEVELOPER</h2>
                <p ref={addToRefs} className="reveal-text description">BUILDING INTELLIGENT EXPERIENCES</p>
            </div>
        </section>
    );
};

export default WelcomeText;
