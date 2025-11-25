import React, { useEffect, useRef } from "react";
import GestureAILogo from "../UI/Logo";


export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll("[data-animate]");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.style.opacity = "1";
                const initialTransform = el.style.transform;
                if (initialTransform.includes("translateY")) {
                  el.style.transform = initialTransform.replace(
                    /translateY\([^)]+\)/,
                    "translateY(0)"
                  );
                } else if (initialTransform.includes("translateX")) {
                  el.style.transform = initialTransform.replace(
                    /translateX\([^)]+\)/,
                    "translateX(0)"
                  );
                } else {
                  el.style.transform = "translateY(0)";
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
          height: "366px",
          background: "#040311",
        }}
      >
        <div
          data-animate
          className="absolute"
          style={{
            left: "170px",
            top: "90px",
            width: "1159px",
            height: "187px",
            borderRadius: "20px",
            background:
              "linear-gradient(225deg, rgba(30, 86, 121, 1) 0%, rgba(163, 89, 228, 1) 100%)",
            opacity: 0,
            transform: "translateY(30px)",
            transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
          }}
        >
          {/* Content */}
          <div
            className="absolute"
            style={{
              left: "30px",
              top: "21px",
              width: "683px",
              height: "85px",
            }}
          >
            <h3
              className="text-white"
              style={{
                fontFamily: "'BalooBhai2', sans-serif",
                fontWeight: 800,
                fontSize: "40px",
                lineHeight: "1.25em",
                margin: 0,
              }}
            >
              Stay connected with us
            </h3>
            <p
              className="text-white"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "1.875em",
                marginTop: "5px",
              }}
            >
              We are open for feedbacks and do not forget to follow our socials
              for future updates.
            </p>
          </div>

          {/* Discord Button */}
          <div
            className="absolute flex items-center gap-2 px-3.75 py-2 rounded-xl cursor-pointer hover:shadow-lg"
            style={{
              left: "827.72px",
              top: "115px",
              background: "#FFFFFF",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}
          >
            <a href="#discord" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
                alt="Discord"
                width="26"
                height="26"
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "1.5em",
                  color: "#5865F2",
                }}
              >
                Discord
              </span>
            </a>
          </div>

          {/* Instagram Button */}
          <div
            className="absolute flex items-center gap-2 px-3.75 py-2 rounded-xl cursor-pointer hover:shadow-lg"
            style={{
              left: "968.22px",
              top: "115px",
              background: "#FFFFFF",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}
          >
            <a
              href="#instagram"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                alt="Instagram"
                width="26"
                height="26"
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "1.5em",
                  color: "#E4405F",
                }}
              >
                Instagram
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "206px",
          background: "#000000",
        }}
      >
        {/* Divider Line */}
        <div
          className="absolute"
          style={{
            left: "-1px",
            top: "146px",
            width: "1520px",
            height: "2px",
            background: "#D9D9D9",
            borderRadius: "43px",
          }}
        />

        {/* Gesture AI Logo */}
        <div
          data-animate
          className="absolute text-white"
          style={{
            left: "92px",
            top: "32px",
            
            textAlign: "center",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
          }}
        >
         <GestureAILogo />
        </div>

        {/* Footer Links */}
        <nav
          data-animate
          className="absolute flex items-center gap-6"
          style={{
            left: "525px",
            top: "70px",
            opacity: 0,
            transform: "translateY(20px)",
            transition:
              "opacity 0.8s ease-in-out 0.2s, transform 0.8s ease-in-out 0.2s",
          }}
        >
          <a
            href="#terms"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.419em",
              textAlign: "center",
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
              fontSize: "16px",
              lineHeight: "1.419em",
              textAlign: "center",
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
              fontSize: "16px",
              lineHeight: "1.419em",
              textAlign: "center",
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
            left: "600px",
            top: "160px",
            width: "318px",
            height: "23px",
            fontFamily: "'Paprika', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "1.419em",
            color: "#838383",
            opacity: 0,
            transform: "translateY(20px)",
            transition:
              "opacity 0.8s ease-in-out 0.4s, transform 0.8s ease-in-out 0.4s",
          }}
        >
          All rights reserved. Gesture AI Pvt LTD.
        </p>

        {/* Social Media Icons */}
        <div
          data-animate
          className="absolute flex items-center gap-4"
          style={{
            right: "54px",
            top: "70px",
            opacity: 0,
            transform: "translateY(20px)",
            transition:
              "opacity 0.8s ease-in-out 0.6s, transform 0.8s ease-in-out 0.6s",
          }}
        >
          {/* Discord */}
          <a href="#discord" className="hover:scale-110 transition-transform">
            <img 
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
              alt="Discord"
              width="32"
              height="32"
              style={{ objectFit: "contain", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            />
          </a>

          {/* Twitter */}
          <a href="#twitter" className="hover:scale-110 transition-transform">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              width="32"
              height="32"
              style={{ objectFit: "contain", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            />
          </a>

          {/* Instagram */}
          <a href="#instagram" className="hover:scale-110 transition-transform">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              width="32"
              height="32"
              style={{ objectFit: "contain", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            />
          </a>

          {/* Facebook */}
          <a href="#facebook" className="hover:scale-110 transition-transform">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              width="32"
              height="32"
              style={{ objectFit: "contain", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}





