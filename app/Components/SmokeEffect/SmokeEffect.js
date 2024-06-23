"use client";
import { useEffect, useRef } from "react";

const SmokeEffect = () => {
  const canvasRef = useRef(null);
  const NUM_PARTICLES = 50;
  const particles = [];
  const fps = 30;
  const fpsInterval = 1000 / fps;
  let then = Date.now();
  let raf;

  useEffect(() => {
    const canvas = canvasRef.current;
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
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(new Particle());
      }
    }

    function handleParticles() {
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
      raf = requestAnimationFrame(animate);

      const now = Date.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
      }
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!reducedMotion.matches) {
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + 100;
        cancelAnimationFrame(raf);
        handleParticles();
        animate();
      });

      smokeImage.onload = () => {
        init();
        animate();
      };
    }

    return () => {
      cancelAnimationFrame(raf);
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
