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
