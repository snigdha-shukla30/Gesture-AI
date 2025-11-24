

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
        minHeight: '575px',
        background: 'linear-gradient(135deg, #0a0520 0%, #1a1058 50%, #2d1b69 100%)',
      }}
    >
      {/* Gradient Blurs */}
      <div
        data-animate
        className="absolute"
        style={{
          left: '5%',
          top: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(92, 89, 196, 0.6) 0%, rgba(92, 89, 196, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0,
          transition: 'all 0.8s ease-in-out',
        }}
      />

      <div
        data-animate
        className="absolute"
        style={{
          right: '10%',
          top: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(106, 78, 187, 0.5) 0%, rgba(106, 78, 187, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(130px)',
          opacity: 0,
          transition: 'all 0.8s ease-in-out 0.2s',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-between px-20 py-16 h-full">
        {/* Left Content */}
        <div className="flex flex-col max-w-xl">
          {/* Main Heading */}
          <h1
            data-animate
            className="text-white mb-6"
            style={{
              fontFamily: "'Baloo Bhai 2', sans-serif",
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: '1.2em',
              opacity: 0,
              transform: 'translateY(20px)',
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
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.8em',
              opacity: 0,
              transform: 'translateY(20px)',
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
              transform: 'translateY(20px)',
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

        {/* Right Content - Phone Mockups */}
        <div
          data-animate
          className="relative"
          style={{
            opacity: 0,
            transform: 'translateX(30px)',
            transition: 'all 0.8s ease-in-out 0.6s',
          }}
        >
          

          {/* Phone Container */}
          <div className="relative" style={{ width: '500px', height: '400px' }}>
            {/* Back Phone */}
            <div
              className="absolute"
              style={{
                left: '0',
                top: '0',
                width: '250px',
                height: '100%',
                transform: 'perspective(1000px) rotateY(5deg)',
              }}
            >
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #1a1058 0%, #0a0520 100%)',
                  border: '8px solid #2d2d5f',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(106, 78, 187, 0.3)',
                }}
              >
                {/* Phone Screen Content */}
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-800 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-blue-600" />
                    </div>
                    <p className="text-white text-sm font-medium">Get Start</p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="absolute top-2 left-0 right-0 flex justify-between px-6 text-white text-xs">
                  <span>9:14</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm" />
                    <div className="w-4 h-2 bg-white rounded-sm" />
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white opacity-50" />
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
            </div>

            {/* Front Phone */}
            <div
              className="absolute"
              style={{
                right: '0',
                top: '40px',
                width: '280px',
                height: '100%',
                transform: 'perspective(1000px) rotateY(-5deg)',
                zIndex: 2,
              }}
            >
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #1a1058 0%, #0a0520 100%)',
                  border: '8px solid #2d2d5f',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(106, 78, 187, 0.4)',
                }}
              >
                {/* Phone Screen with Video Call */}
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center relative">
                  {/* Video Call Placeholder */}
                  <div className="absolute inset-4 rounded-2xl bg-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-orange-500 flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-white text-xs font-medium">Hey Ayush</p>
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="absolute top-2 left-0 right-0 flex justify-between px-6 text-white text-xs z-10">
                    <span>9:14</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm" />
                    </div>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
                    <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Notification Badge */}
            <div
              data-animate
              className="absolute flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                left: '-80px',
                top: '20px',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(218, 151, 255, 0.9) 100%)',
                boxShadow: '0 4px 12px rgba(225, 115, 230, 0.4)',
                fontSize: '14px',
                fontFamily: "'Poppins', sans-serif",
                zIndex: 10,
                opacity: 0,
                transform: 'translateY(-10px)',
                transition: 'all 0.8s ease-in-out 1s',
              }}
            >
              <div className="w-3 h-3 rounded-full bg-purple-600" />
              <span className="font-medium">New Notification</span>
            </div>

            {/* Talk With Ease Badge */}
            <div
              data-animate
              className="absolute px-5 py-2 rounded-full"
              style={{
                right: '-60px',
                bottom: '120px',
                background: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(225, 115, 230, 0.4)',
                fontSize: '14px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                zIndex: 10,
                opacity: 0,
                transform: 'translateY(10px)',
                transition: 'all 0.8s ease-in-out 1.1s',
              }}
            >
              Talk With Ease
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
