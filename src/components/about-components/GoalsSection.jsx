import React from "react";
import {
  Handshake,
  Heart,
  Users2,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";

const GOALS = [
  {
    title: "Professional HR Consulting",
    desc: "Providing reliable and professional HR consulting services tailored to organizational needs.",
    icon: <Users2 size={24} />,
  },
  {
    title: "Statutory Compliance Support",
    desc: "Supporting organizations in maintaining statutory and labour law compliance effectively.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "POSH Awareness & Training",
    desc: "Promoting safe and respectful workplaces through POSH awareness programs and training initiatives.",
    icon: <Heart size={24} />,
  },
  {
    title: "Labour Code Implementation",
    desc: "Assisting companies in implementing new labour codes smoothly and efficiently.",
    icon: <Clock size={24} />,
  },
  {
    title: "Staffing Solutions",
    desc: "Delivering high-quality staffing solutions to meet organizational workforce requirements.",
    icon: <Users size={24} />,
  },
  {
    title: "Long-Term Partnerships",
    desc: "Building long-term client relationships based on trust, professionalism, and mutual growth.",
    icon: <Handshake size={24} />,
  },
];

export default function GoalsSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white border-b border-[#F1F6F4]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F1F6F4] text-[#114C5A] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-sm border border-[#114C5A]/5">
              <Handshake size={14} className="text-[#FF9932]" />
              Our Objectives
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] text-[#172B36]">
              Our <span className="text-[#FF9932]">Goals</span>
            </h2>
          </div>

          <p className="text-lg text-[#114C5A]/60 max-w-sm font-medium leading-relaxed">
            We are committed to delivering professional HR solutions,
            workforce excellence, compliance support, and trusted
            partnerships that contribute to long-term organizational
            success.
          </p>
        </div>

        {/* Goal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOALS.map((goal, i) => (
            <div
              key={i}
              className="group p-8 rounded-[32px] bg-white border border-[#114C5A]/5 hover:border-[#114C5A] transition-all duration-500 hover:shadow-2xl hover:shadow-[#114C5A]/10 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#F1F6F4] flex items-center justify-center text-[#114C5A] group-hover:bg-[#114C5A] group-hover:text-white transition-all duration-500 mb-6">
                  {goal.icon}
                </div>

                <h3 className="text-xl font-bold text-[#172B36] mb-4 leading-tight">
                  {goal.title}
                </h3>

                <p className="text-sm text-[#114C5A]/60 font-medium leading-relaxed">
                  {goal.desc}
                </p>
              </div>

              <span className="absolute -right-4 -bottom-4 text-8xl font-bold text-[#114C5A]/5 pointer-events-none transition-colors group-hover:text-[#FF9932]/10">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}