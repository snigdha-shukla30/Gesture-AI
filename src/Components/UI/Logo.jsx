// components/GestureAILogo.js
import React from "react";

export default function GestureAILogo({
  top = "28px",
  left = "46px",
  width = "190px",
  height = "51px",
  mainColor = "#ffffff",
  accentColor = "#009CFE",
}) {
  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        fontFamily: "'Paprika', sans-serif",
        fontWeight: 400,
        fontSize: "36px",
        lineHeight: "100%",
        letterSpacing: "0%",
        textAlign: "center",
        color: mainColor,
      }}
    >
      Gesture{" "}
      <span
        style={{
          fontFamily: "'Paprika', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "36px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
          color: accentColor,
        }}
      >
        AI
      </span>
    </div>
  );
}
