
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
      
      <div className="absolute right-10 top-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute left-10 bottom-10 w-40 h-40 rounded-full bg-white/5 blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Taking the first step can be difficult, but you don't have to face it alone. Contact me today to schedule your initial consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button asChild size="lg" variant="secondary" className="px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/70 text-white hover:text-primary hover:bg-white px-8 rounded-full gap-2 shadow-lg hover:shadow-xl transition-all">
            <a href="tel:+447890624645">
              <PhoneCall className="h-5 w-5" />
              <span>Call 07890 624645</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
