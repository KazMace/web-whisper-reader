
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactInformationCard } from "@/components/contact/ContactInformationCard";
import { ContactForm } from "@/components/contact/ContactForm";

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
            <div className="max-w-5xl mx-auto space-y-12">
              <ContactInformationCard />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
