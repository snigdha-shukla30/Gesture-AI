import React, { useState, useEffect, useRef } from "react";
import LeftSidebar from "../Components/CallPage/Leftsidebar";
import GestureAILogo from "../Components/UI/Logo";
import RightSidebar from "../Components/CallPage/RightSidebar";
import { callBackend } from "../api/api";

export default function CallPage() {
  const [messages, setMessages] = useState([
    "Hey!",
    "Just wanted to check if you reached safely.",
    "The traffic was insane today, I hope you didn't get stuck",
    "Also, don't forget we have that meeting tomorrow at 10.",
    "By the way, I found that café you were talking about... looks amazing",
    "Sending you the link rn",
  ]);
  const [isRecording, setIsRecording] = useState(false);
  const [currentGesture, setCurrentGesture] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const intervalRef = useRef(null);

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
    setIsRecording(false);
    setCurrentGesture("");
  };

  // Capture frame and send to backend for gesture recognition
  const captureAndDetect = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to match video
    canvas.width = video.videoWidth || 1020;
    canvas.height = video.videoHeight || 576;

    // Draw video frame to canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to base64 image
    const imageData = canvas.toDataURL("image/jpeg", 0.8);

    try {
      // Send to backend for gesture recognition
      const response = await callBackend({
        image: imageData,
        timestamp: Date.now(),
      });

      if (response && response.gesture) {
        setCurrentGesture(response.gesture);
        
        // Add new gesture translation to messages
        setMessages((prev) => {
          // Only add if it's different from the last message to avoid duplicates
          if (prev.length === 0 || prev[prev.length - 1] !== response.gesture) {
            return [...prev, response.gesture];
          }
          return prev;
        });
      }
    } catch (error) {
      console.error("Error detecting gesture:", error);
    }
  };

  // Start gesture detection loop
  const startGestureDetection = () => {
    // Capture and detect every 2 seconds
    intervalRef.current = setInterval(captureAndDetect, 2000);
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
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 flex flex-col h-screen overflow-hidden ">
        {/* Chat Header */}
        <div className="flex items-center space-x-3 p-4">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/Login/callimage.jpg"
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
              Gesture AI
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <RightSidebar messages={messages} />
      </div>
    </div>
  );
}
