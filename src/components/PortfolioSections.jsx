import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './sections/Hero';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSections = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const sections = gsap.utils.toArray('.portfolio-section');

        // Force snapping to ensure "one section per view"
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            snap: {
                snapTo: 1 / (sections.length - 1),
                duration: { min: 0.6, max: 1.2 },
                delay: 0.05,
                ease: "power2.inOut"
            }
        });


    }, []);

    return (
        <div ref={containerRef} className="portfolio-container">
            <Hero />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default PortfolioSections;
