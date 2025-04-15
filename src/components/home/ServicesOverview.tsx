
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeartHandshake, Users, Brain } from "lucide-react";

export const ServicesOverview = () => {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-to-one therapy sessions providing a safe, confidential space to explore your thoughts, feelings and experiences.",
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
      link: "/services#individual"
    },
    {
      title: "Couples Counselling",
      description: "Supporting couples to improve communication, resolve conflicts and strengthen their relationship.",
      icon: <Users className="h-10 w-10 text-primary" />,
      link: "/services#couples"
    },
    {
      title: "Clinical Supervision",
      description: "Professional supervision for counsellors and psychotherapists to reflect on and develop their practice.",
      icon: <Brain className="h-10 w-10 text-primary" />,
      link: "/services#supervision"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Offered</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional counselling and psychotherapy services tailored to your individual needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
