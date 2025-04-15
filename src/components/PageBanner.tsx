
import React from "react";
import { Users, Heart, HandHelping } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  showIcons?: boolean;
}

export const PageBanner = ({ title, subtitle, showIcons = true }: PageBannerProps) => {
  return (
    <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
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
        
        {/* Professional support section with image */}
        <div className="mt-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-white backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-elegant border border-white/30">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img 
              src="/lovable-uploads/c3604289-b229-488a-8573-53ccdce6c6f0.png" 
              alt="Serene forest path representing the healing journey" 
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                <HandHelping className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Professional Support When You Need It</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Creating a safe, compassionate space for healing, growth, and understanding through professional therapeutic relationships.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  );
};
