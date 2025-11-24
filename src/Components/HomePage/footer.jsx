import React, { useEffect, useRef } from 'react';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.style.opacity = '1';
                const initialTransform = el.style.transform;
                if (initialTransform.includes('translateY')) {
                  el.style.transform = initialTransform.replace(/translateY\([^)]+\)/, 'translateY(0)');
                } else if (initialTransform.includes('translateX')) {
                  el.style.transform = initialTransform.replace(/translateX\([^)]+\)/, 'translateX(0)');
                } else {
                  el.style.transform = 'translateY(0)';
                }
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = footerRef.current;
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
    <div ref={footerRef} className="relative w-full">
      {/* Stay Connected Section */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: '366px',
          background: '#040311',
        }}
      >
        <div
          data-animate
          className="absolute"
          style={{
            left: '101px',
            top: '90px',
            width: '1159px',
            height: '187px',
            borderRadius: '20px',
            background: 'linear-gradient(225deg, rgba(30, 86, 121, 1) 0%, rgba(163, 89, 228, 1) 100%)',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
          }}
        >
          {/* Content */}
          <div
            className="absolute"
            style={{
              left: '30px',
              top: '21px',
              width: '683px',
              height: '85px',
            }}
          >
            <h3
              className="text-white"
              style={{
                fontFamily: "'Baloo Bhai 2', sans-serif",
                fontWeight: 800,
                fontSize: '40px',
                lineHeight: '1.25em',
                margin: 0,
              }}
            >
              Stay connected with ous
            </h3>
            <p
              className="text-white"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '1.875em',
                marginTop: '5px',
              }}
            >
              We are open for feedbacks and do not forget to follow our socials for future updates .
            </p>
          </div>

          {/* Discord Button */}
          <div
            className="absolute flex items-center gap-2 px-3.75 py-2 rounded-xl"
            style={{
              left: '827.72px',
              top: '115px',
              background: '#FFFFFF',
              // border: '2px solid',
              // borderImage: 'linear-gradient(90deg, rgba(255, 0, 238, 1) 0%, rgba(170, 135, 135, 1) 100%) 1',
              borderRadius: '12px',
            }}
          >
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11.5" cy="11.5" r="11.5" fill="#5865F2"/>
              <path d="M8 7L15 11L8 15V7Z" fill="white"/>
            </svg>
            <span
              className="text-white"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#5857A8',
              }}
            >
              Discord
            </span>
          </div>

          {/* Instagram Button */}
          <div
            className="absolute flex items-center gap-2 px-3.75 py-2 rounded-xl"
            style={{
              left: '968.22px',
              top: '115px',
              background: '#FFFFFF',
              // border: '2px solid',
              // borderImage: 'linear-gradient(90deg, rgba(255, 0, 238, 1) 0%, rgba(170, 135, 135, 1) 100%) 1',
              borderRadius: '12px',
            }}
          >
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="19" height="19" rx="4" fill="url(#instagram-gradient)"/>
              <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFDD55"/>
                  <stop offset="50%" stopColor="#FF543E"/>
                  <stop offset="100%" stopColor="#C837AB"/>
                </linearGradient>
              </defs>
            </svg>
            <span
              className="text-white"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#5857A8',
              }}
            >
              Instagram
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: '206px',
          background: '#000000',
        }}
      >
        {/* Divider Line */}
        <div
          className="absolute"
          style={{
            left: '-1px',
            top: '146px',
            width: '1361px',
            height: '2px',
            background: '#D9D9D9',
            borderRadius: '43px',
          }}
        />

        {/* Gesture AI Logo */}
        <div
          data-animate
          className="absolute text-white"
          style={{
            left: '92px',
            top: '56px',
            width: '190px',
            height: '51px',
            fontFamily: "'Paprika', sans-serif",
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '1.419em',
            textAlign: 'center',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
          }}
        >
          Gesture AI
        </div>

        {/* Footer Links */}
        <nav
          data-animate
          className="absolute flex items-center gap-6"
          style={{
            left: '431px',
            top: '70px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease-in-out 0.2s, transform 0.8s ease-in-out 0.2s',
          }}
        >
          <a
            href="#terms"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.419em',
              textAlign: 'center',
            }}
          >
            Terms of Services
          </a>
          <a
            href="#privacy"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.419em',
              textAlign: 'center',
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#guidelines"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.419em',
              textAlign: 'center',
            }}
          >
            Community Guidelines
          </a>
        </nav>

        {/* Copyright */}
        <p
          data-animate
          className="absolute"
          style={{
            left: '501px',
            top: '160px',
            width: '318px',
            height: '23px',
            fontFamily: "'Paprika', sans-serif",
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.419em',
            color: '#838383',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease-in-out 0.4s, transform 0.8s ease-in-out 0.4s',
          }}
        >
          All rights reserved. Gesture AI Pvt LTD.
        </p>

        {/* Social Media Icons */}
        <div
          data-animate
          className="absolute flex items-center gap-4"
          style={{
            right: '54px',
            top: '70px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.8s ease-in-out 0.6s, transform 0.8s ease-in-out 0.6s',
          }}
        >
          {/* Discord */}
          <a href="#discord" className="hover:opacity-80 transition-opacity">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11.5" cy="11.5" r="11.5" fill="#5865F2"/>
              <path d="M8 7L15 11L8 15V7Z" fill="white"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="#twitter" className="hover:opacity-80 transition-opacity">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11.5" cy="11.5" r="11.5" fill="#1D9BF0"/>
              <path d="M7 9L16 7L14 16L10 12L7 9Z" fill="white"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#instagram" className="hover:opacity-80 transition-opacity">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="19" height="19" rx="4" fill="url(#instagram-gradient-footer)"/>
              <defs>
                <linearGradient id="instagram-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFDD55"/>
                  <stop offset="50%" stopColor="#FF543E"/>
                  <stop offset="100%" stopColor="#C837AB"/>
                </linearGradient>
              </defs>
            </svg>
          </a>

          {/* Facebook */}
          <a href="#facebook" className="hover:opacity-80 transition-opacity">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11.5" cy="11.5" r="11.5" fill="#3D5A98"/>
              <path d="M13 6H15V9H13V11H15V14H13V18H10V14H8V11H10V9H8V6H10V8H12V6H13Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

