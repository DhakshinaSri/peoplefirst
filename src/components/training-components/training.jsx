import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Layers, 
  Compass, 
  Workflow, 
  Award, 
  CheckCircle, 
  TrendingUp, 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  BookOpen 
} from 'lucide-react';

const PresentationalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes wordSlideUp {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.98);
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
    .mesh-grid-bg {
      background-image: radial-gradient(#2b74db0a 1.2px, transparent 1.2px);
      background-size: 24px 24px;
    }
    .dark-dot-grid {
      background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1.2px, transparent 1.2px);
      background-size: 20px 20px;
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(1deg); }
    }
    .animate-float-slow {
      animation: floatSlow 8s ease-in-out infinite;
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
  const [activeSegment, setActiveSegment] = useState('six-sigma');
  const [hoveredProgram, setHoveredProgram] = useState(null);

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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2B74DB] selection:text-white relative overflow-hidden mesh-grid-bg">
      <PresentationalStyles />

      {/* Dynamic Background Ambience Nodes */}
      <div 
        className="absolute top-12 left-1/4 w-[45vw] h-[45vw] rounded-full bg-[#2B74DB]/5 blur-[120px] pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)` }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#FD6D02]/5 blur-[100px] pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${-mouseOffset.x * 0.4}px, ${-mouseOffset.y * 0.4}px)` }}
      />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Mission & Typography */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FD6D02] bg-orange-50/50 px-3 py-1.5 rounded-lg border border-orange-100/30">
                TRAINING & DEVELOPMENT
              </span>
              <div className="h-[1px] w-12 bg-slate-200" />
            </div>

            {/* Staggered Heading with single-trigger word entrance */}
            <ElegantStaggeredHeader 
              text="Building Skilled Teams for Better Business Performance" 
              sizeClass="text-3xl sm:text-4xl lg:text-5xl"
            />

            {/* Supporting Copy Blocks */}
            <div className="pl-4 border-l-2 border-[#2B74DB] py-1 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                A strong workforce grows through continuous learning, practical exposure, and continuous improvement. Our training programs are designed to enhance workplace capabilities, strengthen employee performance, and support organizational growth through industry-relevant learning experiences.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-2xl">
              We focus on practical application, workplace relevance, and skill development that helps individuals and teams contribute more effectively to business success.
            </p>
          </div>

          {/* Right Column: Dynamic Abstract Concept Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-8">
            <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl relative overflow-hidden animate-float-slow">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#FD6D02]" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Framework Alignment</span>
                <Sparkles className="w-5 h-5 text-[#FD6D02]" />
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2B74DB] flex items-center justify-center font-bold">1</div>
                  <span className="text-sm font-semibold text-slate-800">Practical Application</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FD6D02] flex items-center justify-center font-bold">2</div>
                  <span className="text-sm font-semibold text-slate-800">Workplace Relevance</span>
                </div>
                <div className="p-4 bg-[#2B74DB] text-white rounded-2xl flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold">3</div>
                  <span className="text-sm font-semibold">Skill Development</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Training Programs Deck */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto border-t border-slate-100">
        <div className="space-y-12">
          
          <div className="text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2B74DB]">Core Offerings</span>
            <ElegantStaggeredHeader text="Corporate Training Programs" sizeClass="text-2xl sm:text-3xl lg:text-4xl" />
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-2xl">
              Professional training programs designed to improve workplace productivity, communication, teamwork, operational effectiveness, and employee performance.
            </p>
          </div>

          {/* Interactive Layout: Asymmetrical Program Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Program Segment Controls - Left Column */}
            <div className="lg:col-span-4 flex flex-col space-y-3">
              <button
                onClick={() => setActiveSegment('six-sigma')}
                className={`p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between ${
                  activeSegment === 'six-sigma' 
                    ? 'bg-white shadow-md border-l-4 border-[#2B74DB] text-slate-950' 
                    : 'bg-transparent text-slate-500 hover:bg-white/50'
                }`}
              >
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Six Sigma Programs</h4>
                  <p className="text-xs text-slate-400 mt-1">Process improvement & problem-solving</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#2B74DB]" />
              </button>

              <button
                onClick={() => setActiveSegment('kaizen')}
                className={`p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between ${
                  activeSegment === 'kaizen' 
                    ? 'bg-white shadow-md border-l-4 border-[#FD6D02] text-slate-950' 
                    : 'bg-transparent text-slate-500 hover:bg-white/50'
                }`}
              >
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Kaizen Programs</h4>
                  <p className="text-xs text-slate-400 mt-1">Philosophy of continuous improvement</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#FD6D02]" />
              </button>

              <button
                onClick={() => setActiveSegment('5s')}
                className={`p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between ${
                  activeSegment === '5s' 
                    ? 'bg-white shadow-md border-l-4 border-[#2B74DB] text-slate-950' 
                    : 'bg-transparent text-slate-500 hover:bg-white/50'
                }`}
              >
                <div>
                  <h4 className="font-bold text-sm sm:text-base">5S Workplace Management</h4>
                  <p className="text-xs text-slate-400 mt-1">Organization, safety & discipline</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#2B74DB]" />
              </button>
            </div>

            {/* Program Segment Details Panel - Right Column */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-100 min-h-[380px] text-left flex flex-col justify-between">
              
              {activeSegment === 'six-sigma' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2B74DB] bg-blue-50 px-3 py-1 rounded-md">Continuous Capability</span>
                    <Award className="w-6 h-6 text-[#2B74DB]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Six Sigma Training Programs</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                      Structured training programs focused on process improvement, problem-solving, defect reduction, and operational efficiency.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Programs Include</p>
                    <div className="flex flex-wrap gap-2.5">
                      {['White Belt (Foundation Level)', 'Yellow Belt', 'Green Belt', 'Black Belt', 'Master Black Belt'].map((belt, idx) => (
                        <span key={idx} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 hover:border-[#2B74DB] transition-all cursor-default">
                          {belt}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      Participants learn practical approaches to identify process gaps, improve efficiency, reduce operational challenges, and support measurable business improvements.
                    </p>
                  </div>
                </div>
              )}

              {activeSegment === 'kaizen' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#FD6D02] bg-orange-50 px-3 py-1 rounded-md">Process Evolution</span>
                    <Workflow className="w-6 h-6 text-[#FD6D02]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Kaizen Training Programs</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                      Training focused on the philosophy of continuous improvement through small, consistent changes that create long-term operational benefits.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Key Focus Areas</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Workplace efficiency improvement',
                        'Continuous process enhancement',
                        'Employee participation in improvement initiatives',
                        'Problem identification and practical solutions'
                      ].map((focus, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#FD6D02] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeSegment === '5s' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2B74DB] bg-blue-50 px-3 py-1 rounded-md">Safety & Discipline</span>
                    <Layers className="w-6 h-6 text-[#2B74DB]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">5S Workplace Management</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                      Programs designed to improve workplace organization, productivity, safety, and operational discipline through structured workplace practices.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Training Covers</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Workplace organization methods',
                        'Process discipline and standardization',
                        'Clean and efficient work environments',
                        'Productivity and workplace improvement practices'
                      ].map((cover, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#2B74DB] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium">{cover}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Professional Competency Suite */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="space-y-12 text-left">
          
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FD6D02]">Skill Suites</span>
            <ElegantStaggeredHeader text="Quality & Process Excellence Programs" sizeClass="text-2xl sm:text-3xl lg:text-4xl" />
            <div className="h-1 w-12 bg-[#FD6D02] rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Leadership Development */}
            <div 
              onMouseEnter={() => setHoveredProgram('leadership')}
              onMouseLeave={() => setHoveredProgram(null)}
              className={`p-6 sm:p-8 rounded-[2rem] bg-white border transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                hoveredProgram === 'leadership' 
                  ? 'border-[#2B74DB] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#2B74DB]">DEVELOPMENT</span>
                  <Users className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Leadership Development Programs</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Programs that help managers and team leaders strengthen leadership capabilities, improve decision-making, enhance team management, and support business performance.
                </p>
              </div>
            </div>

            {/* ISO & Quality */}
            <div 
              onMouseEnter={() => setHoveredProgram('iso')}
              onMouseLeave={() => setHoveredProgram(null)}
              className={`p-6 sm:p-8 rounded-[2rem] bg-white border transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                hoveredProgram === 'iso' 
                  ? 'border-[#FD6D02] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#FD6D02]">STANDARDS</span>
                  <Compass className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">ISO & Quality Awareness Training</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Training focused on quality systems, workplace standards, process awareness, and structured operational practices including ISO-related workplace understanding.
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div 
              onMouseEnter={() => setHoveredProgram('soft')}
              onMouseLeave={() => setHoveredProgram(null)}
              className={`p-6 sm:p-8 rounded-[2rem] bg-white border transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
                hoveredProgram === 'soft' 
                  ? 'border-[#2B74DB] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#2B74DB]">COMMUNICATION</span>
                  <BookOpen className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Soft Skills Development</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Programs aimed at improving communication, interpersonal effectiveness, workplace etiquette, confidence, teamwork, and professional behavior.
                </p>
              </div>
            </div>

            {/* Workplace Safety */}
            <div 
              onMouseEnter={() => setHoveredProgram('safety')}
              onMouseLeave={() => setHoveredProgram(null)}
              className={`p-6 sm:p-8 rounded-[2rem] bg-white border transition-all duration-500 flex flex-col justify-between min-h-[220px] lg:col-span-2 relative overflow-hidden ${
                hoveredProgram === 'safety' 
                  ? 'border-[#FD6D02] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#FD6D02]">SAFETY</span>
                  <ShieldCheck className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Workplace Safety & Employee Awareness Programs</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Training designed to create responsible workplace practices, improve employee awareness, and promote professional work environments.
                </p>
              </div>
            </div>

            {/* POSH Awareness */}
            <div 
              onMouseEnter={() => setHoveredProgram('posh')}
              onMouseLeave={() => setHoveredProgram(null)}
              className={`p-6 sm:p-8 rounded-[2rem] bg-white border transition-all duration-500 flex flex-col justify-between min-h-[220px] lg:col-span-1 relative overflow-hidden ${
                hoveredProgram === 'posh' 
                  ? 'border-[#2B74DB] shadow-xl -translate-y-1.5' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#2B74DB]">ETHICS & CULTURE</span>
                  <GraduationCap className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">POSH Awareness Programs</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Workplace awareness sessions focused on professional behavior, respectful communication, workplace ethics, and maintaining a positive work culture.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TRAINING APPROACH SECTION (High Contrast Blue Background Break) */}
      <section className="relative bg-[#2B74DB] text-white py-24 sm:py-32 overflow-hidden">
        
        {/* Dynamic Glowing Accents */}
        <div className="absolute inset-0 dark-dot-grid opacity-15 pointer-events-none" />
        <div 
          className="absolute -bottom-32 -left-32 w-[45vw] h-[45vw] rounded-full bg-[#FD6D02]/15 blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
          style={{ transform: `translate(${-mouseOffset.x * 0.4}px, ${-mouseOffset.y * 0.4}px)` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-24">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 px-4 py-2 rounded-2xl">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD6D02]" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Our Training Approach</span>
              </div>

              <ElegantStaggeredHeader 
                text="Our Training Approach"
                sizeClass="text-2xl sm:text-3xl lg:text-4xl"
                colorClass="text-white"
              />

              <div className="h-1.5 w-16 bg-[#FD6D02] rounded-full" />
            </div>

            {/* Right Column: Key Strengths Modules */}
            <div className="lg:col-span-7 space-y-4">
              
              {[
                "Practical learning methodology",
                "Real-time workplace examples and case studies",
                "Industry-oriented training modules",
                "Programs for individuals and corporate teams",
                "Focus on measurable workplace improvement",
                "Customized training solutions based on business needs"
              ].map((bullet, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-left flex items-start space-x-5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xs shrink-0 text-[#FD6D02]">
                    ✔
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white leading-snug">{bullet}</h4>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* Outro / Conclusion Section (Clean White theme) */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 max-w-5xl mx-auto text-center">
        <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 sm:p-16 space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2B74DB]/5 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FD6D02]/5 rounded-tr-full pointer-events-none" />

          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2B74DB]">People First</span>
            <ElegantStaggeredHeader 
              text="Enabling Better Performance Through Learning & Development" 
              sizeClass="text-2xl sm:text-3xl lg:text-4xl text-slate-900"
            />
            <div className="h-1 w-12 bg-[#FD6D02] mx-auto rounded-full mt-4" />
          </div>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            At People First HR Solutions, we believe continuous learning creates stronger teams, better workplaces, and sustainable business growth. Our training programs are designed to help organizations build capable, quality-driven, and performance-oriented workforces.
          </p>

        </div>
      </section>

    </div>
  );
}