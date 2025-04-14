
import React from "react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <section className="relative bg-primary/10 py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20"></div>
    </section>
  );
};
