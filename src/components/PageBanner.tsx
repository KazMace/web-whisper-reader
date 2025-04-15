
import React from "react";
import { Users, Heart, HandHelping } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  showIcons?: boolean;
}

export const PageBanner = ({ title, subtitle, showIcons = true }: PageBannerProps) => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/90 to-primary/80 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
        <div className="absolute inset-0 bg-pattern"></div>
      </div>
      
      {/* Icons representing professionals helping patients */}
      {showIcons && (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="container mx-auto h-full relative">
            <HandHelping className="absolute top-1/4 left-10 md:left-20 h-16 w-16 md:h-20 md:w-20 text-white transform rotate-12" />
            <Users className="absolute bottom-1/4 right-10 md:right-24 h-14 w-14 md:h-16 md:w-16 text-white transform -rotate-6" />
            <Heart className="absolute top-1/2 left-1/2 h-10 w-10 md:h-12 md:w-12 text-white transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      )}
      
      {/* Main banner content */}
      <div className="container relative mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  );
};

