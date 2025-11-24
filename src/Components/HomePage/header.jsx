import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const elements = headerRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        height: '78px',
        background: '#02010D',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Container - 1360px centered */}
      <div className="relative mx-auto" style={{ width: '1360px', maxWidth: '100%', height: '100%', position: 'relative' }}>
        {/* Blur Ellipse Background */}
        <div
          className="absolute"
          style={{
            left: '283px',
            top: '37px',
            width: '794px',
            height: '242px',
            background: '#5C59C4',
            borderRadius: '50%',
            filter: 'blur(248.6px)',
            opacity: 0.16,
          }}
        />

        {/* Logo */}
        <div
          data-animate
          className="absolute"
          style={{
            left: '88px',
            top: '22px',
            width: '137px',
            height: '34px',
            opacity: 0,
            transform: 'translateY(-10px)',
            transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
          }}
        >
          <Link to="/" className="block">
            <div
              className="text-white"
              style={{
                fontFamily: "'Paprika', sans-serif",
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '1.419em',
                textAlign: 'center',
                width: '271px',
                height: '34px',
                marginLeft: '-140px',
              }}
            >
              Gesture AI
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          data-animate
          className="absolute"
          style={{
            left: '542px',
            top: '22px',
            width: '277px',
            height: '34px',
            opacity: 0,
            transform: 'translateY(-10px)',
            transition: 'opacity 0.8s ease-in-out 0.1s, transform 0.8s ease-in-out 0.1s',
          }}
        >
          {/* Home */}
          <Link
            to="/"
            className="absolute text-white hover:opacity-80 transition-opacity"
            style={{
              left: '0px',
              top: '6px',
              width: '49px',
              height: '23px',
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.419em',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Home
          </Link>
          {/* About */}
          <Link
            to="/about"
            className="absolute text-white hover:opacity-80 transition-opacity"
            style={{
              left: '73px',
              top: '6px',
              width: '50px',
              height: '23px',
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.419em',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            About
          </Link>
          {/* Blog */}
          <Link
            to="/blog"
            className="absolute text-white hover:opacity-80 transition-opacity"
            style={{
              left: '147px',
              top: '6px',
              width: '38px',
              height: '23px',
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.419em',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Blog
          </Link>
          {/* Support */}
          <Link
            to="/support"
            className="absolute text-white hover:opacity-80 transition-opacity"
            style={{
              left: '209px',
              top: '6px',
              width: '68px',
              height: '23px',
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.419em',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Support
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div
          data-animate
          className="absolute flex items-center"
          style={{
            left: '1072px',
            top: '15px',
            gap: '15px',
            opacity: 0,
            transform: 'translateY(-10px)',
            transition: 'opacity 0.8s ease-in-out 0.2s, transform 0.8s ease-in-out 0.2s',
          }}
        >
          {/* Login Button */}
          <Link
            to="/login"
            className="flex items-center justify-center text-white border-2 border-white hover:opacity-80 transition-opacity rounded-full"
            style={{
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.419em',
              textAlign: 'center',
              padding: '10px 20px',
              borderRadius: '28px',
            }}
          >
            Login
          </Link>

          {/* Sign Up Button Container */}
          <div
            className="flex flex-col"
            style={{
              width: '123px',
              gap: '10px',
              padding: '3px',
            }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                background: '#7BE6E6',
                boxShadow: 'inset 0px 4px 4px 0px rgba(10, 8, 57, 0.6), inset 0px -4px 4px 0px rgba(10, 8, 57, 0.6), inset 4px 0px 4px 0px rgba(10, 8, 57, 0.6), inset -4px 0px 4px 0px rgba(10, 8, 57, 0.6)',
                padding: '10px 20px',
                borderRadius: '28px',
              }}
            >
              <Link
                to="/signup"
                className="text-black hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "'Paprika', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.419em',
                  textAlign: 'center',
                }}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
