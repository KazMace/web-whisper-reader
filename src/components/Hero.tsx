
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-blue-50/80 to-white pointer-events-none"></div>
      
      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Professional Counselling, Psychotherapy <br />& Clinical Supervision <span className="text-primary">in Devon</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Creating a safe, compassionate space for you to explore your thoughts and feelings with Christina Hutchings, MBACP Registered Counsellor and Psychotherapist.
          </p>
          
          <div className="flex items-center justify-center mb-10">
            <img 
              src="/lovable-uploads/62e8f537-2d5e-466d-9d25-81bece9f2bdc.png" 
              alt="Professional Standards Authority Accredited Register & BACP Registered Member" 
              className="h-20 sm:h-24 object-contain"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link to="/contact">Book a Session</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 rounded-full border-primary/30 hover:border-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};
