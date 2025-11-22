import { useEffect, useRef } from 'react';

/**
 * MobileGradientBackground Component
 *
 * A creative multi-layered gradient background optimized for mobile devices.
 * Uses CSS animations and blend modes for a dynamic, professional appearance.
 * Aligns with the brand's blue/cyan color palette.
 */
export default function MobileGradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optional: Add scroll-based parallax effect
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const layers = containerRef.current.querySelectorAll('.gradient-layer');

        layers.forEach((layer, index) => {
          const speed = (index + 1) * 0.15;
          (layer as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden mobile-gradient-bg"
      aria-hidden="true"
    >
      {/* Base Layer - Deep Blue Foundation */}
      <div className="gradient-layer absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0d1117] to-[#0f172a]"></div>

      {/* Layer 2 - Animated Radial Gradients */}
      <div className="gradient-layer absolute inset-0">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      {/* Layer 3 - Mesh Gradient Effect */}
      <div className="gradient-layer absolute inset-0 gradient-mesh"></div>

      {/* Layer 4 - Animated Shimmer Overlay */}
      <div className="gradient-layer absolute inset-0 gradient-shimmer"></div>

      {/* Layer 5 - Noise Texture for Depth */}
      <div className="gradient-layer absolute inset-0 gradient-noise"></div>

      {/* CSS Styles */}
      <style>{`
        /* Base gradient animation */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Orb float animation */
        @keyframes orb-float-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(30px, -40px) scale(1.1);
            opacity: 0.5;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
            opacity: 0.4;
          }
        }

        @keyframes orb-float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.25;
          }
          33% {
            transform: translate(-40px, 30px) scale(1.15);
            opacity: 0.45;
          }
          66% {
            transform: translate(25px, -25px) scale(0.95);
            opacity: 0.35;
          }
        }

        @keyframes orb-float-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translate(20px, 20px) scale(1.2) rotate(180deg);
            opacity: 0.4;
          }
        }

        /* Shimmer animation */
        @keyframes shimmer-sweep {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Mesh gradient animation */
        @keyframes mesh-morph {
          0%, 100% {
            background-position: 0% 0%, 100% 100%;
          }
          25% {
            background-position: 25% 50%, 75% 50%;
          }
          50% {
            background-position: 50% 100%, 50% 0%;
          }
          75% {
            background-position: 75% 50%, 25% 50%;
          }
        }

        /* Noise texture animation */
        @keyframes noise-flicker {
          0%, 100% {
            opacity: 0.03;
          }
          50% {
            opacity: 0.06;
          }
        }

        /* Gradient Orbs */
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          mix-blend-mode: screen;
          will-change: transform, opacity;
        }

        .gradient-orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(14, 165, 233, 0.4) 0%,
            rgba(6, 182, 212, 0.3) 30%,
            rgba(34, 211, 238, 0.2) 60%,
            transparent 100%
          );
          top: -100px;
          right: -50px;
          animation: orb-float-1 18s ease-in-out infinite;
        }

        .gradient-orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(37, 99, 235, 0.35) 0%,
            rgba(59, 130, 246, 0.25) 40%,
            rgba(96, 165, 250, 0.15) 70%,
            transparent 100%
          );
          bottom: -150px;
          left: -100px;
          animation: orb-float-2 22s ease-in-out infinite;
        }

        .gradient-orb-3 {
          width: 350px;
          height: 350px;
          background: radial-gradient(
            circle,
            rgba(6, 182, 212, 0.3) 0%,
            rgba(20, 184, 166, 0.2) 50%,
            transparent 100%
          );
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: orb-float-3 20s ease-in-out infinite;
        }

        /* Mesh Gradient Effect */
        .gradient-mesh {
          background:
            radial-gradient(ellipse at 20% 30%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(37, 99, 235, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
          background-size: 200% 200%, 250% 250%, 300% 300%;
          animation: mesh-morph 25s ease-in-out infinite;
          mix-blend-mode: lighten;
        }

        /* Shimmer Overlay */
        .gradient-shimmer {
          background: linear-gradient(
            120deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.03) 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer-sweep 12s linear infinite;
          mix-blend-mode: overlay;
        }

        /* Noise Texture */
        .gradient-noise {
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 2px,
              rgba(255, 255, 255, 0.03) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 2px,
              rgba(255, 255, 255, 0.03) 4px
            );
          opacity: 0.03;
          animation: noise-flicker 4s ease-in-out infinite;
          mix-blend-mode: overlay;
        }

        /* Performance optimizations */
        .mobile-gradient-bg,
        .gradient-layer,
        .gradient-orb {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .gradient-orb,
          .gradient-mesh,
          .gradient-shimmer,
          .gradient-noise {
            animation: none !important;
          }

          .gradient-orb {
            opacity: 0.2;
          }
        }

        /* Extra small devices optimization */
        @media (max-width: 480px) {
          .gradient-orb {
            filter: blur(60px);
          }

          .gradient-orb-1 {
            width: 300px;
            height: 300px;
            animation-duration: 20s;
          }

          .gradient-orb-2 {
            width: 350px;
            height: 350px;
            animation-duration: 24s;
          }

          .gradient-orb-3 {
            width: 250px;
            height: 250px;
            animation-duration: 22s;
          }
        }

        /* Fallback for older browsers */
        @supports not (mix-blend-mode: screen) {
          .gradient-orb,
          .gradient-mesh,
          .gradient-shimmer {
            mix-blend-mode: normal;
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}
