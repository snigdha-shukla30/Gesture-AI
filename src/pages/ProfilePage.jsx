
import LeftSidebar from "../Components/CallPage/Leftsidebar";
import GestureAILogo from "../Components/UI/Logo";

export default function Profile() {
 

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
        {/* Left video/card */}
        <div
          className="relative rounded-[30px] p-[1.5px]"
          style={{
            width: 293,
            height: 576,
            marginLeft: 50,
            marginTop: 89,
            background:
              "linear-gradient(102.38deg, #3361F8 2.72%, #1E3992 36.75%)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            flexShrink: 0,
          }}
        >
          <div
            className="w-full h-full rounded-[30px] overflow-hidden relative"
            style={{ backgroundColor: "#0F172A" }}
          >
            <img
              src="/src/assets/login-logos/call image.jpg"
              alt="Person using sign language"
              className="w-full h-full object-cover"
            />
            
            {/* Upload button at bottom */}
            <button
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#D1D5DB",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Upload your profile picture
            </button>
          </div>
        </div>


        {/* RIGHT BIG BOX */}
        <div
          className="ml-8 mt-22 relative"
          style={{
            height: 577,
            width: 897,
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
            {/* Section title with Edit button */}
            <div className="flex justify-between items-center mb-6">
              <div
                style={{
                    fontFamily: "'Roboto Condensed', sans-serif", // Roboto Condensed
                    fontWeight: 600, // SemiBold
                    fontStyle: "normal", // SemiBold is weight, style normal
                    fontSize: 32,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#CDE9FF",
                }}
              >
                Personal Information :-
              </div>
              <button
                className="px-5 py-1.5 rounded-full text-sm"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "#FFFFFF",
                  fontFamily: "'Poppins', sans-serif",
                  backgroundColor: "transparent",
                }}
              >
                Edit ✏️
              </button>
            </div>

            {/* Form - full width now */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label
                  className="block text-xs mb-2"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Ayush"
                  className="w-full h-[49px] px-4 text-md placeholder-gray-500 text-gray-100 rounded-[10px] outline-none"
                  style={{
                    border: "1.5px solid",
                    borderImageSource:
                      "linear-gradient(90deg, #030757 0%, #8688B9 48.08%, #030757 100%)",
                    borderImageSlice: 1,
                    boxShadow:
                      "0px 2px 1px 0px #00000040 inset, 0px -4px 3px 0px #00000070 inset, 4px 0px 2px 0px #00000080 inset, -4px 0px 2px 0px #00000080 inset",
                    backgroundColor: "#272A38",
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-xs mb-2"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Prajapati"
                  className="w-full h-[49px] px-4 text-md placeholder-gray-600 text-gray-100 rounded-[10px] outline-none"
                  style={{
                    border: "1.5px solid",
                    borderImageSource:
                      "linear-gradient(90deg, #030757 0%, #8688B9 48.08%, #030757 100%)",
                    borderImageSlice: 1,
                    boxShadow:
                      "0px 2px 1px 0px #00000040 inset, 0px -4px 3px 0px #00000070 inset, 4px 0px 2px 0px #00000080 inset, -4px 0px 2px 0px #00000080 inset",
                    backgroundColor: "#272A38",
                  }}
                />
              </div>
            </div>

            {/* Next row */}
            <div className="grid grid-cols-2 gap-8 mt-6">
              <div>
                <label
                  className="block text-xs mb-2"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="ayushprajapati574@gmail.com"
                  className="w-full h-[49px] px-4 text-md placeholder-gray-600 text-gray-100 rounded-[10px] outline-none"
                  style={{
                    border: "1.5px solid",
                    borderImageSource:
                      "linear-gradient(90deg, #030757 0%, #8688B9 48.08%, #030757 100%)",
                    borderImageSlice: 1,
                    boxShadow:
                      "0px 2px 1px 0px #00000040 inset, 0px -4px 3px 0px #00000070 inset, 4px 0px 2px 0px #00000080 inset, -4px 0px 2px 0px #00000080 inset",
                    backgroundColor: "#272A38",
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-xs mb-2"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="+91"
                    className="w-16 h-[49px] px-3 text-md placeholder-gray-600 text-gray-100 rounded-[10px] outline-none text-center"
                    style={{
                      border: "1.5px solid",
                      borderImageSource:
                        "linear-gradient(90deg, #030757 0%, #8688B9 48.08%, #030757 100%)",
                      borderImageSlice: 1,
                      boxShadow:
                        "0px 2px 1px 0px #00000040 inset, 0px -4px 3px 0px #00000070 inset, 4px 0px 2px 0px #00000080 inset, -4px 0px 2px 0px #00000080 inset",
                      backgroundColor: "#272A38",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="8112398739"
                    className="flex-1 h-[49px] px-4 text-md placeholder-gray-600 text-gray-100 rounded-[10px] outline-none"
                    style={{
                      border: "1.5px solid",
                      borderImageSource:
                        "linear-gradient(90deg, #030757 0%, #8688B9 48.08%, #030757 100%)",
                      borderImageSlice: 1,
                      boxShadow:
                        "0px 2px 1px 0px #00000040 inset, 0px -4px 3px 0px #00000070 inset, 4px 0px 2px 0px #00000080 inset, -4px 0px 2px 0px #00000080 inset",
                      backgroundColor: "#272A38",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Linked social handles */}
            <div style={{ marginTop: 40 }}>
              <div
                style={{
                   fontFamily: "'Roboto Condensed', sans-serif", // Roboto Condensed
                    fontWeight: 600, // SemiBold
                    fontStyle: "normal", // SemiBold is weight, style normal
                    fontSize: 32,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#CDE9FF",
                    marginBottom: "16px"
                }}
              >
                Linked social handles :-
              </div>

              <div className="flex items-center gap-4">
                {/* Google */}
                <button className="w-14 h-14 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </button>

                {/* Facebook */}
                <button className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Logout button bottom-right */}
            <div className="absolute right-10 bottom-6">
              <button
                className="px-6 py-2.5 rounded-full shadow flex items-center gap-2"
                style={{
                  background: "linear-gradient(90deg,#FFFFFF,#E6F7FF)",
                  color: "#08102A",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



