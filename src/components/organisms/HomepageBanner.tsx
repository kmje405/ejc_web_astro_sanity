import React from 'react';
import SimpleParallax from 'simple-parallax-js';

const HomepageBanner: React.FC = () => (
  <div className="relative max-h-screen flex items-center justify-center">
    {/* Parallax Background Image */}
    <div className="absolute inset-0 z-0">
      <SimpleParallax>
        <img
          src="/ejc-bg-img.png"
          alt="Background"
          className="w-full h-full object-fit"
        />
      </SimpleParallax>
    </div>

    {/* Background Pattern Overlay */}
    <div
      className="absolute inset-0 bg-transparent"
      style={{
        backgroundImage: "url('/ejc-bg-pattern.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        opacity: 0.3, // Adjust pattern visibility
      }}
    ></div>

    {/* Orange Overlay */}
    <div className=" inset-0 bg-orange-500 z-20 bg-transparent "></div>

    {/* Main Content (White Text) */}
    <div className="relative z-30 text-center text-white">
      <h1 className="text-6xl mb-4">Eastland Jones Creative</h1>
      <p className="text-2xl">Branding - Print - Web</p>
    </div>
  </div>
);

export default HomepageBanner;
