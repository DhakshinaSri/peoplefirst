import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    id: 1,
    title: "Professional & Reliable Services",
    desc: "Delivering professional, reliable, and client-focused HR services that support business growth and workforce excellence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h-9m9 4.5h-9m9 4.5h-9M6 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Accuracy & Transparency",
    desc: "Ensuring accuracy, accountability, and transparency in all compliance, auditing, and workforce management processes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Continuous Improvement",
    desc: "Continuously improving our services, processes, and capabilities to meet and exceed client expectations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.992 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865A8.25 8.25 0 0117.834 6.165l3.181 3.183" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Ethical Business Practices",
    desc: "Maintaining integrity, professionalism, and ethical standards in every aspect of our business operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7.5 4.5v4.5c0 5.25-3.375 8.25-7.5 9-4.125-.75-7.5-3.75-7.5-9V7.5L12 3z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Timely & Efficient Solutions",
    desc: "Providing timely, practical, and efficient HR solutions that help organizations operate with confidence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Value-Driven Support",
    desc: "Ensuring every client receives consistent, dependable, and value-driven HR support that contributes to long-term success.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5l2.09 4.235 4.673.679-3.382 3.296.798 4.654L12 15.75l-4.179 2.214.798-4.654L5.237 9.414l4.673-.679L12 4.5z" />
      </svg>
    )
  }
];

export default function Quality() {
  // Variants for staggered container (Heading Wave)
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

  // Variants for the right-side cards
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut", 
        delay: custom * 0.15 // Staggers based on index
      }
    })
  };

  return (
    <section className="w-full bg-white py-24 px-5 sm:px-8 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* =========================================
            LEFT COLUMN (Sticky on Desktop)
        ========================================= */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <motion.h2
  variants={waveContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  className="text-black font-bold leading-[1.1] text-[36px] sm:text-[45px] md:text-[50px] xl:text-[55px] mb-6"
>
  <motion.span variants={waveItemVariants} className="inline-block">
    Quality
  </motion.span>{" "}
  <motion.span variants={waveItemVariants} className="inline-block">
    Policy
  </motion.span>
</motion.h2>

          <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-gray-600 text-base md:text-lg leading-[1.6] tracking-wide max-w-md text-justify md:text-left"
>
  At People First HR Solutions, quality and integrity form the foundation of our services. We are committed to delivering professional, transparent, ethical, and dependable HR solutions while continuously improving our processes to create lasting value for every client we serve.
</motion.p>   
        </div>

        {/* =========================================
            RIGHT COLUMN (Scrolling Cards list)
        ========================================= */}
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
              {/* Decorative side accent that appears on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF9A32] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-l-[1.5rem]"></div>

              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#FF9A32] group-hover:scale-110 group-hover:bg-[#FF9A32] group-hover:text-white transition-all duration-300 shadow-sm">
                {reason.icon}
              </div>

              {/* Text Content */}
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