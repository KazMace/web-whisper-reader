import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageBanner } from "@/components/PageBanner";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <PageBanner 
          title="Services & Fees" 
          subtitle="I offer a range of therapeutic services to support your mental health journey."
        />
        
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-10">
                <div id="individual-therapy">
                  <h2 className="text-2xl font-bold mb-6">Individual Therapy</h2>
                  <Card className="border-0 shadow-elegant card-hover bg-white/90 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20"></div>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-medium mb-4">What to Expect</h3>
                          <p className="text-muted-foreground mb-4">
                            I offer one-to-one counselling and psychotherapy for adults (18+) in a confidential, supportive environment. Sessions provide a space for you to explore your thoughts, feelings, and experiences at your own pace.
                          </p>
                          <p className="text-muted-foreground">
                            Therapy sessions typically take place weekly at the same time and last for 50 minutes. The overall duration of therapy depends on your individual needs and can be discussed during our initial consultation.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-4">Fees</h3>
                          <p className="text-muted-foreground mb-2">Initial Consultation: £50 (50 minutes)</p>
                          <p className="text-muted-foreground mb-6">Ongoing Sessions: £50 (50 minutes)</p>
                          
                          <h3 className="text-xl font-medium mb-4">Format Options</h3>
                          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>Face-to-face sessions in Morchard Bishop, Devon</li>
                            <li>Online therapy via secure video platform</li>
                            <li>Telephone sessions</li>
                          </ul>
                          
                          <Button asChild className="w-full md:w-auto">
                            <Link to="/contact">Book a Session</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Clinical Supervision</h2>
                  <Card className="border-0 shadow-elegant card-hover bg-white/90 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20"></div>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-medium mb-4">For Counsellors & Therapists</h3>
                          <p className="text-muted-foreground mb-4">
                            I offer clinical supervision to qualified counsellors and therapists, as well as those in training. My supervisory approach is supportive, reflective, and focused on developing your therapeutic practice.
                          </p>
                          <p className="text-muted-foreground">
                            Supervision sessions provide a space to discuss client work, explore challenges, and enhance your professional development in a collaborative environment.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-4">Fees</h3>
                          <p className="text-muted-foreground mb-2">Individual Supervision: £60 (60 minutes)</p>
                          <p className="text-muted-foreground mb-6">Group Supervision: Please contact for details</p>
                          
                          <h3 className="text-xl font-medium mb-4">Format Options</h3>
                          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>Face-to-face supervision in Morchard Bishop, Devon</li>
                            <li>Online supervision via secure video platform</li>
                          </ul>
                          
                          <Button asChild className="w-full md:w-auto">
                            <Link to="/contact">Enquire About Supervision</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div id="online-therapy">
                  <h2 className="text-2xl font-bold mb-6">Online Therapy</h2>
                  <Card className="border-0 shadow-elegant card-hover bg-white/90 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20"></div>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-medium mb-4">What is Online Therapy?</h3>
                          <p className="text-muted-foreground mb-4">
                            Online therapy provides a flexible and accessible way to receive professional counselling support from the comfort of your own space. Using secure video platforms, we can connect and work together remotely.
                          </p>
                          <p className="text-muted-foreground">
                            Sessions are conducted via confidential video calls, ensuring privacy and convenience while maintaining the same level of professional, compassionate support as in-person therapy.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-4">Fees</h3>
                          <p className="text-muted-foreground mb-2">Online Session: £50 (50 minutes)</p>
                          <p className="text-muted-foreground mb-6">Initial Consultation: £50 (50 minutes)</p>
                          
                          <h3 className="text-xl font-medium mb-4">Format Options</h3>
                          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>Secure video platform sessions</li>
                            <li>Flexible scheduling</li>
                            <li>Accessible from anywhere in Devon</li>
                          </ul>
                          
                          <Button asChild className="w-full md:w-auto">
                            <Link to="/contact">Book Online Session</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
