import React, { useEffect, useState } from 'react';

const PresentationalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes slideWordUp {
      0% {
        opacity: 0;
        transform: translateY(16px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .stagger-word {
      opacity: 0;
      display: inline-block;
      animation: slideWordUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .mesh-gradient-bg {
      background-image: radial-gradient(#2b74db0a 1px, transparent 1px);
      background-size: 24px 24px;
    }
    .glow-blob-1 {
      filter: blur(120px);
      mix-blend-mode: multiply;
    }
    .glow-blob-2 {
      filter: blur(120px);
      mix-blend-mode: multiply;
    }
    .saas-card {
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .saas-card:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: 0 30px 60px -15px rgba(43, 116, 219, 0.12);
    }
  `}} />
);

const ElegantStaggeredHeader = ({ text, sizeClass = "text-2xl sm:text-3xl lg:text-4xl", colorClass = "text-white" }) => {
  const words = text.split(" ");
  return (
    <h2 className={`${sizeClass} font-bold tracking-tight ${colorClass} leading-none text-left`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="stagger-word mr-2"
          style={{
            animationDelay: `${0.1 + index * 0.08}s`
          }}
        >
          {word}
        </span>
      ))}
    </h2>
  );
};

export default function App() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseOffset({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2B74DB] selection:text-white relative overflow-hidden flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 mesh-gradient-bg">
      <PresentationalStyles />

      {/* Subtle organic color blobs inspired by the mesh background of "Mission & Vision Statement _ Saas.jpg" */}
      <div 
        className="absolute top-1/4 left-1/3 w-[45vw] h-[45vw] rounded-full bg-[#2B74DB]/5 glow-blob-1 pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/3 w-[40vw] h-[40vw] rounded-full bg-[#FD6D02]/5 glow-blob-2 pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${-mouseOffset.x * 0.4}px, ${-mouseOffset.y * 0.4}px)` }}
      />

      {/* Main Core Container */}
      <div className="max-w-6xl w-full mx-auto relative">
        
        {/* Dynamic Wireframe Loops mimicking "Mission & Vision Statement _ Saas.jpg" */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          
          {/* Desktop Wireframe Layout (Horizontal Connector) */}
          <svg className="w-full h-full hidden lg:block" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Left schematic loop wrapping the Mission card */}
            <path 
              d="M 150 120 H 60 C 40 120, 40 460, 60 460 H 260 C 280 460, 280 500, 260 500 H 120" 
              stroke="#2B74DB" 
              strokeWidth="1.5" 
              strokeOpacity="0.25"
              strokeLinecap="round"
            />
            {/* Center connector line connecting the cards horizontally */}
            <line 
              x1="512" 
              y1="280" 
              x2="588" 
              y2="280" 
              stroke="#94a3b8" 
              strokeWidth="1.5" 
              strokeOpacity="0.4"
              strokeDasharray="4 4"
            />
            {/* Outer Right schematic loop wrapping the Vision card */}
            <path 
              d="M 950 160 H 1040 C 1060 160, 1060 500, 1040 500 H 840 C 820 500, 820 540, 840 540 H 980" 
              stroke="#FD6D02" 
              strokeWidth="1.5" 
              strokeOpacity="0.25"
              strokeLinecap="round"
            />
          </svg>

          {/* Mobile Wireframe Layout (Vertical Connector) */}
          <svg className="w-full h-full block lg:hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Upper schematic loop */}
            <path 
              d="M 80 140 H 40 C 20 140, 20 440, 40 440 H 120" 
              stroke="#2B74DB" 
              strokeWidth="1.5" 
              strokeOpacity="0.25"
              strokeLinecap="round"
            />
            {/* Vertical center connector line */}
            <line 
              x1="220" 
              y1="460" 
              x2="220" 
              y2="540" 
              stroke="#94a3b8" 
              strokeWidth="1.5" 
              strokeOpacity="0.4"
              strokeDasharray="4 4"
            />
            {/* Lower schematic loop */}
            <path 
              d="M 320 620 H 360 C 380 620, 380 920, 360 920 H 280" 
              stroke="#FD6D02" 
              strokeWidth="1.5" 
              strokeOpacity="0.25"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Responsive Flex Container: Side-by-Side on Desktop (lg), Vertical Stack on Mobile/Tablet */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center space-y-24 lg:space-y-0 lg:space-x-12 relative w-full">

          {/* --- MISSION CARD --- */}
          <div className="w-full max-w-lg lg:max-w-md xl:max-w-lg relative group flex flex-col">
            
            {/* Interlocking Clip-In Header Block */}
            <div className="absolute top-[-36px] left-8 sm:left-12 flex flex-col items-start z-20">
              {/* Tab Label using your `#2B74DB` theme */}
              <div className="bg-[#2B74DB] px-6 py-2 rounded-t-xl rounded-br-xl shadow-md border-b border-[#2B74DB]/20">
                <ElegantStaggeredHeader text="Mission" sizeClass="text-base sm:text-lg" colorClass="text-white" />
              </div>
              {/* Overlapping Key Joint Block */}
              <div className="w-5 h-5 bg-[#2B74DB] ml-4 -mt-[1px] relative">
                {/* Visual Lock Inner Notch */}
                <div className="absolute inset-1 bg-white/20 rounded-sm" />
              </div>
            </div>

            {/* Main Card Body */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 text-left shadow-xl shadow-slate-100/50 border border-slate-100 relative overflow-hidden saas-card flex-1 flex flex-col justify-between">
              {/* Soft interior color gradient bleeding in from the top left corner */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#2B74DB]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10 pt-4">
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-bold">
                  Our mission is to provide professional HR solutions that help organizations manage their workforce efficiently while ensuring compliance with labour laws and workplace standards.
                </p>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
                  We aim to support businesses in building productive, safe, and legally compliant work environments through expert guidance and reliable HR services.
                </p>
              </div>
            </div>

          </div>

          {/* --- VISION CARD --- */}
          <div className="w-full max-w-lg lg:max-w-md xl:max-w-lg relative group flex flex-col">
            
            {/* Interlocking Clip-In Header Block */}
            <div className="absolute top-[-36px] left-8 sm:left-12 flex flex-col items-start z-20">
              {/* Tab Label using your `#FD6D02` theme */}
              <div className="bg-[#FD6D02] px-6 py-2 rounded-t-xl rounded-br-xl shadow-md border-b border-[#FD6D02]/20">
                <ElegantStaggeredHeader text="Vision" sizeClass="text-base sm:text-lg" colorClass="text-white" />
              </div>
              {/* Overlapping Key Joint Block */}
              <div className="w-5 h-5 bg-[#FD6D02] ml-4 -mt-[1px] relative">
                {/* Visual Lock Inner Notch */}
                <div className="absolute inset-1 bg-white/20 rounded-sm" />
              </div>
            </div>

            {/* Main Card Body with custom gradient bleed matching "Mission & Vision Statement _ Saas.jpg" */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 text-left shadow-xl shadow-slate-100/50 border border-slate-100 relative overflow-hidden saas-card flex-1 flex flex-col justify-between">
              {/* High-quality blue/orange organic gradient bleed into the card container */}
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-gradient-to-tr from-[#2B74DB]/20 to-[#FD6D02]/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10 pt-4">
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-bold">
                  Our vision is to become a leading HR consulting and workforce solutions provider, recognized for delivering ethical, innovative, and practical HR services that support sustainable organizational growth.
                </p>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
                  We strive to create workplaces where people, compliance, and productivity work together for long-term success.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}