import React, { useEffect, useRef } from 'react';
import SimpleParallax from 'simple-parallax-js';

const HomepageBanner = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const SimpleParallaxAny = SimpleParallax as any;

    if (imageRef.current) {
      new SimpleParallaxAny(imageRef.current, {
        scale: 1.3,
        delay: 0.2,
        orientation: 'up',
      });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <SimpleParallax>
        <img
          ref={imageRef}
          src="/ejc-bg-img.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </SimpleParallax>

      {/* Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-screen text-center">
        {/* Navbar */}
        <nav className="absolute top-4 left-4 flex items-center gap-4">
          <img
            src="/ejc-full-white.png"
            alt="EJC Logo"
            className="h-10 w-auto"
          />
          <a href="/projects" className="text-white text-lg">
            Projects
          </a>
        </nav>

        {/* Centered Text */}
        <div>
          <h1 className="text-white text-6xl font-bold">Eastland Jones Creative</h1>
          <h3 className="text-white text-2xl mt-4">Branding - Print - Web</h3>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
