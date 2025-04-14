
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Hello, I'm Christina</h2>
            <p className="text-muted-foreground mb-4">
              I am a fully qualified and BACP registered Integrative Counsellor and Psychotherapist with a private practice in Devon. I offer face-to-face, online and telephone therapy to individuals aged 18+.
            </p>
            <p className="text-muted-foreground mb-6">
              I work with clients experiencing a range of issues including anxiety, depression, trauma, loss, relationship difficulties, low self-esteem and life transitions. I provide a non-judgmental, confidential space where you can explore your thoughts and feelings at your own pace.
            </p>
            <div className="flex mb-6">
              <div className="flex items-center gap-2">
                <Award className="text-primary h-5 w-5" />
                <span className="text-sm font-medium">BACP Registered Member</span>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link to="/about">More About Me</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 flex items-center justify-center text-center p-8 text-lg text-primary font-medium relative overflow-hidden">
              Professional photo placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
