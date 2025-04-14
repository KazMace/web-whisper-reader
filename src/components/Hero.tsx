
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Counselling & Psychotherapy in Devon
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Creating a safe, compassionate space for you to explore your thoughts and feelings with Christina Hutchings, MBACP Registered Counsellor and Psychotherapist.
          </p>
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/62e8f537-2d5e-466d-9d25-81bece9f2bdc.png" 
              alt="Professional Standards Authority Accredited Register & BACP Registered Member" 
              className="h-16 sm:h-20 object-contain"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/contact">Book a Session</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-primary/10"></div>
    </section>
  );
};
