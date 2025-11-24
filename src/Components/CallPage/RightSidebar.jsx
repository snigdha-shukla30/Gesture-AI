import React from "react";
import { Paperclip, Send } from "lucide-react";

export default function RightSidebar({ messages }) {
  return (
    // Outer wrapper for gradient border + rounded corners
    <div
      className="rounded-[16px]"
      style={{
        width: "293px",
        height: "578px",
        padding: '1px',
        background: "linear-gradient(105deg, rgba(51, 97, 248, 1) 3%, rgba(30, 57, 146, 1) 42%)",
        boxShadow: "6px 0px 4px 0px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Inner container */}
      <div
        className="relative h-full rounded-[16px] overflow-hidden"
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: "url('/Login/chatbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header - "Expressed in sign" */}
        <div
          className="absolute"
          style={{
            left: '20px',
            top: '15px',
            width: '175px',
            height: '30px',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '1.5em',
            textAlign: 'left',
            color: '#8E94B1',
          }}
        >
          Expressed in sign
        </div>

        {/* Like/Thumbs Up Button */}
        <button
          className="absolute cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            left: '252px',
            top: '20px',
            width: '20.74px',
            height: '20.2px',
            background: 'transparent',
            border: 'none',
            padding: 0,
          }}
        >
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.23 0L15.51 0L20.2 4L20.2 15.1"
              stroke="rgba(90, 95, 116, 0.5)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 4L0 15.1L6.5 15.1"
              stroke="rgba(90, 95, 116, 0.5)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>

        {/* Separator line */}
        <div
          className="absolute"
          style={{
            left: '20px',
            top: '51px',
            width: '264px',
            height: '1px',
            background: '#D9D9D9',
          }}
        />

        {/* Messages container */}
        <div
          className="absolute flex flex-col overflow-y-auto hide-scrollbar"
          style={{
            left: '12px',
            top: '66px',
            width: '253px',
            height: '437px',
            gap: '25px',
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '1.5em',
                textAlign: 'left',
                color: 'rgba(142, 148, 177, 0.6)',
                width: '100%',
              }}
            >
              {msg}
            </div>
          ))}
        </div>

        {/* Scrollbar Background */}
        <div
          className="absolute"
          style={{
            left: '278px',
            top: '66px',
            width: '6px',
            height: '431px',
            background: '#272A38',
            borderRadius: '27px',
          }}
        />
        {/* Scrollbar Active */}
        <div
          className="absolute"
          style={{
            left: '278px',
            top: '447px',
            width: '6px',
            height: '51px',
            background: '#009CFE',
            borderRadius: '27px',
          }}
        />

        {/* Input area */}
        <div
          className="absolute"
          style={{
            left: '18px',
            top: '515px',
            width: '256px',
            height: '49px',
            padding: '1.5px',
            background: 'linear-gradient(90deg, rgba(3, 7, 87, 1) 0%, rgba(134, 136, 185, 1) 48%, rgba(3, 7, 87, 1) 100%)',
            borderRadius: '10px',
          }}
        >
          {/* Inner background box */}
          <div
            className="flex items-center h-full rounded-[10px]"
            style={{
              backgroundColor: "#272A38",
              boxShadow:
                "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.5), inset 0px -4px 4px 0px rgba(0, 0, 0, 0.5), inset 4px 0px 4px 0px rgba(0, 0, 0, 0.5), inset -4px 0px 4px 0px rgba(0, 0, 0, 0.5)",
              paddingLeft: '14.66px',
              paddingRight: '16.38px',
            }}
          >
            {/* Paperclip Icon - Vector */}
            <div
              style={{
                width: '21.83px',
                height: '22.71px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 4L0 15.1L6.5 15.1"
                  stroke="rgba(90, 95, 116, 0.5)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M5.23 0L15.51 0L20.2 4"
                  stroke="rgba(90, 95, 116, 0.5)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Input field */}
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder-slate-500 mx-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
              }}
            />

            {/* AI Icon */}
            <div
              style={{
                width: '23.24px',
                height: '23.24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.5,
                flexShrink: 0,
              }}
            >
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.5" cy="11.5" r="8.52" fill="#5A5F74" />
                <circle cx="11.5" cy="11.5" r="4.26" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

