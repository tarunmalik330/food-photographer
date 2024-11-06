import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const ParticlesP5 = () => {
  const canvasRef = useRef(null);
  const particlesCount = useParticlesCount();
  const [p5Instance, setP5Instance] = useState(null);
  const [hovering, setHovering] = useState(false); 

  useEffect(() => {
    const loadP5 = async () => {
      const p5 = (await import("p5")).default;
      const instance = new p5(sketch, canvasRef.current);
      setP5Instance(instance);
    };

    loadP5();

    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, [particlesCount]);

  const sketch = (p5) => {
    let particles = [];
    let mousePos = p5.createVector(p5.mouseX, p5.mouseY);

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.noStroke();
      p5.fill(255, 255, 255, 100);

      // Create particles
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle(p5.random(p5.width), p5.random(p5.height)));
      }
    };

    p5.draw = () => {
      p5.clear();
      if (hovering) {
        p5.background(0, 100, 255);
      } else {
        p5.background(30);
      }

      mousePos.set(p5.mouseX, p5.mouseY);

      particles = particles.filter(
        (particle) => !hovering || particle.opacity > 0
      );

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mousePos, hovering);
        particles[i].display();

        for (let j = i + 1; j < particles.length; j++) {
          const distance = p5.dist(
            particles[i].x,
            particles[i].y,
            particles[j].x,
            particles[j].y
          );

          if (distance < 130) {
            p5.stroke(255, 255, 255, 70);
            p5.strokeWeight(1);
            p5.line(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
          }
        }
      }
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = p5.createVector(
          p5.random(-0.5, 0.5),
          p5.random(-0.5, 0.5)
        );
        this.radius = p5.random(3, 5);
        this.opacity = 255;
      }

      update(mousePos, hovering) {
        if (hovering) {
          this.opacity = Math.max(0, this.opacity - 20);
        } else {
          const attraction = p5.createVector(
            this.x - mousePos.x,
            this.y - mousePos.y
          );
          const distance = attraction.mag();
          attraction.normalize();

          if (distance < 100) {
            const strength = p5.map(distance, 0, 100, 0.5, 0);
            attraction.mult(strength);
            this.velocity.add(attraction);
          }
          this.opacity = p5.min(this.opacity + 3, 255);
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x < 0 || this.x > p5.width) {
          this.velocity.x *= -1;
        }
        if (this.y < 0 || this.y > p5.height) {
          this.velocity.y *= -1;
        }
      }

      display() {
        p5.fill(255, 255, 255, this.opacity);
        p5.circle(this.x, this.y, this.radius);
      }
    }
  };
  useEffect(() => {
    const handleMouseMove = throttle(() => setHovering(true), 50);
    const handleMouseOut = () => setHovering(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div ref={canvasRef} />;
};

const useParticlesCount = () => {
  const getParticlesCount = () => {
    const screenWidth = window.innerWidth;
    return screenWidth <= 767 ? 30 : 100;
  };

  const [particlesCount, setParticlesCount] = useState(getParticlesCount());

  useEffect(() => {
    const handleResize = () => setParticlesCount(getParticlesCount());

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return particlesCount;
};

export default dynamic(() => Promise.resolve(ParticlesP5), { ssr: false });
