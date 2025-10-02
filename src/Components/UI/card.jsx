// // components/Card.js


import React from "react";

export default function Card({ children, className = "", width = "500px", height = "auto" }) {
  return (
    <div
      className={`relative shadow-2xl rounded-[16px] p-[1.5px] ${className}`}
      style={{
        width: width,
        height: height,
        background: "linear-gradient(102.38deg, #3361F8 2.72%, #1E3992 36.75%)",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <div
        className="rounded-[16px] w-full h-full p-6"
        style={{
          background: "#04122F",
          boxShadow: "0px 4px 8px 0px #00000040",
        }}
      >
        {children}
      </div>
    </div>
  );
}



// import React from "react";

// export default function Card({ children, className }) {
//   return (
//     <div
//       className={`relative max-w-[500px] w-full shadow-2xl rounded-[16px] p-[1.5px] ${className}`}
//       style={{
//         background: "linear-gradient(102.38deg, #3361F8 2.72%, #1E3992 36.75%)",
//         boxShadow: "0px 4px 4px 0px #00000040",
//       }}
//     >
//       <div
//         className="rounded-[16px] w-full h-full p-6"
//         style={{
//           background: "#04122F",
//           boxShadow: "0px 4px 8px 0px #00000040",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }
