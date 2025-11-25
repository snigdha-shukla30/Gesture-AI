import React, { useEffect, useRef } from 'react';

export default function GestureAIHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0)';
      }, index * 100);
    });
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{
        height: '575px',
        background: 'linear-gradient(to bottom, #050427 0%, #090749 100%)',
      }}
    >
      {/* Left Side Ellipse Background */}
      <div
        data-animate
        className="absolute"
        style={{
          left: '100px',
          top: '26px',
          width: '493px',
          height: '469px',
          background: '#5C59C4',
          borderRadius: '50%',
          filter: 'blur(140.48px)',
          opacity: 0.48,
          mixBlendMode: 'difference',
          transition: 'all 0.8s ease-in-out',
        }}
      />

      {/* Right Side Ellipse Background */}
      <div
        data-animate
        className="absolute"
        style={{
          left: '790px',
          top: '85px',
          width: '493px',
          height: '469px',
          background: '#5C59C4',
          borderRadius: '50%',
          filter: 'blur(110.48px)',
          opacity: 0.48,
          transition: 'all 0.8s ease-in-out 0.2s',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-between px-20 pl-25 py-16 h-full">
        {/* Left Content */}
        <div className="flex flex-col max-w-xl">
          {/* Main Heading */}
          <h1
            data-animate
            className="text-white mb-6"
            style={{
              fontFamily: "'BalooBhai2', sans-serif",
              fontWeight: 800,
              fontSize: '40px',
              lineHeight: '50px',
              letterSpacing: '0%',
              opacity: 0,
              transform: 'translateX(-40px)',
              transition: 'all 0.8s ease-in-out 0.3s',
            }}
          >
            Breaking The<br />communication Barrier !
          </h1>

          {/* Description */}
          <p
            data-animate
            className="text-white mb-8"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '30px',
              letterSpacing: '0%',
              opacity: 0,
              transform: 'translateX(-40px)',
              transition: 'all 0.8s ease-in-out 0.4s',
              maxWidth: '520px',
            }}
          >
            Gesture AI makes learning and understanding sign language easier than ever. Whether you're a speaker or a listener, our real-time recognition system translates gestures into clear meaning, helping people connect without confusion.
          </p>

          {/* CTA Buttons */}
          <div
            data-animate
            className="flex gap-4"
            style={{
              opacity: 0,
              transform: 'translateX(-40px)',
              transition: 'all 0.8s ease-in-out 0.5s',
            }}
          >

              <button
              className="px-6 py-3 text-white rounded-lg font-medium"
              style={{
                background: 'linear-gradient(90deg, #345DB7 0%, #26255A 100%)',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '16px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              See Gesture AI in Action
            </button>
           

             <button
              className="px-6 py-3 rounded-lg font-medium"
              style={{
                background: '#FFFFFF',
                color: '#787878',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Explore Features
            </button>

           
          </div>
        </div>

        {/* Right Content - Image */}
        <div
          data-animate
          className="relative"
          style={{
            opacity: 0,
            transform: 'translateX(30px)',
            transition: 'all 0.8s ease-in-out 0.7s',
          }}
        >
          {/* Image Container */}
          <div className="relative" style={{ width: '800px', height: '800px', zIndex: 1 }}>
            <img
              src="/Home/twophones.png"
              alt="Gesture AI Demo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
