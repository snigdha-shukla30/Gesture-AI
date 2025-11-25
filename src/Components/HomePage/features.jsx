import React, { useEffect, useRef } from "react";

export default function Features() {
  const featuresRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      ref={featuresRef}
      className="relative w-full min-h-screen overflow-hidden py-16 px-6"
      style={{
        background: "#040311",
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2
          data-animate
          className="text-white text-3xl md:text-4xl font-bold mb-6"
          style={{
            fontFamily: "'BalooBhai2', sans-serif",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
            lineHeight: "1.3",
          }}
        >
          Connecting Speech and{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #B61DCE 0%, #FFB765 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Silence
          </span>{" "}
          with AI
        </h2>

        <p
          data-animate
          className="text-gray-300 text-xl md:text-xl max-w-2xl mx-auto"
          style={{
            fontFamily: "'Poppins', sans-serif",
            opacity: 0,
            transform: "translateY(20px)",
            transition:
              "opacity 0.8s ease-in-out 0.2s, transform 0.8s ease-in-out 0.2s",
            lineHeight: "1.7",
          }}
        >
          Gesture AI turns every hand gesture into words you can read —
          instantly. It's an AI-powered platform designed to make conversations
          with mute individuals seamless, natural, and inclusive.
        </p>
      </div>

      {/* Features Container */}
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Feature 1: Easy Accessibility */}
        <div
          data-animate
          className="relative flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            opacity: 0,
            transform: "translateX(-40px)",
            transition:
              "opacity 0.8s ease-in-out 0.4s, transform 0.8s ease-in-out 0.4s",
          }}
        >
          {/* Laptop Image */}
          <div className="relative z-10 flex justify-center md:w-1/2">
            <div
              className="relative"
              style={{
                filter: "drop-shadow(0 0 40px rgba(138, 43, 226, 0.5))",
              }}
            >
              <img
                src="/Home/laptop.png"
                alt="Laptop with webcam"
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 md:w-1/2 text-center md:text-left">
            <h3
              className="text-white text-3xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "'BalooBhai2', sans-serif" }}
            >
              <span className="mr-2">•</span>
              Easy Accessibility (
              <span
                style={{
                  background:
                    "linear-gradient(270deg, rgba(58, 115, 140, 0.2) 0%, #64C7F2 0.01%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                via webcam
              </span>{" "}
              )
            </h3>
            <p
              className="text-gray-300 text-base md:text-lg"
              style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.7" }}
            >
              All you need is a webcam — because our AI doesn't judge your
              camera quality, only your gestures
            </p>
          </div>
        </div>

        {/* Feature 2: Real-Time Detection */}
        <div
          data-animate
          className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8"
          style={{
            opacity: 0,
            transform: "translateX(40px)",
            transition:
              "opacity 0.8s ease-in-out 0.6s, transform 0.8s ease-in-out 0.6s",
          }}
        >
          {/* Phone Image */}
          <div className="relative z-10 flex justify-center md:w-1/2">
            <div
              className="relative"
              style={{
                filter: "drop-shadow(0 0 40px rgba(100, 100, 255, 0.5))",
              }}
            >
              <img
                src="/Home/Mobile.png"
                alt="Phone chat interface"
                className="w-full max-w-xs"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 md:w-1/2 text-center md:text-left">
            <h3
              className="text-white text-3xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "'BalooBhai2', sans-serif" }}
            >
              <span className="mr-2">•</span>
              Real-Time{" "}
              <span
                style={{
                  background:
                    "linear-gradient(270deg, rgba(58, 115, 140, 0.2) 0%, #64C7F2 0.01%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Detection
              </span>
            </h3>
            <p
              className="text-gray-300 text-base md:text-lg"
              style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.7" }}
            >
              No waiting, no loading bars — Gesture AI catches your moves faster
              than your friend screenshots drama.
            </p>
          </div>
        </div>

        {/* Feature 3: Accurate Translation */}
        <div
          data-animate
          className="relative flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            opacity: 0,
            transform: "translateX(-40px)",
            transition:
              "opacity 0.8s ease-in-out 0.8s, transform 0.8s ease-in-out 0.8s",
          }}
        >
          {/* Translation Image */}
          <div className="relative z-10 flex justify-center md:w-1/2">
            <div
              className="relative"
              style={{
                filter: "drop-shadow(0 0 40px rgba(138, 43, 226, 0.5))",
              }}
            >
              <img
                src="/Home/translate.png"
                alt="Hand gestures"
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 md:w-1/2 text-center md:text-left">
            <h3
              className="text-white text-3xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "'BalooBhai2', sans-serif" }}
            >
              <span className="mr-2">•</span>
              Accurate{" "}
              <span
                style={{
                  background:
                    "linear-gradient(270deg, rgba(58, 115, 140, 0.2) 0%, #64C7F2 0.01%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Translation
              </span>
            </h3>
            <p
              className="text-gray-300 text-base md:text-lg"
              style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.7" }}
            >
              Our AI doesn't "guess" your gestures — it gets them. No more
              awkward mistranslations… unless you're waving to your crush
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
