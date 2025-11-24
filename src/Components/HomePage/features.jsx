import React, { useEffect, useRef } from 'react';

export default function Features() {
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = featuresRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={featuresRef}
      className="relative w-full min-h-screen overflow-hidden py-12 px-8"
      style={{
        background: '#0a0118',
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2
          data-animate
          className="text-white text-4xl md:text-5xl font-bold mb-4"
          style={{
            fontFamily: "'Baloo Bhai 2', sans-serif",
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
          }}
        >
          Connecting Speech and <span style={{ color: '#8b5cf6' }}>Silence</span> with AI
        </h2>

        <p
          data-animate
          className="text-gray-300 text-base max-w-2xl mx-auto"
          style={{
            fontFamily: "'Poppins', sans-serif",
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease-in-out 0.2s, transform 0.8s ease-in-out 0.2s',
          }}
        >
          Gesture AI turns every hand gesture into words you can read — instantly. It's an AI-powered platform designed to make conversations with mute individuals seamless, natural, and inclusive.
        </p>
      </div>

      {/* Features Container */}
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Feature 1: Easy Accessibility */}
        <div
          data-animate
          className="relative grid md:grid-cols-2 gap-8 items-center"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease-in-out 0.4s, transform 0.8s ease-in-out 0.4s',
          }}
        >
          {/* Blur Effect */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
            style={{
              background: '#5C59C4',
              filter: 'blur(100px)',
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {/* Laptop Image */}
          <div className="relative z-10">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"
                alt="Laptop with webcam"
                className="w-full rounded-lg shadow-2xl"
              />
              {/* Glowing Triangle Overlay */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{
                  filter: 'drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.5))',
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M50 10 L90 90 L10 90 Z"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "'Baloo Bhai 2', sans-serif" }}>
              <span className="mr-2">•</span>
              Easy Accessibility <span style={{ color: '#8b5cf6' }}>(via webcam)</span>
            </h3>
            <p className="text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
              All you need is a webcam — because our AI doesn't judge your camera quality, only your gestures
            </p>
          </div>
        </div>

        {/* Feature 2: Real-Time Detection */}
        <div
          data-animate
          className="relative grid md:grid-cols-2 gap-8 items-center"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease-in-out 0.6s, transform 0.8s ease-in-out 0.6s',
          }}
        >
          {/* Content (Left Side) */}
          <div className="relative z-10 md:order-1">
            <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "'Baloo Bhai 2', sans-serif" }}>
              <span className="mr-2">•</span>
              Real-Time <span style={{ color: '#00bfff' }}>Detection</span>
            </h3>
            <p className="text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
              No waiting, no loading bars — Gesture AI catches your moves faster than your friend screenshots drama.
            </p>
          </div>

          {/* Chat Window (Right Side) */}
          <div className="relative z-10 md:order-2 flex flex-col items-end gap-4">
            {/* Blur Effect */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
              style={{
                background: '#5C59C4',
                filter: 'blur(100px)',
                opacity: 0.3,
                zIndex: -1,
              }}
            />

            {/* Realtime Translation Badge */}
            <div
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: '#FFFFFF',
                color: '#000',
                fontFamily: "'Poppins', sans-serif",
                boxShadow: '0px 2px 4px rgba(225, 115, 230, 0.5)',
              }}
            >
              Realtime Translation
            </div>

            {/* Chat Window */}
            <div
              className="relative w-64 h-96 rounded-lg overflow-hidden"
              style={{
                background: 'linear-gradient(105deg, rgba(51, 97, 248, 1) 3%, rgba(30, 57, 146, 1) 42%)',
                padding: '2px',
                filter: 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.3))',
              }}
            >
              <div
                className="w-full h-full rounded-lg p-4 flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                }}
              >
                {/* Header */}
                <div className="mb-2">
                  <p className="text-gray-400 text-xs font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Expressed in sign
                  </p>
                  <div className="w-full h-px bg-gray-600 mt-2" />
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-2">
                  {[
                    'Hey!',
                    'Just wanted to check if you reached safely.',
                    "The traffic was insane today, I hope you didn't get stuck",
                    "Also, don't forget we have that meeting tomorrow at 10.",
                    'By the way, I found that café you were talking about… looks amazing',
                    'Sending you the link rn',
                  ].map((msg, idx) => (
                    <div
                      key={idx}
                      className="text-xs"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(142, 148, 177, 0.8)',
                      }}
                    >
                      {msg}
                    </div>
                  ))}
                </div>

                {/* Input Bar */}
                <div
                  className="mt-2 h-8 rounded"
                  style={{
                    background: 'linear-gradient(90deg, rgba(3, 7, 87, 1) 0%, rgba(134, 136, 185, 1) 48%, rgba(3, 7, 87, 1) 100%)',
                    padding: '1px',
                  }}
                >
                  <div
                    className="w-full h-full rounded"
                    style={{
                      background: '#272A38',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Easy Peasy Badge */}
            <div
              className="px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(151, 85, 201, 1) 100%)',
                color: '#000',
                fontFamily: "'Poppins', sans-serif",
                boxShadow: '0px 2px 4px rgba(225, 115, 230, 0.5)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#000000" />
                <path d="M8 4V9M8 12H8.01" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Easy peasy</span>
            </div>
          </div>
        </div>

        {/* Feature 3: Accurate Translation */}
        <div
          data-animate
          className="relative grid md:grid-cols-2 gap-8 items-center"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease-in-out 0.8s, transform 0.8s ease-in-out 0.8s',
          }}
        >
          {/* Blur Effect */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
            style={{
              background: '#5C59C4',
              filter: 'blur(120px)',
              opacity: 0.2,
              zIndex: 0,
            }}
          />

          {/* Translation Icon */}
          <div className="relative z-10 flex justify-center">
            <div className="relative">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                <circle cx="110" cy="110" r="109" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="110" cy="110" r="92" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="110" cy="110" r="45" stroke="#FFFFFF" strokeWidth="1" />
                
                {/* Translation Arrows */}
                <path d="M75 110L110 75L145 110" stroke="#FFFFFF" strokeWidth="3" fill="none" />
                <path d="M110 75V145" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M75 110L110 145L145 110" stroke="#FFFFFF" strokeWidth="3" fill="none" />
                
                <circle cx="110" cy="110" r="8" fill="#FFFFFF" />
              </svg>
              
              {/* Rotating A */}
              <div
                className="absolute"
                style={{
                  top: '20%',
                  right: '-10%',
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: '#FFFFFF',
                  }}
                >
                  A
                </div>
              </div>

              {/* Rotating Hand Icon */}
              <div
                className="absolute"
                style={{
                  bottom: '20%',
                  left: '-10%',
                  animation: 'float 3s ease-in-out infinite 1.5s',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  ✋
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "'Baloo Bhai 2', sans-serif" }}>
              <span className="mr-2">•</span>
              Accurate <span style={{ color: '#00bfff' }}>Translation</span>
            </h3>
            <p className="text-gray-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Our AI doesn't "guess" your gestures — it gets them. No more awkward mistranslations… unless you're waving to your crush
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

