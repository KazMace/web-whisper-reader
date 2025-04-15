
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Christina</h2>
            <p className="text-muted-foreground mb-4">
              I am a BACP registered counsellor and psychotherapist with extensive experience supporting individuals and couples through life's challenges. 
            </p>
            <p className="text-muted-foreground mb-6">
              My therapeutic approach integrates different methodologies tailored to your unique needs, creating a supportive environment for growth and healing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full px-8">
                <Link to="/about">More About Me</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="/lovable-uploads/76006b9c-0f4e-4072-9688-256d30b80940.png" 
                alt="Christina Hutchings, Counsellor and Psychotherapist" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
