import React, { useState, useEffect } from 'react';

const PresentationalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes wordSlideUp {
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
      animation: wordSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    .stagger-word-anim:hover {
      color: #FD6D02;
      transform: translateY(-2px);
    }
    .industry-dot-grid {
      background-image: radial-gradient(#2b74db0a 1.2px, transparent 1.2px);
      background-size: 24px 24px;
    }
    .dark-dot-grid {
      background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 20px 20px;
    }
  `}} />
);

const ElegantStaggeredHeader = ({ text, sizeClass = "text-2xl sm:text-3xl lg:text-4xl", colorClass = "text-slate-900" }) => {
  const words = text.split(" ");
  return (
    <h2 className={`${sizeClass} font-bold tracking-tight ${colorClass} leading-tight text-left`}>
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
    </h2>
  );
};

export default function App() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [hoveredStrength, setHoveredStrength] = useState(null);

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
    <div className="min-h-screen bg-white font-sans selection:bg-[#2B74DB] selection:text-white relative overflow-hidden border-t-5 border-[#FD6D0230]">
      <PresentationalStyles />

      {/* INDUSTRIES WE SERVE - Premium White Theme Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-7xl mx-auto industry-dot-grid">
        
        {/* Dynamic Subtle Lighting Nodes */}
        <div 
          className="absolute top-12 right-12 w-[40vw] h-[40vw] rounded-full bg-[#2B74DB]/5 blur-[120px] pointer-events-none -z-10 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)` }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context Introduction */}
          <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-24">
            
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FD6D02] bg-orange-50/50 px-3 py-1.5 rounded-lg border border-orange-100/30">
                Industries We Serve
              </span>
              <div className="h-[1px] w-12 bg-slate-200" />
            </div>

            <ElegantStaggeredHeader 
              text="People First Hr Solutions provides services to a diverse range of industries, including:" 
              sizeClass="text-2xl sm:text-3xl lg:text-4xl"
              colorClass="text-slate-900"
            />

            <div className="pl-4 border-l-2 border-[#2B74DB] py-1">
              <p className="text-base text-slate-500 leading-relaxed font-normal">
                Our industry experience allows us to deliver customized solutions tailored to each sector.
              </p>
            </div>
          </div>

          {/* Right Column: Custom Asymmetric Industry Modules */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Sector 1: Manufacturing */}
            <div 
              onMouseEnter={() => setHoveredIndustry('manufacturing')}
              onMouseLeave={() => setHoveredIndustry(null)}
              className={`bg-white rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                hoveredIndustry === 'manufacturing' 
                  ? 'border-[#2B74DB] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-slate-400">01</span>
                  {/* Custom Minimalist Manufacturing Industry Graphic */}
                  <svg className="w-8 h-8 text-[#2B74DB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 9h1.5m-1.5 3h1.5m-1.5 3h1.5m4.5-6H15m-1.5 3H15m-1.5 3H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Manufacturing Industries</h3>
              </div>
              <div className="h-1 w-12 bg-slate-100 mt-6 transition-all duration-500 group-hover:bg-[#2B74DB]" />
            </div>

            {/* Sector 2: IT Companies */}
            <div 
              onMouseEnter={() => setHoveredIndustry('it')}
              onMouseLeave={() => setHoveredIndustry(null)}
              className={`bg-white rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                hoveredIndustry === 'it' 
                  ? 'border-[#FD6D02] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-slate-400">02</span>
                  {/* Custom Minimalist IT Graphic */}
                  <svg className="w-8 h-8 text-[#FD6D02]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Information Technology (IT) Companies</h3>
              </div>
              <div className="h-1 w-12 bg-slate-100 mt-6" />
            </div>

            {/* Sector 3: ITES */}
            <div 
              onMouseEnter={() => setHoveredIndustry('ites')}
              onMouseLeave={() => setHoveredIndustry(null)}
              className={`bg-white rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                hoveredIndustry === 'ites' 
                  ? 'border-[#2B74DB] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-slate-400">03</span>
                  {/* Custom Minimalist ITES Graphic */}
                  <svg className="w-8 h-8 text-[#2B74DB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">IT Enabled Services (ITES)</h3>
              </div>
              <div className="h-1 w-12 bg-slate-100 mt-6" />
            </div>

            {/* Sector 4: Engineering and Construction */}
            <div 
              onMouseEnter={() => setHoveredIndustry('engineering')}
              onMouseLeave={() => setHoveredIndustry(null)}
              className={`bg-white rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                hoveredIndustry === 'engineering' 
                  ? 'border-[#FD6D02] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-slate-400">04</span>
                  {/* Custom Minimalist Engineering Graphic */}
                  <svg className="w-8 h-8 text-[#FD6D02]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83m-3.75 3.75-3.75-3.75m3.75 3.75a2.625 2.625 0 1 1-3.75-3.75M3 3l3.75 3.75M17.25 3h1.5c1.242 0 2.25 1.008 2.25 2.25v1.5a2.25 2.25 0 0 1-2.25 2.25h-1.5a2.25 2.25 0 0 1-2.25-2.25V5.25C15 4.008 16.008 3 17.25 3Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Engineering and Construction Companies</h3>
              </div>
              <div className="h-1 w-12 bg-slate-100 mt-6" />
            </div>

            {/* Sector 5: Logistics & Supply Chain */}
            <div 
              onMouseEnter={() => setHoveredIndustry('logistics')}
              onMouseLeave={() => setHoveredIndustry(null)}
              className={`bg-white rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                hoveredIndustry === 'logistics' 
                  ? 'border-[#2B74DB] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-slate-400">05</span>
                  {/* Custom Minimalist Logistics Graphic */}
                  <svg className="w-8 h-8 text-[#2B74DB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19.5 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 5.25h14.75m-14.75 0 1.5 10.5h11.25l1.5-10.5m-14.25 0H1V3h2.5m14.75 2.25h1.25L21 11.25V15h-2.25M12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Logistics and Supply Chain Organizations</h3>
              </div>
              <div className="h-1 w-12 bg-slate-100 mt-6" />
            </div>

            {/* Sector 6: SMEs */}
            <div 
              onMouseEnter={() => setHoveredIndustry('sme')}
              onMouseLeave={() => setHoveredIndustry(null)}
              className={`bg-white rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                hoveredIndustry === 'sme' 
                  ? 'border-[#FD6D02] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-slate-400">06</span>
                  {/* Custom Minimalist SME Graphic */}
                  <svg className="w-8 h-8 text-[#FD6D02]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.33L12 4.5 4.5 10.33V21h15Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Small and Medium Enterprises</h3>
              </div>
              <div className="h-1 w-12 bg-slate-100 mt-6" />
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US - Premium High-Contrast Deep-Blue Section */}
      <section className="relative bg-[#2B74DB] text-white py-24 sm:py-32 overflow-hidden">
        
        {/* Absolute Glowing Wireframe Orbs */}
        <div className="absolute inset-0 dark-dot-grid opacity-15 pointer-events-none" />
        <div 
          className="absolute -bottom-32 -left-32 w-[45vw] h-[45vw] rounded-full bg-[#FD6D02]/10 blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
          style={{ transform: `translate(${-mouseOffset.x * 0.4}px, ${-mouseOffset.y * 0.4}px)` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Editorial Headers and Statements */}
            <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-24">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 px-4 py-2 rounded-2xl">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD6D02]" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Why Choose Us</span>
              </div>

              {/* Staggered Word Header in White Theme Color Mode */}
              <ElegantStaggeredHeader 
                text="Organizations choose People First Hr Solutions because of our commitment to professionalism, compliance, and service excellence."
                sizeClass="text-2xl sm:text-3xl lg:text-4xl"
                colorClass="text-white"
              />

              <div className="h-1.5 w-16 bg-[#FD6D02] rounded-full" />

              <p className="text-base text-blue-100 leading-relaxed font-normal">
                We partner with organizations to build strong, compliant, and productive workplaces.
              </p>
            </div>

            {/* Right Side: Key Strengths Slide List */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="text-left mb-6">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FD6D02]">Our Key Strengths</h4>
              </div>

              {/* Strength 1 */}
              <div 
                onMouseEnter={() => setHoveredStrength(1)}
                onMouseLeave={() => setHoveredStrength(null)}
                className={`p-6 sm:p-8 rounded-[2rem] bg-white/5 border text-left transition-all duration-300 flex items-start space-x-5 ${
                  hoveredStrength === 1 
                    ? 'border-[#FD6D02] bg-white/10 -translate-x-1' 
                    : 'border-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 ${hoveredStrength === 1 ? 'bg-[#FD6D02] text-white' : 'bg-white/10 text-white'}`}>
                  01
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-snug">Experienced HR and compliance professionals</h4>
                </div>
              </div>

              {/* Strength 2 */}
              <div 
                onMouseEnter={() => setHoveredStrength(2)}
                onMouseLeave={() => setHoveredStrength(null)}
                className={`p-6 sm:p-8 rounded-[2rem] bg-white/5 border text-left transition-all duration-300 flex items-start space-x-5 ${
                  hoveredStrength === 2 
                    ? 'border-[#FD6D02] bg-white/10 -translate-x-1' 
                    : 'border-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 ${hoveredStrength === 2 ? 'bg-[#FD6D02] text-white' : 'bg-white/10 text-white'}`}>
                  02
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-snug">End-to-end workforce management solutions</h4>
                </div>
              </div>

              {/* Strength 3 */}
              <div 
                onMouseEnter={() => setHoveredStrength(3)}
                onMouseLeave={() => setHoveredStrength(null)}
                className={`p-6 sm:p-8 rounded-[2rem] bg-white/5 border text-left transition-all duration-300 flex items-start space-x-5 ${
                  hoveredStrength === 3 
                    ? 'border-[#FD6D02] bg-white/10 -translate-x-1' 
                    : 'border-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 ${hoveredStrength === 3 ? 'bg-[#FD6D02] text-white' : 'bg-white/10 text-white'}`}>
                  03
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-snug">Customized services based on industry needs</h4>
                </div>
              </div>

              {/* Strength 4 */}
              <div 
                onMouseEnter={() => setHoveredStrength(4)}
                onMouseLeave={() => setHoveredStrength(null)}
                className={`p-6 sm:p-8 rounded-[2rem] bg-white/5 border text-left transition-all duration-300 flex items-start space-x-5 ${
                  hoveredStrength === 4 
                    ? 'border-[#FD6D02] bg-white/10 -translate-x-1' 
                    : 'border-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 ${hoveredStrength === 4 ? 'bg-[#FD6D02] text-white' : 'bg-white/10 text-white'}`}>
                  04
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-snug">Strong focus on statutory compliance</h4>
                </div>
              </div>

              {/* Strength 5 */}
              <div 
                onMouseEnter={() => setHoveredStrength(5)}
                onMouseLeave={() => setHoveredStrength(null)}
                className={`p-6 sm:p-8 rounded-[2rem] bg-white/5 border text-left transition-all duration-300 flex items-start space-x-5 ${
                  hoveredStrength === 5 
                    ? 'border-[#FD6D02] bg-white/10 -translate-x-1' 
                    : 'border-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 ${hoveredStrength === 5 ? 'bg-[#FD6D02] text-white' : 'bg-white/10 text-white'}`}>
                  05
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-snug">Reliable support for workplace safety and employee well-being</h4>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}