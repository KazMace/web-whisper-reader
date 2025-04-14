
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
          </div>
        </section>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p>
                  Hello, I'm Christina Hutchings, a fully qualified and BACP registered Integrative Counsellor and Psychotherapist with a private practice in Norwich, Norfolk.
                </p>
                
                <p>
                  I work with adults facing a wide range of difficulties, including anxiety, depression, loss, trauma, relationship issues, low self-esteem, identity struggles, and life transitions. My approach is warm, non-judgmental, and collaborative.
                </p>
                
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
