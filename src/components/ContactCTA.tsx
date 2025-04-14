
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ContactCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Taking the first step can be difficult, but you don't have to face it alone. Contact me today to schedule your initial consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:text-primary hover:bg-white px-8">
            <a href="tel:+447890624645">Call 07890 624645</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
