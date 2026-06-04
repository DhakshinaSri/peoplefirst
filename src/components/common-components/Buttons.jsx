import React from "react";
import { Loader2 } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon: Icon,
  iconPosition = "right",
  className = "",
  ...props
}) {

  // Base Styles
  const baseStyles =
    "relative inline-flex items-center justify-center font-bold uppercase tracking-[0.15em] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none group overflow-hidden rounded-xl";

  // Variants
  const variants = {
    primary:
      "bg-[#FF9932] text-[#172B36] hover:bg-[#FFC801] shadow-lg shadow-[#FF9932]/10",

    nocturnal:
      "bg-[#114C5A] text-white hover:bg-[#172B36] shadow-lg shadow-[#114C5A]/20",

    secondary:
      "bg-[#F1F6F4] text-[#114C5A] hover:bg-[#D9E8E2]",

    outline:
      "bg-transparent border-2 border-[#114C5A] text-[#114C5A] hover:bg-[#114C5A] hover:text-white",

    ghost:
      "bg-transparent text-[#114C5A] hover:bg-[#F1F6F4]",
  };

  // Sizes
  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-8 py-4 text-[11px]",
    lg: "px-10 py-5 text-[13px]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {/* Corner Accent */}
      <span className="absolute top-0 right-0 w-[4px] h-[4px] bg-white/20 group-hover:bg-white/40 transition-colors" />

      {/* Content */}
      <div className="relative flex items-center gap-3 z-10">

        {isLoading ? (
          <Loader2 className="animate-spin" size={16} />
        ) : (
          <>
            {Icon && iconPosition === "left" && (
              <Icon
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
            )}

            <span>{children}</span>

            {Icon && iconPosition === "right" && (
              <Icon
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            )}
          </>
        )}

      </div>

      {/* Gloss Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
    </button>
  );
}