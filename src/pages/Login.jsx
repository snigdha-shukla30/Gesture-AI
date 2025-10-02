import React, { useState } from "react";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import Card from "../Components/UI/card";
import GradientButton from "../Components/UI/GradientButton";
import GestureAILogo from "../Components/UI/Logo";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/Login/login-bg.jpg')" }}
    >
      {/* Gesture AI Logo Text */}
      <GestureAILogo top="28px" left="46px" />

      {/* Card Wrapper */}

      <Card width="500px" height="auto">
        {/* Top Section */}
        <div className="flex flex-col mb-6 gap-2">
          <div className="flex items-center gap-3">
            <button className="text-white hover:text-blue-400 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-[32px] font-bold text-white leading-[41px]">
              Welcome Back !
            </h2>
          </div>
          <p
            className="text-[#63677C] font-extrabold ml-9"
            style={{
              width: "399px",
              height: "36px",
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "15px",
              lineHeight: "20px",
              letterSpacing: "0%",
            }}
          >
            Start Communicating with sign language more easily with the help of
            Gesture AI
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col ml-9 gap-5">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[398px] h-[49px] px-4 text-md text-gray-300 placeholder-gray-500 rounded-[10px] outline-none transition-all"
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

          <div className="relative w-full max-w-[398px]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[49px] px-4 text-md text-gray-300 placeholder-gray-500 rounded-[10px] outline-none transition-all pr-12"
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
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="text-right">
            <button className="text-[#009CFE] text-sm hover:text-blue-300 transition-colors">
              Forgot Password ?
            </button>
          </div>

          <GradientButton onClick={handleSubmit}>Login</GradientButton>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-300 text-sm mt-6">
          Don't have an account ?{" "}
          <button className="text-[#009CFE] hover:text-blue-300 transition-colors font-medium">
            Sign up
          </button>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-700/50" />
          <span className="mx-3 text-gray-500 text-xs">Or continue with</span>
          <hr className="flex-grow border-gray-700/50" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {/* Google */}
          <button className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
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
          <button className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          {/* Apple */}
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="black">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
          </button>
        </div>
      </Card>
      {/* </div> */}
    </div>
  );
}
