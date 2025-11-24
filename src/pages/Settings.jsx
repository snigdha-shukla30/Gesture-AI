import { useState } from "react";
import LeftSidebar from "../Components/CallPage/Leftsidebar";
import GestureAILogo from "../Components/UI/Logo";

export default function Settings() {
  const [mobilePush, setMobilePush] = useState(false);
  const [desktopNotif, setDesktopNotif] = useState(false);
  const [emailNotif, setEmailNotif] = useState(false);
  const [appearance, setAppearance] = useState("Dark");
  const [language, setLanguage] = useState("Eng");

  return (
    <div
      className="flex h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/Login/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Gesture AI Logo */}
      <GestureAILogo top="28px" left="110px" />

      {/* ---- Hello Section (moved outside big box) ---- */}
      <div
        className="absolute flex items-center space-x-3"
        style={{
          top: "20px",
          right: "40px",
          zIndex: 50,
        }}
      >
        {/* small circular avatar */}
        <div
          className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
          style={{
            boxShadow: "0 4px 10px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <img
            src="/src/assets/login-logos/call image.jpg"
            alt="avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Hello + name stacked */}
        <div className="text-right">
          <div
            style={{
              fontFamily: "'Paprika', sans-serif",
              fontWeight: 400,
              fontSize: 26,
              lineHeight: "100%",
              color: "#FFFFFF",
            }}
          >
            Hello
          </div>
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              color: "#9BE0FF",
            }}
          >
            Ayush
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}

      {/* Main area */}
      <div className="flex-1 flex items-start justify-start relative">
        {/* RIGHT BIG BOX */}
        <div
          className="ml-22 mt-22 relative"
          style={{
            height: 577,
            width: 1218,
            borderRadius: 16,
            padding: "1.5px",
            background:
              "linear-gradient(102.38deg, rgba(51,97,248,1) 2.72%, rgba(30,57,146,1) 36.75%)",
            boxShadow: "0 8px 30px rgba(2,6,23,0.6)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="w-full h-full rounded-[14px]"
            style={{
              background: "linear-gradient(180deg, #04122F 0%, #061530 100%)",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.03)",
              boxSizing: "border-box",
              padding: "32px 48px",
            }}
          >
            {/* Section title */}
            <div className="flex justify-between items-center mb-8">
              <div
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontSize: 32,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#CDE9FF",
                }}
              >
                Settings :-
              </div>
            </div>

            {/* Settings Items */}
            <div className="space-y-8">
              {/* Mobile Push Notification */}
              <div className="flex justify-between items-center">
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#FFFFFF",
                      marginBottom: 4,
                    }}
                  >
                    Mobile Push Notificaton
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Recieve push notification whenever requires your attention
                  </div>
                </div>
                <div
                  className="relative inline-block w-14 h-7 rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    background: mobilePush
                      ? "linear-gradient(90deg, #3361F8 0%, #1E3992 100%)"
                      : "rgba(255,255,255,0.2)",
                  }}
                  onClick={() => setMobilePush(!mobilePush)}
                >
                  <div
                    className="absolute top-1 w-5 h-5 rounded-full transition-all duration-300"
                    style={{
                      background: mobilePush ? "#FFFFFF" : "#666",
                      left: mobilePush ? "calc(100% - 24px)" : "4px",
                    }}
                  ></div>
                </div>
              </div>

              {/* Desktop Notificaton */}
              <div className="flex justify-between items-center">
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#FFFFFF",
                      marginBottom: 4,
                    }}
                  >
                    Desktop Notificaton
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Recieve desktop push notification whenever requires your attention
                  </div>
                </div>
                <div
                  className="relative inline-block w-14 h-7 rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    background: desktopNotif
                      ? "linear-gradient(90deg, #3361F8 0%, #1E3992 100%)"
                      : "rgba(255,255,255,0.2)",
                  }}
                  onClick={() => setDesktopNotif(!desktopNotif)}
                >
                  <div
                    className="absolute top-1 w-5 h-5 rounded-full transition-all duration-300"
                    style={{
                      background: desktopNotif ? "#FFFFFF" : "#666",
                      left: desktopNotif ? "calc(100% - 24px)" : "4px",
                    }}
                  ></div>
                </div>
              </div>

              {/* Email Notificaton */}
              <div className="flex justify-between items-center">
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#FFFFFF",
                      marginBottom: 4,
                    }}
                  >
                    Email Notificaton
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Recieve emails whenever requires your attention
                  </div>
                </div>
                <div
                  className="relative inline-block w-14 h-7 rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    background: emailNotif
                      ? "linear-gradient(90deg, #3361F8 0%, #1E3992 100%)"
                      : "rgba(255,255,255,0.2)",
                  }}
                  onClick={() => setEmailNotif(!emailNotif)}
                >
                  <div
                    className="absolute top-1 w-5 h-5 rounded-full transition-all duration-300"
                    style={{
                      background: emailNotif ? "#FFFFFF" : "#666",
                      left: emailNotif ? "calc(100% - 24px)" : "4px",
                    }}
                  ></div>
                </div>
              </div>

              {/* Appearance */}
              <div className="flex justify-between items-center">
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#FFFFFF",
                      marginBottom: 4,
                    }}
                  >
                    Appearance
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Coustomize how you theams looks on your device
                  </div>
                </div>
                <select
                  value={appearance}
                  onChange={(e) => setAppearance(e.target.value)}
                  className="px-6 py-2 rounded cursor-pointer outline-none"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#FFFFFF",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                  }}
                >
                  <option value="Dark" style={{ background: "#04122F" }}>
                    Dark
                  </option>
                  <option value="Light" style={{ background: "#04122F" }}>
                    Light
                  </option>
                  <option value="Auto" style={{ background: "#04122F" }}>
                    Auto
                  </option>
                </select>
              </div>

              {/* Language */}
              <div className="flex justify-between items-center">
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#FFFFFF",
                      marginBottom: 4,
                    }}
                  >
                    Language
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Coustomize how you theams looks on your device
                  </div>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="px-6 py-2 rounded cursor-pointer outline-none"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#FFFFFF",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                  }}
                >
                  <option value="Eng" style={{ background: "#04122F" }}>
                    Eng
                  </option>
                  <option value="Hindi" style={{ background: "#04122F" }}>
                    Hindi
                  </option>
                  <option value="Spanish" style={{ background: "#04122F" }}>
                    Spanish
                  </option>
                  <option value="French" style={{ background: "#04122F" }}>
                    French
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
