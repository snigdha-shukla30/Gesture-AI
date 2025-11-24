import React, { useState } from "react";
import { Home, Video, Settings, User } from "lucide-react";

export default function LeftSidebar() {
  const [active, setActive] = useState("home");

  const buttons = [
    { id: "home", icon: Home, label: "Home" },
    { id: "video", icon: Video, label: "Video" },
    { id: "user", icon: User, label: "User" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    // Outer wrapper — for rounded gradient border
    <div
      className="rounded-t-[16px] p-[1.5px] shadow-[6px_0px_4px_0px_rgba(0,0,0,0.5)]"
      style={{
        width: "86px",
        height: "100%",
        background:
          "linear-gradient(90deg, #04122F 0%, rgba(14, 57, 149, 0.2) 100%)",
      }}
    >
      {/* Inner box — actual sidebar background */}
      <div
        className="h-full flex flex-col items-center py-6 rounded-t-[16px]"
        style={{
          background:
            "linear-gradient(90deg, #04122F 0%, rgba(14, 57, 149, 0.2) 100%)",
        }}
      >
        {/* Top Button (Home) */}
        <button
          onClick={() => setActive("home")}
          className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
            active === "home"
              ? "w-[87px] h-[52px] bg-[#0C1127] border border-[#8B7F7F] rounded-[10px]"
              : "w-[26px] h-[25.4px] rounded-full"
          }`}
        >
          <Home
            className={`transition-colors duration-300 ease-in-out ${
              active === "home" ? "text-blue-300" : "text-white"
            }`}
          />
        </button>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Bottom Buttons */}
        <div className="flex flex-col items-center space-y-6">
          {buttons.slice(1).map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.id}
                onClick={() => setActive(btn.id)}
                className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
                  active === btn.id
                    ? "w-[87px] h-[52px] bg-[#0C1127] border border-[#8B7F7F] rounded-[10px]"
                    : "w-[26px] h-[25.4px] rounded-full"
                }`}
              >
                <Icon
                  className={`transition-colors duration-300 ease-in-out ${
                    active === btn.id ? "text-blue-300" : "text-white"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
