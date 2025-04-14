
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

const About = () => {
  const areasOfExperience = [
    "Depression",
    "Anxiety",
    "LGBTQ+",
    "ASD/Autism",
    "Relationship Difficulties",
    "Pregnancy & Childbirth",
    "Bereavement, Loss & Suicide",
    "Childhood Related Issues",
    "Trauma & Abuse",
    "Bullying",
    "Identity Development & Self Esteem"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <PageBanner 
          title="About Me" 
          subtitle="Learn more about my approach and experience"
        />
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden shadow-elegant">
                    <img 
                      src="/lovable-uploads/76006b9c-0f4e-4072-9688-256d30b80940.png" 
                      alt="Christina Hutchings, Counsellor and Psychotherapist" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Hello, I'm Christina</h2>
                  <p className="text-muted-foreground mb-4">
                    I'm a fully qualified and BACP registered Integrative Counsellor and Psychotherapist with a private practice in Morchard Bishop, Devon.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    I work with adults facing a wide range of difficulties, including anxiety, depression, loss, trauma, relationship issues, low self-esteem, identity struggles, and life transitions. My approach is warm, non-judgmental, and collaborative.
                  </p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <h2>My Approach</h2>
                <p>
                  As an integrative therapist, I draw from different theories and approaches, tailoring my work to suit each client's unique needs. I believe in the healing power of a strong therapeutic relationship based on trust, empathy, and respect.
                </p>
                
                <p>
                  My core training is psychodynamic, meaning I consider how past experiences may influence present difficulties. I also incorporate elements of person-centred therapy, existential approaches, and attachment theory.
                </p>
                
                <h2>Qualifications & Experience</h2>
                <p>
                  I hold a Postgraduate Diploma in Counselling and Psychotherapy from the University of East Anglia and am a registered member of the British Association for Counselling and Psychotherapy (BACP). I adhere to their ethical framework and engage in regular clinical supervision and continuing professional development.
                </p>
                
                <p>
                  In addition to my private practice, I have experience working within mental health charities and educational settings, supporting clients with diverse backgrounds and needs.
                </p>
                
                <h2 className="mt-8">Areas of Experience</h2>
                <p>I have experience in the following areas:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4 mb-8">
                  {areasOfExperience.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`area-${index}`} checked />
                      <label
                        htmlFor={`area-${index}`}
                        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="bg-primary/5 rounded-lg p-6 mb-8 shadow-sm">
                  <h3 className="text-xl font-medium mb-4">How I Can Help</h3>
                  <p>
                    Whether you're going through a difficult life transition, struggling with anxiety or depression, or simply feeling stuck, therapy can provide a space to explore your feelings and find a path forward. I'm here to support you on that journey.
                  </p>
                  <p className="mt-2">
                    My integrative approach means I can adapt my therapeutic style to best meet your needs, drawing from different theories and techniques as appropriate.
                  </p>
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

export default About;
