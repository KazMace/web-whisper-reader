
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-full opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hello, I'm Christina</h2>
            <p className="text-muted-foreground mb-5 text-lg">
              I am a fully qualified and BACP registered Integrative Counsellor and Psychotherapist with a private practice in Devon. I offer face-to-face, online and telephone therapy to individuals aged 18+.
            </p>
            <p className="text-muted-foreground mb-8 text-lg">
              I work with clients experiencing a range of issues including anxiety, depression, trauma, loss, relationship difficulties, low self-esteem and life transitions. I provide a non-judgmental, confidential space where you can explore your thoughts and feelings at your own pace.
            </p>
            <div className="flex mb-8">
              <div className="flex items-center gap-3 bg-primary/5 px-4 py-3 rounded-full">
                <Award className="text-primary h-5 w-5" />
                <span className="font-medium">BACP Registered Member</span>
              </div>
            </div>
            <Button asChild variant="outline" className="rounded-full px-8 border-primary/30 hover:border-primary shadow-sm">
              <Link to="/about">More About Me</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center p-8 overflow-hidden shadow-elegant">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full"></div>
                <p className="relative text-primary font-medium text-center">Professional photo placeholder</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
