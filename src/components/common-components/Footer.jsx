import React from 'react';
import { Link } from "react-router-dom";
import { 
  Mail, 
  Clock, 
  Globe2, 
  ChevronRight,
  MapPin
} from 'lucide-react';
import Logo from "@/assets/peoplefirstlogo2.png";

const COLORS = {
  arctic: '#F1F6F4',
  forsythia: '#FFC801',
  nocturnal: '#114C5A',
  mystic: '#D9E8E2',
  saffron: '#FF9932',
  oceanic: '#172B36',
};

const NAVIGATION = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Training", href: "/training" },
    { label: "Contact", href: "/contact" },
  ],

  services: [
    { label: "Staffing Solutions", href: "/services" },
    { label: "HR Solutions", href: "/services" },
    { label: "Compliance & Industrial Relations", href: "/services" },
  ],

  training: [
    { label: "Six Sigma Training Programs", href: "/training" },
    { label: "Kaizen Training Programs", href: "/training" },
    { label: "5S Workplace Management", href: "/training" },
    { label: "Leadership Development Programs", href: "/training" },
    { label: "ISO & Quality Awareness Training", href: "/training" },
    { label: "Soft Skills Development", href: "/training" },
    { label: "Workplace Safety & Employee Awareness Programs", href: "/training" },
    { label: "POSH Awareness Programs", href: "/training" },
  ]
};

export default function Footer() {
  return (
    <footer className="w-full bg-white font-sans text-[#172B36] selection:bg-[#FFC801]/30">
      {/* Top Professional Accent Line */}
      <div className="flex w-full h-[1.5px]">
        <div className="flex-1 bg-[#114C5A]/10" />
        <div className="w-32 bg-[#FF9932]" />
        <div className="w-16 bg-[#FFC801]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Main Grid Layout: Brand + Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
  <div className="space-y-6">
    
    {/* Logo */}
    <div className="flex items-center">
      <img
        src={Logo}
        alt="People First"
        className="h-14 w-auto object-contain"
      />
    </div>

    {/* Description */}
    <p className="text-sm text-[#114C5A]/60 font-medium leading-relaxed max-w-sm">
      People First is a Chennai-based technology company delivering
      innovative software products, enterprise solutions, and digital
      transformation services for global businesses.
    </p>

    {/* Location */}
    <div className="flex items-center gap-2 text-[#114C5A]/80">
      <MapPin size={14} className="text-[#FF9932]" />
      <span className="text-xs font-bold uppercase tracking-wider">
        No. 359, 1st Floor, Natraj Building, <br />
        Dr. Nanjappa Road, Coimbatore, Tamil Nadu 641018
      </span>
    </div>

  </div>
</div>

          {/* Columns 2-4: Structured Navigation */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold text-[#114C5A]/40 uppercase tracking-[0.2em]">Quick Links</h4>
              <ul className="space-y-3">
                {NAVIGATION.quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-xs font-bold text-[#114C5A]/70 hover:text-[#FF9932] transition-colors flex items-center gap-1 group">
                      <ChevronRight size={10} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services List */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold text-[#114C5A]/40 uppercase tracking-[0.2em]">Our Services</h4>
              <ul className="space-y-3">
                {NAVIGATION.services.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-xs font-bold text-[#114C5A]/70 hover:text-[#FF9932] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Careers List */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold text-[#114C5A]/40 uppercase tracking-[0.2em]">Training Programs</h4>
              <ul className="space-y-3">
                {NAVIGATION.training.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-xs font-bold text-[#114C5A]/70 hover:text-[#FF9932] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 px-8 rounded-2xl bg-[#F1F6F4] border border-[#114C5A]/5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto">
            {/* Business Email */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF9932] shadow-sm">
                <Mail size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-[#114C5A]/40 uppercase tracking-widest">Business</span>
                <a href="mailto:info@peoplefirst.in" className="text-sm font-bold text-[#172B36] hover:text-[#FF9932] transition-colors">info@peoplefirst.in</a>
              </div>
            </div>

            {/* Careers Email */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF9932] shadow-sm">
                <Mail size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-[#114C5A]/40 uppercase tracking-widest">Mobile Number</span>
                <a href="tel:+919445393068" className="text-sm font-bold text-[#172B36] hover:text-[#FF9932] transition-colors">+91 9445393068</a>
              </div>
            </div>
          </div>

          {}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF9932] shadow-sm relative">
              <Clock size={14} />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF9932] animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-[#114C5A]/40 uppercase tracking-widest">Working Hours</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#172B36]">Monday – Saturday</span>
                <span className="w-1 h-1 rounded-full bg-[#114C5A]/20" />
                <span className="text-sm font-bold text-[#172B36]">09:00 AM – 6:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#114C5A]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#114C5A]/40 font-bold tracking-tight">
              &copy; {new Date().getFullYear()} People First. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        
        body {
          -webkit-font-smoothing: antialiased;
        }

        .tracking-tighter { letter-spacing: -0.05em; }
      `}</style>
    </footer>
  );
}