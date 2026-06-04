import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowUpRight, ShieldCheck, HelpCircle, Users, Layers, Activity } from 'lucide-react';

const PresentationalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes slideWordUp {
      0% {
        opacity: 0;
        transform: translateY(24px) scale(0.98);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    .stagger-word-anim {
      opacity: 0;
      display: inline-block;
      animation: slideWordUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    .stagger-word-anim:hover {
      color: #FD6D02;
      transform: translateY(-2px);
    }
    .mesh-dot-bg {
      background-image: radial-gradient(#2b74db0a 1.2px, transparent 1.2px);
      background-size: 24px 24px;
    }
    .editorial-clip-block {
      clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);
    }
    @keyframes slowFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(1deg); }
    }
    .animate-slow-float {
      animation: slowFloat 8s ease-in-out infinite;
    }
  `}} />
);

const ElegantStaggeredHeader = ({ text, sizeClass = "text-2xl sm:text-3xl lg:text-4xl", colorClass = "text-slate-900" }) => {
  const words = text.split(" ");
  return (
    <h1 className={`${sizeClass} font-bold tracking-tight ${colorClass} leading-tight text-left`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="stagger-word-anim mr-2 sm:mr-3 cursor-default"
          style={{
            animationDelay: `${0.1 + index * 0.08}s`
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default function App() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [activeSegment, setActiveSegment] = useState(null);

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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2B74DB] selection:text-white relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 mesh-dot-bg flex flex-col justify-center items-center">
      <PresentationalStyles />

      {/* Elegant Organic Ambient Spots (Colors strictly tuned to the theme) */}
      <div 
        className="absolute top-12 left-1/4 w-[45vw] h-[45vw] rounded-full bg-[#2B74DB]/5 blur-[120px] pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)` }}
      />
      <div 
        className="absolute bottom-12 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#FD6D02]/5 blur-[100px] pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${-mouseOffset.x * 0.4}px, ${-mouseOffset.y * 0.4}px)` }}
      />

      {/* Main Hero Container */}
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Architectural Grid Line (Visual anchor) */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-100 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12">
          
          {}
          {/* Left Column: Typographical Presentation Block */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Slide Index / Subtitle tag */}
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2B74DB] bg-blue-50/50 px-3 py-1.5 rounded-lg border border-blue-100/30">
                OUR SERVICES
              </span>
              <div className="h-[1px] w-12 bg-slate-200" />
            </div>

            {/* Custom Staggered Header Wave (One-time run, strictly bounded size) */}
            <ElegantStaggeredHeader 
              text="End-to-End Workforce, HR & Compliance Solutions" 
              sizeClass="text-3xl sm:text-4xl lg:text-4xl"
            />

            {/* Paragraph 1 (Styled larger with premium left accent line) */}
            <div className="pl-5 border-l-2 border-[#2B74DB] py-1">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                At People First HR Solutions, we believe that every successful organization is built on strong people practices, the right workforce, and structured business support systems.
              </p>
            </div>

            {/* Paragraph 3 (Sits above the detailed breakout block) */}
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              From talent acquisition and HR management to compliance support and employee development, we work closely with organizations to create efficient, people-focused workplaces.
            </p>
          </div>

          {}
          {/* Right Column: Premium High-Contrast Deck Card (Paragraph 2) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Visual background wireframe elements matching SaaS.jpg & download 42 */}
            <div className="absolute inset-0 pointer-events-none -z-10">
              <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M -40 20 H 120 C 140 20, 140 320, 120 320 H -100" 
                  stroke="#2B74DB" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.15"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Asymmetric Floating Card representing Scope of Partnership */}
            <div 
              onMouseEnter={() => setActiveSegment('partnership')}
              onMouseLeave={() => setActiveSegment(null)}
              className={`bg-white border text-left rounded-[2rem] p-8 sm:p-10 shadow-xl transition-all duration-500 ease-out relative overflow-hidden flex flex-col justify-between min-h-[380px] ${
                activeSegment === 'partnership' 
                  ? 'border-[#2B74DB] shadow-2xl shadow-blue-100/50 -translate-y-2' 
                  : 'border-slate-100 shadow-slate-100/60'
              }`}
            >
              {/* Corner Accent Color Dot */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FD6D02]/5 to-transparent rounded-bl-full pointer-events-none" />

              <div className="space-y-8">
                {/* Micro Technical Tag */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-[#2B74DB]" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                      Scope.Partnership
                    </span>
                  </div>
                </div>

                {/* Paragraph 2 Copy */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  We partner with businesses to simplify hiring, strengthen HR operations, improve compliance practices, and support workforce development through practical, business-focused solutions. Whether you are a growing startup, SME, manufacturing unit, service organization, or large enterprise, our services are designed to support your workforce needs at every stage.
                </p>
              </div>

              {/* Hand-drawn minimalist list indicators at the bottom */}
              <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2B74DB]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Talent Search</span>
                </div>
              </div>

            </div>

            {/* Micro Abstract Indicator Overlay Card (Simulates SaaS.jpg high-end look) */}
            <div 
              className="absolute -bottom-6 -right-6 bg-[#2B74DB] text-white p-5 rounded-2xl shadow-xl border border-blue-400/20 max-w-[200px] text-left hidden sm:block animate-slow-float pointer-events-none"
              style={{ transform: `translate(${mouseOffset.x * 0.2}px, ${mouseOffset.y * 0.2}px)` }}
            >
              <div className="flex items-center space-x-1.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD6D02] animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-blue-200">Modern Org Support</span>
              </div>
              <p className="text-xs font-semibold leading-normal">
                Scalable solutions designed for startups, SMEs, and large enterprises.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}