
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactContent } from "@/components/contact/ContactContent";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <ContactHeader />
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
