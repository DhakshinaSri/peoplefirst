import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    id: 1,
    title: "Talent Acquisition",
    desc: "End-to-end recruitment support to help organizations identify and hire suitable professionals across technical, non-technical, operational, and managerial roles.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 14a4 4 0 10-8 0m8 0v2a2 2 0 002 2h1m-11-4v2a2 2 0 01-2 2H5m7-10a4 4 0 110 8 4 4 0 010-8z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Permanent Staffing",
    desc: "Helping organizations build strong teams through quality hiring for long-term workforce requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5l7.5 4.5v6c0 4.5-3 7.5-7.5 8.5-4.5-1-7.5-4-7.5-8.5V9l7.5-4.5z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Contract Staffing",
    desc: "Flexible staffing support for project-based, temporary, seasonal, and business expansion requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 5h8m-8 5h5" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Executive Hiring",
    desc: "Specialized hiring support for leadership, middle-management, and strategic roles requiring experienced professionals.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l3 6 6 .9-4.5 4.4 1.1 6.2L12 17.8 6.4 20.5l1.1-6.2L3 9.9 9 9l3-6z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Recruitment Process Outsourcing (RPO)",
    desc: "Structured recruitment support designed to improve hiring efficiency, streamline talent acquisition processes, and reduce hiring timelines.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6m6 6V7m4 13H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Campus Hiring",
    desc: "Supporting organizations in connecting with colleges and institutions for fresher hiring, internship opportunities, and entry-level workforce development.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L3 9l9 5 9-5-9-5zm0 7v9m-6-6v4m12-4v4" />
      </svg>
    )
  }
];

export default function StaffingSolutions() {
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
              Staffing Solutions
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
              Building
            </motion.span>{" "}
            <motion.span variants={waveItemVariants} className="inline-block">
              the
            </motion.span>{" "}
            <motion.span variants={waveItemVariants} className="inline-block">
              Right
            </motion.span>
            <br />
            <span className="text-[#FF9A32]">
              <motion.span variants={waveItemVariants} className="inline-block">
                Workforce
              </motion.span>{" "}
              <motion.span variants={waveItemVariants} className="inline-block">
                for
              </motion.span>{" "}
              <motion.span variants={waveItemVariants} className="inline-block">
                Sustainable
              </motion.span>{" "}
              <motion.span variants={waveItemVariants} className="inline-block">
                Growth
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
            Hiring the right people is one of the most important decisions for
            any organization. We support businesses in identifying, sourcing,
            and onboarding talent that aligns with operational requirements,
            workplace culture, and long-term business goals. Our staffing
            solutions are designed to provide flexibility, speed, and access to
            skilled talent across industries and functions.
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
