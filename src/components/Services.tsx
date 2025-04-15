
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Video } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-to-one counselling sessions tailored to your needs and goals in Devon or online.",
      details: "£50 per 50 minute session",
      icon: Heart,
      link: "/services#individual-therapy"
    },
    {
      title: "Clinical Supervision",
      description: "Professional supervision for counsellors and psychotherapists.",
      details: "£60 per 60 minute session",
      icon: Users,
      link: "/services"
    },
    {
      title: "Online Therapy",
      description: "Therapy sessions via secure video calls for those who prefer remote sessions.",
      details: "£50 per 50 minute session",
      icon: Video,
      link: "/services#online-therapy"
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I offer a range of therapeutic services to support your mental health and wellbeing journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-elegant card-hover bg-white/90 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20"></div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-primary mb-6 text-lg">{service.details}</p>
                <Button asChild variant="outline" className="w-full rounded-md">
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild size="lg" className="rounded-full px-10 shadow-md">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
