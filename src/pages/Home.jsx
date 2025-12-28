// src/pages/homepage.jsx
import React from 'react';
import Header from '../Components/HomePage/header';
import GestureAIHero from '../Components/HomePage/hero';
import Features from '../Components/HomePage/features';
import UseCase from '../Components/HomePage/usecase';
import Footer from '../Components/HomePage/footer';


import { callBackend } from "../api/api"; // ⭐ ADDED

function home() {

  const connectBackend = async () => { // ⭐ ADDED
    try {
      const res = await callBackend({ page: "Home" });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Home</h1>

      <button
  onClick={connectBackend}
  style={{ marginTop: "90px", marginLeft: "20px" }}
>
  Connect Backend
</button>

    </div>
  );
}





export default function Home() {
  return (
    <div className="w-full min-h-screen" style={{ background: '#FFFFFF' }}>
      {/* Header - Full width, fixed */}
      <Header />

      {/* Main Content - 1360px container centered */}
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          maxWidth: '100%',
          overflow: 'visible',
          marginTop: '78px', // Space for fixed header
        }}
      >
        {/* Hero Section */}
        <GestureAIHero />

        {/* Features Section */}
        <Features /> 

        {/* Use Case Section */}
        <UseCase /> 

        {/* Footer */}
        <Footer /> 
      </div>
    </div>
  );
}
