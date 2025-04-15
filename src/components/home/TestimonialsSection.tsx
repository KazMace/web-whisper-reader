
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Christina created a safe, supportive space for me to explore difficult emotions. Her warm, empathetic approach helped me make significant positive changes in my life.",
      name: "Client, Individual Therapy",
    },
    {
      quote: "Working with Christina helped us develop a deeper understanding of each other and improve our communication. She guided us through challenging conversations with sensitivity and skill.",
      name: "Clients, Couples Counselling",
    },
    {
      quote: "Christina's supervision has been invaluable for my development as a therapist. Her insight, experience and supportive challenge has enhanced my practice considerably.",
      name: "Supervisee, Clinical Supervision",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what people say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-elegant relative overflow-visible">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              <CardContent className="p-6 pt-8 text-center">
                <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <p className="font-medium">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
