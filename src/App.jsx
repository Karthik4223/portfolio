import React from 'react';
import CinematicCanvas from './components/CinematicCanvas';
import PortfolioSections from './components/PortfolioSections';
import './styles.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const introRef = React.useRef(null);

  React.useEffect(() => {
    gsap.to('.experience-wrapper', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.portfolio-container',
        start: 'top bottom',
        end: 'top center',
        scrub: true
      }
    });

    gsap.to('.intro-text-overlay', {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: '.cinematic-container',
        start: 'center top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <div className="main-wrapper">
      {/* <div className="cinematic-container">
        <CinematicCanvas />
      </div> */}
      <PortfolioSections />
    </div>
  );
}

export default App;
