import React from "react";

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
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '1.5em',
            textAlign: 'left',
            color: '#A0A5BE',
          }}
        >
          Expressed in sign
        </div>

        {/* Like/Thumbs Up Button */}
        <button
          className="absolute cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            left: '252px',
            top: '18px',
            width: '24px',
            height: '24px',
            background: 'transparent',
            border: 'none',
            padding: 0,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="#A0A5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Separator line */}
        <div
          className="absolute"
          style={{
            left: '20px',
            top: '51px',
            width: '253px',
            height: '0.5px',
            background: 'rgba(160, 165, 190, 0.3)',
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
          {messages.slice(-50).map((msg, idx) => (
            <div
              key={idx}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.6em',
                textAlign: 'left',
                color: 'rgba(160, 165, 190, 0.7)',
                width: '100%',
              }}
            >
              • {msg}
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
            top: '520px',
            width: '256px',
            height: '44px',
            padding: '1px',
            background: 'rgba(50, 55, 75, 0.6)',
            borderRadius: '8px',
          }}
        >
          {/* Inner background box */}
          <div
            className="flex items-center h-full rounded-[8px]"
            style={{
               padding: '10px',
              border: "1.5px solid",
              borderImageSource:
                "linear-gradient(90deg, #030757 0%, #8688B9 48.08%, #030757 100%)",
              borderImageSlice: 1,
              boxShadow:
                "0px 2px 1px 0px #00000040 inset, 0px -4px 3px 0px #00000070 inset, 4px 0px 2px 0px #00000080 inset, -4px 0px 2px 0px #00000080 inset",
              backgroundColor: "#272A38",
            }}
          >
            {/* Paperclip Icon */}
            <button
              className="flex-shrink-0 hover:opacity-80 transition-opacity "
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4401 11.0491L12.2501 20.2391C10.9025 21.5867 9.07928 22.3481 7.18009 22.3481C5.28091 22.3481 3.45769 21.5867 2.11009 20.2391C0.762494 18.8915 0.00109863 17.0683 0.00109863 15.1691C0.00109863 13.2699 0.762494 11.4467 2.11009 10.0991L11.3001 0.909098C12.2945 -0.0852871 13.6397 -0.639645 15.0451 -0.639645C16.4505 -0.639645 17.7957 -0.0852871 18.7901 0.909098C19.7845 1.90348 20.3388 3.24868 20.3388 4.6541C20.3388 6.05952 19.7845 7.40472 18.7901 8.3991L9.59009 17.5891C9.09289 18.0863 8.42029 18.3651 7.71759 18.3651C7.01489 18.3651 6.34229 18.0863 5.84509 17.5891C5.34788 17.0919 5.06906 16.4193 5.06906 15.7166C5.06906 15.0139 5.34788 14.3413 5.84509 13.8441L14.5401 5.1591" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Input field */}
            <input
              type="text"
              placeholder=""
              className="flex-1 bg-transparent text-white text-sm outline-none"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: '#A0A5BE',
                fontSize: '13px',
              }}
            />

            {/* AI Sparkle Icon */}
            <button
              className="flex-shrink-0 hover:opacity-80 transition-opacity"
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L13.5 7.5L18 9L13.5 10.5L12 15L10.5 10.5L6 9L10.5 7.5L12 3Z" fill="#6B7280"/>
                <path d="M19 12L19.75 14.25L22 15L19.75 15.75L19 18L18.25 15.75L16 15L18.25 14.25L19 12Z" fill="#6B7280"/>
                <path d="M19 3L19.75 5.25L22 6L19.75 6.75L19 9L18.25 6.75L16 6L18.25 5.25L19 3Z" fill="#6B7280"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}






