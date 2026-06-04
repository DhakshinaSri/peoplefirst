import React, { useState, useEffect } from 'react';
import { Sparkles, Compass } from 'lucide-react';

const CustomArtStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes wordEntrance {
      0% {
        opacity: 0;
        transform: translateY(24px) scale(0.96);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    .word-entrance-span {
      opacity: 0;
      animation: wordEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      display: inline-block;
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.3s ease;
    }
    .word-entrance-span:hover {
      color: #FD6D02;
      transform: translateY(-4px) scale(1.06);
    }
    @keyframes organicBlob {
      0%, 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; transform: rotate(0deg); }
      33% { border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%; transform: rotate(120deg); }
      66% { border-radius: 50% 50% 30% 70% / 40% 60% 30% 70%; transform: rotate(240deg); }
    }
    .animate-organic-blob-1 {
      animation: organicBlob 24s infinite linear;
    }
    .animate-organic-blob-2 {
      animation: organicBlob 18s infinite linear reverse;
    }
    .editorial-grid {
      background-image: radial-gradient(#2b74db10 1px, transparent 1px);
      background-size: 24px 24px;
    }
  `}} />
);

const ElegantStaggeredHeader = ({ text }) => {
  const words = text.split(" ");

  return (
    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight text-slate-900 leading-[1.08] text-left">
      {words.map((word, index) => (
        <span
          key={index}
          className="word-entrance-span mr-3 sm:mr-4 mb-2 cursor-default"
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
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const trackMouse = (e) => {
      setMouseCoordinates({
        x: (e.clientX / window.innerWidth - 0.5) * 25,
        y: (e.clientY / window.innerHeight - 0.5) * 25,
      });
    };
    window.addEventListener('mousemove', trackMouse);
    return () => window.removeEventListener('mousemove', trackMouse);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#FD6D02] selection:text-white overflow-hidden relative editorial-grid">
      <CustomArtStyles />

      {/* Background Interactive Ambient Glows */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-[#2B74DB]/10 to-[#FD6D02]/5 blur-[120px] rounded-full pointer-events-none -z-10 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${mouseCoordinates.x * 0.4}px, ${mouseCoordinates.y * 0.4}px)` }}
      />
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-gradient-to-tr from-[#FD6D02]/8 to-[#2B74DB]/8 blur-[100px] rounded-full pointer-events-none -z-10 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${-mouseCoordinates.x * 0.6}px, ${-mouseCoordinates.y * 0.6}px)` }}
      />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Design Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Typography Column */}
          <div className="lg:col-span-8 space-y-10 relative text-left">
            
            {/* Fine Art Accent Details */}
            <div className="absolute -left-6 top-0 w-1.5 h-36 bg-gradient-to-b from-[#2B74DB] to-[#FD6D02] rounded-full hidden md:block" />
            
            <div className="space-y-6">
              {/* Dynamic Abstract Tag */}
              <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-2xl shadow-sm">
                <Sparkles className="w-4 h-4 text-[#FD6D02]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2B74DB]">Creative Architecture</span>
              </div>

              {/* Strict Copy Title (New Elegant Non-Looping entrance) */}
              <ElegantStaggeredHeader text="Building Stronger Workplaces Through People, Process & Partnership" />
            </div>

            {/* Strict Copy Paragraph 1 with editorial highlight */}
            <div className="relative">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                <span className="font-semibold text-slate-950">People First HR Solutions</span> is a professionally driven Human Resource solutions company committed to helping organizations build efficient workforces, strengthen workplace practices, and maintain structured compliance systems.
              </p>
              
              {/* Abstract fluid vector line underneath copy */}
              <svg className="w-56 h-4 text-[#FD6D02]/40 mt-3" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15 C 50 2, 100 25, 195 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

          </div>

          {/* Organic Morphing Shape Art Piece on Right Column */}
          <div className="lg:col-span-4 relative flex justify-center items-center h-[350px] sm:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2B74DB]/10 to-[#FD6D02]/10 blur-xl rounded-full" />
            
            {/* Morphing Organic Blob - Pure CSS Art */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-[#2B74DB]/20 via-[#2B74DB]/5 to-[#FD6D02]/30 animate-organic-blob-1 border border-slate-300/40 shadow-inner" />
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-bl from-[#FD6D02]/10 via-[#2B74DB]/10 to-transparent animate-organic-blob-2 border border-dashed border-[#2B74DB]/30" />
            
            {/* Asymmetric Floating Central Dial Card */}
            <div 
              className="relative bg-white/80 backdrop-blur-md p-6 rounded-[2.5rem] shadow-2xl border border-white/60 max-w-xs transition-transform duration-500 ease-out"
              style={{ transform: `translate(${mouseCoordinates.x * 0.8}px, ${mouseCoordinates.y * 0.8}px) rotate(3deg)` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2B74DB] to-[#FD6D02] text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-[#2B74DB]/20">
                P
              </div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-1">Human-Centered Systems</p>
              <div className="h-0.5 w-12 bg-[#FD6D02] mb-3" />
              <p className="text-sm font-semibold text-slate-800 leading-normal">
                Connecting human capabilities directly to technical process layouts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Challenges & Realities Section */}
      <section className="relative py-20 md:py-28 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Typographical Challenge Display Left Column */}
            <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-24">
              <div className="inline-flex items-center space-x-1.5 bg-[#FD6D02]/10 text-[#FD6D02] px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#FD6D02] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider">Organizational Realities</span>
              </div>

                <ElegantStaggeredHeader text= "We understand that every organization, regardless of size or industry, faces unique workforce challenges." />
              
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#2B74DB] to-[#FD6D02] rounded-full" />
            </div>

            {/* Structured Organic Flow Right Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Core challenges list rendered inside non-standard modular cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Custom Card 1: Managing People */}
                <div 
                  onMouseEnter={() => setHoveredCard('people')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-8 rounded-[2rem] text-left transition-all duration-500 border relative overflow-hidden ${
                    hoveredCard === 'people' 
                      ? 'bg-white border-[#2B74DB] shadow-2xl -translate-y-2' 
                      : 'bg-white/40 border-slate-200/80'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2B74DB] flex items-center justify-center font-bold text-lg mb-6">01</div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2">Managing People</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Designing human communication structures built for sustainable cooperation.</p>
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-[#2B74DB]/5 rounded-full -mr-6 -mb-6 transition-transform duration-500 ${hoveredCard === 'people' ? 'scale-150' : 'scale-100'}`} />
                </div>

                {/* Custom Card 2: Statutory Compliance */}
                <div 
                  onMouseEnter={() => setHoveredCard('compliance')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-8 rounded-[2rem] text-left transition-all duration-500 border relative overflow-hidden ${
                    hoveredCard === 'compliance' 
                      ? 'bg-white border-[#FD6D02] shadow-2xl -translate-y-2' 
                      : 'bg-white/40 border-slate-200/80'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FD6D02] flex items-center justify-center font-bold text-lg mb-6">02</div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2">Statutory Compliance</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Constructing secure, zero-compromise frameworks matching all legal standards.</p>
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-[#FD6D02]/5 rounded-full -mr-6 -mb-6 transition-transform duration-500 ${hoveredCard === 'compliance' ? 'scale-150' : 'scale-100'}`} />
                </div>

                {/* Custom Card 3: Workplace Discipline */}
                <div 
                  onMouseEnter={() => setHoveredCard('discipline')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-8 rounded-[2rem] text-left transition-all duration-500 border relative overflow-hidden ${
                    hoveredCard === 'discipline' 
                      ? 'bg-white border-[#2B74DB] shadow-2xl -translate-y-2' 
                      : 'bg-white/40 border-slate-200/80'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2B74DB] flex items-center justify-center font-bold text-lg mb-6">03</div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2">Workplace Discipline</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Enforcing standard service codes and clear procedures transparently.</p>
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-[#2B74DB]/5 rounded-full -mr-6 -mb-6 transition-transform duration-500 ${hoveredCard === 'discipline' ? 'scale-150' : 'scale-100'}`} />
                </div>

                {/* Custom Card 4: Attracting Talent */}
                <div 
                  onMouseEnter={() => setHoveredCard('talent')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-8 rounded-[2rem] text-left transition-all duration-500 border relative overflow-hidden ${
                    hoveredCard === 'talent' 
                      ? 'bg-white border-[#FD6D02] shadow-2xl -translate-y-2' 
                      : 'bg-white/40 border-slate-200/80'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FD6D02] flex items-center justify-center font-bold text-lg mb-6">04</div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2">Attracting Talent</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Selecting proper profiles aligned with actual long-term operations.</p>
                  <div className={`absolute bottom-0 right-0 w-24 h-24 bg-[#FD6D02]/5 rounded-full -mr-6 -mb-6 transition-transform duration-500 ${hoveredCard === 'talent' ? 'scale-150' : 'scale-100'}`} />
                </div>

              </div>

              {/* Strict Copy Paragraph 2 part 2 (Conclusion of section) */}
              <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#2B74DB]/10 to-[#2B74DB]/5 border border-[#2B74DB]/20 text-left relative overflow-hidden">
                <div className="absolute top-4 right-4 text-[#2B74DB]/30 font-serif text-6xl">“</div>
                <p className="text-slate-700 leading-relaxed relative z-10 font-medium">
                  Managing people, ensuring statutory compliance, maintaining workplace discipline, and attracting the right talent require both expertise and practical understanding. <span className="font-bold text-[#2B74DB]">This is where we step in as a trusted HR and workforce partner.</span>
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Strategic Philosophy Section */}
      <section className="relative py-20 md:py-32 bg-[#2B74DB] text-white overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem]">
        
        {/* Subtle glowing lines & pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#FD6D02]/20 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Box: Paragraph 3 Content */}
            <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-24">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 px-4 py-2 rounded-2xl">
                <Compass className="w-4 h-4 text-[#FD6D02]" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Our Strategic Philosophy</span>
              </div>

              {/* Strict Copy Paragraph 3 */}
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white">
                Our approach is centered on supporting businesses with dependable, practical, and business-oriented HR solutions that contribute to long-term organizational success.
              </h2>

              <div className="w-16 h-1.5 bg-[#FD6D02] rounded-full" />
            </div>

            {/* Right Box: Paragraph 4 Content (Large interactive card layout) */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative text-left overflow-hidden border border-white/10">
                
                {/* Organic accent bar inside white paper */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2B74DB] via-[#2B74DB] to-[#FD6D02]" />

                {/* Strict Copy Paragraph 4 */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                  We work closely with organizations to understand their workforce requirements, operational priorities, and business goals, enabling us to provide tailored support that aligns with their specific needs. Rather than offering one-size-fits-all solutions, we focus on creating practical systems and people-focused strategies that add real value to business operations.
                </p>

                {/* Handcrafted visual connections displaying "Requirements", "Priorities", "Goals" */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#2B74DB]">Phase 01</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">Workforce Requirements</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#FD6D02]">Phase 02</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">Operational Priorities</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#2B74DB]">Phase 03</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">Business Goals</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}