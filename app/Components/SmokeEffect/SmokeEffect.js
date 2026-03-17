"use client";
import { useEffect, useRef } from "react";

const SmokeEffect = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const thenRef = useRef(Date.now());
  const particlesRef = useRef([]);

  const NUM_PARTICLES = 50;

  useEffect(() => {
    const fps = 30;
    const fpsInterval = 1000 / fps;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 100;

    const smokeImage = new Image();
    smokeImage.src = "./smoke.webp"; // Asegúrate de que la ruta a la textura sea correcta

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width - canvas.width;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.size = Math.random() * 3000 + 1000;
        this.opacity = Math.random() * 0.8;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.002;
      }

      update() {
        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
          smokeImage,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        );
        ctx.globalAlpha = 1.0;
        ctx.restore();
      }
    }

    function init() {
      const particles = particlesRef.current;
      particles.length = 0;
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(new Particle());
      }
    }

    function handleParticles() {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 1) {
          particles.splice(i, 1);
          i--;
          particles.push(new Particle());
        }
      }
    }

    function animate() {
      rafRef.current = requestAnimationFrame(animate);

      const now = Date.now();
      const elapsed = now - thenRef.current;

      if (elapsed > fpsInterval) {
        thenRef.current = now - (elapsed % fpsInterval);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
      }
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!reducedMotion.matches) {
      const onResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + 100;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        handleParticles();
        animate();
      };

      window.addEventListener("resize", onResize);

      smokeImage.onload = () => {
        init();
        animate();
      };

      return () => {
        window.removeEventListener("resize", onResize);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div id="smoke-bkg" className="fixed top-0 -z-10 h-full w-full">
      <canvas
        id="smoke-canvas"
        ref={canvasRef}
        aria-label="Efecto de fondo de humo"
        className="opacity-70"
      ></canvas>
    </div>
  );
};

export default SmokeEffect;
