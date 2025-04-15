
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export const ContactCTA = () => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-primary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-elegant p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to take the first step?</h2>
              <p className="text-muted-foreground mb-6">
                I offer a safe, non-judgmental, confidential space for you to explore your thoughts and feelings. Get in touch to book your initial consultation.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 shadow-md">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-primary/20 flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
                <div>
                  <h4 className="font-medium text-primary mb-1">Phone</h4>
                  <p className={isMobile ? "text-sm" : ""}>0754 897 2668</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Email</h4>
                  <p className={isMobile ? "text-sm" : ""}>Christina_Hutchings@hotmail.com</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-primary mb-1">Location</h4>
                <p className={isMobile ? "text-sm" : ""}>Morchard Bishop, Devon</p>
              </div>
              
              <div>
                <h4 className="font-medium text-primary mb-1">Working Hours</h4>
                <p className={isMobile ? "text-sm" : ""}>Tuesday, Wednesday & Thursday, 9:30am - 7pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
