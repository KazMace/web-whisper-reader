
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              I'm here to help. Reach out to schedule an appointment or ask any questions.
            </p>
          </div>
        </section>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Contact Information - Landscape Tile */}
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">Location</h4>
                        <p className="text-muted-foreground">
                          Morchard Bishop, Devon<br />
                          (Specific location details provided when booking)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">Email</h4>
                        <p className="text-muted-foreground">
                          <a 
                            href="mailto:Christina_Hutchings@hotmail.com" 
                            className="hover:text-primary transition-colors"
                          >
                            Christina_Hutchings@hotmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">Working Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9am - 6pm<br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">Phone</h4>
                        <p className="text-muted-foreground">
                          <a 
                            href="tel:+447890624645" 
                            className="hover:text-primary transition-colors"
                          >
                            07890 624645
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
