'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function TechNodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Create nodes
    const nodeCount = 15;
    const nodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Slow horizontal movement
        vy: (Math.random() - 0.5) * 0.3, // Slower vertical movement
        radius: 3 + Math.random() * 2,
      });
    }

    // Draw connections between nearby nodes
    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw nodes
    const drawNodes = () => {
      nodes.forEach((node) => {
        ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
        ctx.shadowBlur = 10;
        ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges with damping
        if (node.x - node.radius < 0 || node.x + node.radius > canvas.width) {
          node.vx *= -0.8;
          node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        }
        if (node.y - node.radius < 0 || node.y + node.radius > canvas.height) {
          node.vy *= -0.8;
          node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
        }

        // Slight friction
        node.vx *= 0.999;
        node.vy *= 0.999;
      });

      // Draw everything
      drawConnections();
      drawNodes();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(to bottom, rgba(10,10,10,1), rgba(15,15,15,0.95))',
      }}
    />
  );
}
