import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import GestureAILogo from "../UI/Logo";

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const elements = headerRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateX(0) translateY(0)";
      }, index * 150);
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        height: "78px",
        background: "#02010D",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        className="relative mx-auto"
        style={{ width: "1360px", maxWidth: "100%", height: "100%" }}
      >
        {/* Blur Ellipse */}
        <div
          className="absolute"
          style={{
            left: "283px",
            top: "37px",
            width: "794px",
            height: "242px",
            background: "#5C59C4",
            borderRadius: "50%",
            filter: "blur(248.6px)",
            opacity: 0.16,
          }}
        />

        {/* LOGO — LEFT SE SLIDE */}
        <div
          data-animate
          className="absolute flex items-center"
          style={{
            left: "88px",
            bottom: "85px",
            opacity: 0,
            transform: "translateX(-40px)",
            transition: "opacity 0.15s ease-out, transform 0.8s ease-out",
          }}
        >
          <GestureAILogo />
        </div>

        {/* NAV LINKS — BOTTOM SE SLIDE */}
        <nav
          data-animate
          className="absolute"
          style={{
            left: "542px",
            top: "22px",
            opacity: 0,
            transform: "translateY(-40px)",
            transition: "opacity 0.8s ease-out 0.1s, transform 0.5s ease-out 0.1s",
          }}
        >
          <Link
            to="/"
            className="absolute text-white hover:opacity-80 transition-opacity"
            style={{
              left: "0px",
              top: "6px",
              width: "49px",
              fontFamily: "'Paprika'",
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="absolute text-white hover:opacity-80 transition-opacity"
            style={{
              left: "73px",
              top: "6px",
              width: "50px",
              fontFamily: "'Paprika'",
            }}
          >
            About
          </Link>

          <Link
            to="/blog"
            className="absolute text-white hover:opacity-80 transition-opacity"
            style={{
              left: "147px",
              top: "6px",
              width: "38px",
              fontFamily: "'Paprika'",
            }}
          >
            Blog
          </Link>

          <Link
            to="/support"
            className="absolute text-white hover:opacity-80 transition-opacity"
            style={{
              left: "209px",
              top: "6px",
              width: "68px",
              fontFamily: "'Paprika'",
            }}
          >
            Support
          </Link>
        </nav>

        {/* AUTH BUTTONS — RIGHT SE SLIDE */}
        <div
          data-animate
          className="absolute flex items-center"
          style={{
            left: "1072px",
            top: "15px",
            gap: "15px",
            opacity: 0,
            transform: "translateX(40px)",
            transition:
              "opacity 0.15s ease-out 0.3s, transform 0.8s ease-out 0.3s",
          }}
        >
          <Link
            to="/login"
            className="flex items-center justify-center text-white border-2 border-white hover:opacity-80 transition-opacity rounded-full"
            style={{
              fontFamily: "'Paprika'",
              padding: "10px 20px",
              borderRadius: "28px",
            }}
          >
            Login
          </Link>

          <div
            className="flex flex-col"
            style={{
              width: "123px",
              padding: "3px",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                background: "#7BE6E6",
                boxShadow:
                  "inset 0px 4px 4px rgba(10, 8, 57, 0.6), inset 0px -4px 4px rgba(10, 8, 57, 0.6)",
                padding: "10px 20px",
                borderRadius: "28px",
              }}
            >
              <Link
                to="/signup"
                className="text-black hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "'Paprika'",
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
