import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/UI/card";
import GradientButton from "../Components/UI/GradientButton";
import GestureAILogo from "../Components/UI/Logo";
import { callBackend } from "../api/api"; // ⭐

function emailVerification() {

  const connectBackend = async () => { // ⭐
    try {
      const res = await callBackend({ page: "EmailVerification" });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Email Verification</h1>

      <button onClick={connectBackend}>Verify via Backend</button> {/* ⭐ */}
    </div>
  );
}




export default function EmailVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]); // 4 digit OTP
  const navigate = useNavigate();

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // sirf last character
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join(""); // all 4 digits as a single string
    console.log("OTP entered:", otpValue);
    // Navigate to signup verified page after verification
    navigate("/signupverified");
  };

  const handleResendOTP = () => {
    // Reset OTP fields
    setOtp(["", "", "", ""]);
    // In a real app, you would resend the OTP here
    console.log("Resending OTP...");
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/Login/login-bg.jpg')" }}
    >
      {/* Gesture AI Logo Text */}
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <GestureAILogo top="28px" left="46px" />
      </div>

      <Card width="500px" height="auto">
        {/* Top Section */}
        <div className="flex flex-col mb-6 gap-2">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate("/signup")}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-[32px] font-bold text-white leading-[41px]">
              Verify Code
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
            Please enter the code we just sent to your email.
          </p>
        </div>

        <div className="flex flex-col w-[398px] h-49px ml-9 gap-5 rounded-[10px] p-[1.5px]">
          <div className="flex ml-9 gap-3">
            {" "}
            {/* Row container */}
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, idx)}
                className="w-[69px] h-[49px] text-center text-gray-300 rounded-[10px] outline-none transition-all"
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
            ))}
          </div>
          <div
            className="flex flex-col items-center mt-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontStyle: "medium",
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#8E94B180",
            }}
          >
            <span>Didn't receive OTP?</span>
            <button 
              onClick={handleResendOTP}
              className="mt-1 text-[#009CFE] hover:text-blue-300 transition-colors font-medium"
            >
              Resend OTP
            </button>
          </div>

          <GradientButton onClick={handleSubmit}>Verify</GradientButton>
        </div>
      </Card>
    </div>
  );
}
