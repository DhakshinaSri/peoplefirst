import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact-components/ContactForm";
import Logo from "@/assets/peoplefirstlogo.png";

export default function ContactIntro() {
  return (
    <section className="py-24 bg-white overflow-hidden selection:bg-[#FFC801]/30">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 px-6 md:px-12">

        {/* Left Content */}
        <div className="lg:col-span-2 flex flex-col justify-center">

          {/* Tag */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F1F6F4] text-[#114C5A] text-[10px] font-bold uppercase tracking-[0.3em] mb-8 shadow-sm border border-[#114C5A]/5 w-fit">
            Contact Hub
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-[0.9] text-[#172B36] mb-6">
            Let’s Build <br />
            <span className="text-[#2B74DB]">Something Together</span>
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1.5 bg-[#2B74DB] mb-8 rounded-full"></div>

          {/* Description */}
          <p className="text-[#114C5A]/60 text-lg leading-relaxed font-medium mb-12 max-w-lg">
            If you have an idea, a requirement, or a challenge you would like
            to solve, we are here to help. Reach out to us and let’s discuss
            how we can work together.
          </p>

          {/* Contact Cards */}
          <div className="space-y-6">

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F1F6F4]/60 border border-[#114C5A]/5 hover:border-[#2B74DB]/20 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2B74DB]">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114C5A]/40 mb-2">
                  Phone
                </p>
                <p className="font-bold text-[#172B36] text-sm">
                  +91 9445393068  
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F1F6F4]/60 border border-[#114C5A]/5 hover:border-[#2B74DB]/20 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2B74DB]">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114C5A]/40 mb-2">
                  Business Email
                </p>
                <p className="font-bold text-[#172B36] text-sm break-all">
                  info@peoplefirst.in
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F1F6F4]/60 border border-[#114C5A]/5 hover:border-[#2B74DB]/20 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2B74DB]">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114C5A]/40 mb-2">
                  Location
                </p>
                <p className="font-bold text-[#172B36] text-sm leading-relaxed">
                  No. 359, 1st Floor, Natraj Building,
                  Dr. Nanjappa Road, Coimbatore, Tamil Nadu 641018
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F1F6F4]/60 border border-[#114C5A]/5 hover:border-[#2B74DB]/20 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2B74DB] relative">
                <Clock size={18} />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2B74DB] animate-pulse" />
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#114C5A]/40 mb-2">
                  Working Hours
                </p>

                <div className="space-y-1">
                  <p className="font-bold text-[#172B36] text-sm">
                    Monday – Saturday
                  </p>
                  <p className="text-[#114C5A]/60 text-sm font-medium">
                    09:00 AM – 06:00 PM IST
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-3 flex items-center">
          <ContactForm />
        </div>

      </div>

      <style>{`

        .tracking-tighter {
          letter-spacing: -0.05em;
        }
      `}</style>
    </section>
  );
}