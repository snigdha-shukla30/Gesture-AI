import React, { useState, useEffect, useRef } from "react";
import LeftSidebar from "../Components/CallPage/Leftsidebar";
import GestureAILogo from "../Components/UI/Logo";
import RightSidebar from "../Components/CallPage/RightSidebar";
import { callBackend } from "../api/api";
import { useAuth } from "../contexts/AuthContext";

function UserHeader() {
  const { user } = useAuth();
  const meta = user?.user_metadata || {};
  const avatar = meta.avatar_url || "/Login/callimage.jpg";
  const displayName = meta.full_name || meta.name || user?.email || "User";

  return (
    <>
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <img src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
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
          {displayName}
        </div>
      </div>
    </>
  );
}

export default function CallPage() {
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [currentGesture, setCurrentGesture] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const intervalRef = useRef(null);
  const [showDetection, setShowDetection] = useState(false);
  const flashTimerRef = useRef(null);
  const lastAddedRef = useRef({});
  const bufferRef = useRef([]);
  const bufferTimerRef = useRef(null);
  const DEBOUNCE_MS = 2500;
  const BUFFER_FLUSH_MS = 1500;

  const TRANSLATION_MAP = {
    HELLO: "Hello",
    "THANK YOU": "Thank you",
    YES: "Yes",
    NO: "No",
    PLEASE: "Please",
    SORRY: "Sorry",
    GOODBYE: "Goodbye",
    "HOW ARE YOU": "How are you",
  };

  // Start/Stop webcam
  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1020, height: 576 },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsRecording(true);
      startGestureDetection();
    } catch (error) {
      console.error("Error accessing webcam:", error);
      alert("Unable to access webcam. Please check permissions.");
    }
  };

  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (bufferTimerRef.current) {
      clearTimeout(bufferTimerRef.current);
      bufferTimerRef.current = null;
    }
    if (flashTimerRef.current) {
      clearTimeout(flashTimerRef.current);
      flashTimerRef.current = null;
    }
    setIsRecording(false);
    setCurrentGesture("");
  };

  // Capture frame and send to backend for gesture recognition
  const captureAndDetect = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize captured frame to reduce payload
    const MAX_W = 640;
    const MAX_H = 360;
    const vidW = video.videoWidth || 1020;
    const vidH = video.videoHeight || 576;
    const scale = Math.min(1, MAX_W / vidW, MAX_H / vidH);
    const w = Math.max(1, Math.round(vidW * scale));
    const h = Math.max(1, Math.round(vidH * scale));
    canvas.width = w;
    canvas.height = h;
    // Draw scaled frame
    ctx.drawImage(video, 0, 0, w, h);
    // compressed JPEG to reduce network
    const imageData = canvas.toDataURL("image/jpeg", 0.6);

    try {
      // Send to backend for gesture recognition
      const response = await callBackend({
        image: imageData,
        timestamp: Date.now(),
      });

      if (response && response.gesture) {
        const gesture = response.gesture;
        setCurrentGesture(gesture);

        const now = Date.now();
        const lastTime = lastAddedRef.current[gesture] || 0;
        const lastMsg = messages.length ? messages[messages.length - 1] : null;

        if (lastMsg !== gesture && now - lastTime > DEBOUNCE_MS) {
          lastAddedRef.current[gesture] = now;

          // buffer tokens to form sentences
          bufferRef.current.push(gesture);

          if (bufferTimerRef.current) clearTimeout(bufferTimerRef.current);
          bufferTimerRef.current = setTimeout(() => {
            const tokens = bufferRef.current.slice();
            bufferRef.current = [];
            bufferTimerRef.current = null;
            const words = tokens.map((t) => TRANSLATION_MAP[t] || t);
            const sentence = words.join(" ").trim();
            if (sentence) setMessages((prev) => [...prev, sentence]);
          }, BUFFER_FLUSH_MS);

          // brief visual indicator
          setShowDetection(true);
          if (flashTimerRef.current) clearTimeout(flashTimerRef.current);
          flashTimerRef.current = setTimeout(() => setShowDetection(false), 700);
        }
      }
    } catch (error) {
      console.error("Error detecting gesture:", error);
    }
  };

  // Start gesture detection loop
  const startGestureDetection = () => {
    // Capture and detect every 1 second
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(captureAndDetect, 1000);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopWebcam();
    };
  }, []);

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
        {/* Gesture AI Logo Text */}
        <GestureAILogo top="20px" left="110px" />

        {/* Video Feed */}
        <div className="flex-1 p-6 flex items-start justify-start">
          {/* OUTER WRAPPER: gradient border with rounded corners */}
          <div
            className="relative rounded-[30px] p-[1.5px]"
            style={{
              width: "1020px",
              height: "576px",
              top: "61px",
              left: "50px",
              background:
                "linear-gradient(102.38deg, #3361F8 2.72%, #1E3992 36.75%)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* INNER BOX: actual background & rounded overflow */}
            <div
              className="w-full h-full rounded-[30px] overflow-hidden relative"
              style={{
                backgroundColor: "#0F172A",
              }}
            >
              {/* Video element (hidden, used for capture) */}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
                style={{ display: isRecording ? "block" : "none" }}
              />
              
              {/* Placeholder image when not recording */}
                  {!isRecording && (
                    <img
                      src="/Login/callimage.jpg"
                      alt="Person using sign language"
                      className="w-full h-full object-cover"
                    />
                  )}

              {/* Canvas for capturing frames (hidden) */}
              <canvas ref={canvasRef} style={{ display: "none" }} />

              {/* Control Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={isRecording ? stopWebcam : startWebcam}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    isRecording
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isRecording ? "⏹ Stop Recording" : "▶ Start Gesture Detection"}
                </button>
              </div>

              {/* Current Gesture Display */}
              {currentGesture && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg">
                  Gesture: {currentGesture}
                </div>
              )}

              {/* Detection indicator */}
              {showDetection && (
                <div
                  className="absolute top-4 right-6 rounded-full"
                  style={{ width: 12, height: 12, background: '#00E0FF', boxShadow: '0 0 10px #00E0FF' }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 flex flex-col h-screen overflow-hidden ">
        {/* Chat Header */}
        <div className="flex items-center space-x-3 p-4">
          {/* Avatar */}
          <UserHeader />
        </div>

        {/* Chat Area */}
        <RightSidebar messages={messages} />
      </div>
    </div>
  );
}
