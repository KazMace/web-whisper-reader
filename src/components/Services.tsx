
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-to-one counselling sessions tailored to your needs and goals in Devon or online.",
      details: "£50 per 50 minute session",
    },
    {
      title: "Clinical Supervision",
      description: "Professional supervision for counsellors and psychotherapists.",
      details: "£60 per 60 minute session",
    },
    {
      title: "Online Therapy",
      description: "Therapy sessions via secure video calls for those who prefer remote sessions.",
      details: "£50 per 50 minute session",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of therapeutic services to support your mental health and wellbeing journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-primary mb-4">{service.details}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
