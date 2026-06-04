import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    id: 1,
    title: "Payroll Management",
    desc: "Reliable payroll support including salary processing, attendance integration, statutory deductions, employee records, and payroll administration.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6m-6-4h6m2 10H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v9a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "HR Process Outsourcing (HRO)",
    desc: "Managing day-to-day HR functions including employee onboarding, documentation, attendance management, employee records, and workforce administration.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V4H2v16h5m10 0v-4a3 3 0 10-6 0v4m6 0H11" />
      </svg>
    )
  },
  {
    id: 3,
    title: "HR Policies & Documentation",
    desc: "Development of workplace policies, employee handbooks, HR procedures, code of conduct guidelines, and standardized HR documentation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h6.879a2.25 2.25 0 011.591.659l3.621 3.621a2.25 2.25 0 01.659 1.591V18A2.25 2.25 0 0118 20.25H7.5A2.25 2.25 0 015.25 18V6A2.25 2.25 0 017.5 3.75z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Performance Management Systems (PMS)",
    desc: "Helping organizations establish structured employee performance frameworks, goal-setting processes, and evaluation systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7h-5m5 0v5" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Employee Engagement Initiatives",
    desc: "Programs focused on improving workplace culture, employee participation, communication, motivation, and retention.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zm0 2c-2.761 0-5 1.79-5 4v1h10v-1c0-2.21-2.239-4-5-4zm8 0c-.854 0-1.659.171-2.385.474A5.958 5.958 0 0115 17v1h7v-1c0-2.21-2.239-4-5-4z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Virtual HR Services",
    desc: "Dedicated HR support for startups and growing organizations that require professional HR expertise without maintaining a full-time in-house HR department.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-9 6h8a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function HRSolution() {
  const waveContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const waveItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: custom * 0.15,
      },
    }),
  };

  return (
    <section className="w-full bg-white py-24 px-5 sm:px-8 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

        <div className="lg:col-span-5 lg:sticky lg:top-32">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF9A32]/30 bg-[#f8f9fb] mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF9A32] animate-pulse"></span>
            <span className="text-[13px] sm:text-[14px] font-semibold text-black uppercase tracking-wider">
              HR Solutions
            </span>
          </motion.div>

          <motion.h2
            variants={waveContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-black font-bold leading-[1.1] text-3xl md:text-5xl mb-6"
          >
            <motion.span variants={waveItemVariants} className="inline-block">
              Create
            </motion.span>{" "}
            <motion.span variants={waveItemVariants} className="inline-block">
              Better
            </motion.span>{" "}
            <motion.span variants={waveItemVariants} className="inline-block">
              Workplaces
            </motion.span>
            <br />
            <span className="text-[#FF9A32]">
              <motion.span variants={waveItemVariants} className="inline-block">
                Through
              </motion.span>{" "}
              <motion.span variants={waveItemVariants} className="inline-block">
                Strong
              </motion.span>{" "}
              <motion.span variants={waveItemVariants} className="inline-block">
                HR
              </motion.span>{" "}
              <motion.span variants={waveItemVariants} className="inline-block">
                Practices
              </motion.span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-base md:text-lg leading-[1.6] tracking-wide max-w-md text-justify md:text-left"
          >
            An effective HR system helps organizations create productive workplaces, improve 
            employee experiences, and maintain operational consistency. <br />
            Our HR solutions are designed to support organizations with practical HR processes, 
            employee-focused systems, and scalable workforce practices.
          </motion.p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-[#f8f9fb] border border-gray-100 rounded-[1.5rem] p-6 sm:p-8 flex items-start gap-5 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#FF9A32]/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF9A32] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-l-[1.5rem]"></div>

              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#FF9A32] group-hover:scale-110 group-hover:bg-[#FF9A32] group-hover:text-white transition-all duration-300 shadow-sm">
                {reason.icon}
              </div>

              <div className="flex flex-col">
                <h3 className="text-black font-bold text-[18px] sm:text-[20px] mb-2 group-hover:text-[#FF9A32] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
