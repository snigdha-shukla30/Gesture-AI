import React, { useState } from "react";
import LeftSidebar from "../Components/CallPage/Leftsidebar";
import GestureAILogo from "../Components/UI/Logo";
import RightSidebar from "../Components/CallPage/RightSidebar";

export default function CallPage() {
  const [messages] = useState([
    "Hey!",
    "Just wanted to check if you reached safely.",
    "The traffic was insane today, I hope you didn't get stuck",
    "Also, don't forget we have that meeting tomorrow at 10.",
    "By the way, I found that café you were talking about... looks amazing",
    "Sending you the link rn",
  ]);

  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: "url('/Login/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Gesture AI Logo Text — kept exactly where it was */}
        <GestureAILogo top="28px" left="110px" />

        {/* Video Feed */}
        <div className="flex-1 p-6 flex items-start justify-start">
          {/* OUTER WRAPPER: gradient border with rounded corners (the trick) */}
          <div
            className="relative rounded-[30px] p-[1.5px]"
            style={{
              width: "1000px",
              height: "576px",
              top: "89px",
              left: "50px",
              background:
                "linear-gradient(102.38deg, #3361F8 2.72%, #1E3992 36.75%)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* INNER BOX: actual background & rounded overflow for the image */}
            <div
              className="w-full h-full rounded-[30px] overflow-hidden"
              style={{
                backgroundColor: "#0F172A", // fallback bg behind image
              }}
            >
              <img
                src="/src/assets/login-logos/call image.jpg"
                alt="Person using sign language"
                className="w-full h-full object-cover"
                style={{
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar (unchanged layout) */}
      <div className="w-80 flex flex-col h-screen overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center space-x-3 p-4">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/src/assets/login-logos/call image.jpg"
              alt="Person using sign language"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Paprika', sans-serif",
                fontWeight: 400,
                fontSize: "30px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#FFFFFF",
              }}
            >
              Hello
            </div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "15px",
                color: "#009CFE",
              }}
            >
              Snigdha
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <RightSidebar messages={messages} />
      </div>
    </div>
  );
}
