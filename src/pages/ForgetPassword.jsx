import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/UI/card";
import GradientButton from "../Components/UI/GradientButton";
import GestureAILogo from "../Components/UI/Logo";
import { useAuth } from "../contexts/AuthContext";
import { callBackend } from "../api/api"; // ⭐

function forgetPassword() {

  const connectBackend = async () => { // ⭐
    try {
      const res = await callBackend({ page: "ForgetPassword" });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Forget Password</h1>

      <button onClick={connectBackend}>Connect Backend</button> {/* ⭐ */}
    </div>
  );
}




export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const { error } = await resetPassword(email);
      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
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
              type="button"
              onClick={() => navigate("/login")}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-[32px] font-bold text-white leading-[41px]">
              Forget Password ?
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
            Forget Password , don't worry we are here.
          </p>
        </div>

        <div className="flex flex-col ml-9 gap-5 rounded-[10px] p-[1.5px]">
          <input
            type="email"
            placeholder="Enter registered Email Address"
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

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {success && (
            <p className="text-green-500 text-sm text-center">
              Password reset link sent! Check your email.
            </p>
          )}

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
            <span>Didn't receive link?</span>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="mt-1 text-[#009CFE] hover:text-blue-300 transition-colors font-medium"
            >
              Resend Link
            </button>
          </div>

          <GradientButton onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </GradientButton>

          <div className="flex justify-center my-6">
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500, // Medium
                fontStyle: "normal", // Medium corresponds to normal style in CSS
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#8E94B14D",
              }}
            >
              Password reset link will be shared on registered email id, use it,
              reset your password and continue to login.
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
