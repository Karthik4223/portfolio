import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class CinematicExperience {
    constructor(bgCanvas, fgCanvas) {
        this.bgCanvas = bgCanvas;
        this.fgCanvas = fgCanvas;
        this.bgCtx = bgCanvas.getContext('2d');
        this.fgCtx = fgCanvas.getContext('2d');

        this.frames = [];
        this.currentFrameIndex = 0;
        this.totalFrames = 0;

        this.images = [];
        this.isLoaded = false;

        this.onProgressUpdate = null;

        this.init();
    }

    async init() {
        // Dynamically discover frames (we expect them in /src/assets/frames/frame_0001.jpg)
        // Since we can't easily "glob" in the browser without vite's import.meta.glob
        // We'll use a standard pattern and try to load until fail, or better, 
        // use Vite's glob to get the paths.

        const frameModules = import.meta.glob('../assets/frames/ezgif-frame-*.jpg', { eager: true });
        const paths = Object.values(frameModules).map(mod => mod.default);
        this.totalFrames = paths.length;

        const loadPromises = paths.sort().map((path, index) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = path;
                img.onload = () => {
                    this.images[index] = img;
                    resolve();
                };
            });
        });

        await Promise.all(loadPromises);
        this.isLoaded = true;
        this.setupScroll();
        this.handleResize();
        this.render();

        window.addEventListener('resize', () => this.handleResize());
    }

    setupScroll() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cinematic-container",
                start: "top top",
                end: "bottom bottom",
                scrub: 2, // Slower scrub for a more cinematic feel
            }
        });

        // Map scroll to frame index
        tl.to(this, {
            currentFrameIndex: this.totalFrames - 1,
            ease: "none",
            onUpdate: () => this.render()
        }, 0);

        // Dynamic scale effect (zooming in as we scroll)
        this.scale = { value: 1.0 };
        tl.to(this.scale, {
            value: 1.15,
            ease: "power1.inOut"
        }, 0);
    }

    handleResize() {
        const dpr = window.devicePixelRatio || 1;

        this.bgCanvas.width = window.innerWidth * dpr;
        this.bgCanvas.height = window.innerHeight * dpr;
        this.bgCanvas.style.width = `${window.innerWidth}px`;
        this.bgCanvas.style.height = `${window.innerHeight}px`;

        this.fgCanvas.width = window.innerWidth * dpr;
        this.fgCanvas.height = window.innerHeight * dpr;
        this.fgCanvas.style.width = `${window.innerWidth}px`;
        this.fgCanvas.style.height = `${window.innerHeight}px`;

        this.render();
    }

    render() {
        if (!this.isLoaded) return;

        const index = Math.round(this.currentFrameIndex);
        const img = this.images[index];
        if (!img) return;

        // Render Background (Blurred, Scaled, Darkened)
        this.drawBackground(img);

        // Render Foreground (Sharp, Contained)
        this.drawForeground(img);
    }

    drawBackground(img) {
        const ctx = this.bgCtx;
        const canvas = this.bgCanvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background has a slightly larger scale for a deeper parallax effect
        this.drawImageCover(ctx, img, canvas.width, canvas.height, this.scale.value * 1.05);
    }

    drawForeground(img) {
        const ctx = this.fgCtx;
        const canvas = this.fgCanvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Foreground uses the primary scale effect
        this.drawImageCover(ctx, img, canvas.width, canvas.height, this.scale.value);
    }

    drawImageCover(ctx, img, w, h, scale = 1) {
        const baseOverscan = 1.05; // 5% overscan to hide frame edges
        const totalScale = scale * baseOverscan;

        const imgRatio = img.width / img.height;
        const canvasRatio = w / h;
        let drawW, drawH, x, y;

        if (imgRatio > canvasRatio) {
            drawH = h * totalScale;
            drawW = drawH * imgRatio;
        } else {
            drawW = w * totalScale;
            drawH = drawW / imgRatio;
        }

        x = (w - drawW) / 2;
        y = (h - drawH) / 2;

        ctx.drawImage(img, x, y, drawW, drawH);
    }

    drawImageContain(ctx, img, w, h) {
        const imgRatio = img.width / img.height;
        const canvasRatio = w / h;
        let drawW, drawH, x, y;

        if (imgRatio > canvasRatio) {
            drawW = w;
            drawH = drawW / imgRatio;
        } else {
            drawH = h;
            drawW = drawH * imgRatio;
        }

        x = (w - drawW) / 2;
        y = (h - drawH) / 2;

        ctx.drawImage(img, x, y, drawW, drawH);
    }

    destroy() {
        window.removeEventListener('resize', this.handleResize);
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
}
