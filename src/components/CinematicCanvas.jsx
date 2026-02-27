import React, { useEffect, useRef } from 'react';
import CinematicExperience from '../experience/CinematicExperience';

const CinematicCanvas = () => {
    const bgCanvasRef = useRef(null);
    const fgCanvasRef = useRef(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        if (bgCanvasRef.current && fgCanvasRef.current) {
            experienceRef.current = new CinematicExperience(bgCanvasRef.current, fgCanvasRef.current);
        }

        return () => {
            if (experienceRef.current) {
                experienceRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="experience-wrapper">
            <canvas
                ref={bgCanvasRef}
                className="canvas-bg"
            />
            <canvas
                ref={fgCanvasRef}
                className="canvas-fg"
            />
        </div>
    );
};

export default CinematicCanvas;
