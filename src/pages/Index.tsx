
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutSection } from "@/components/AboutSection";
import { ContactCTA } from "@/components/ContactCTA";
import { PageBanner } from "@/components/PageBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Christina Hutchings | Counsellor & Psychotherapist in Devon</title>
        <meta name="description" content="Professional counselling and psychotherapy services in Devon with Christina Hutchings, MBACP Registered Counsellor and Psychotherapist. Offering a safe, supportive space for personal growth and healing." />
        <meta name="keywords" content="counselling, psychotherapy, therapist, Devon, Christina Hutchings, mental health, anxiety, depression, trauma, BACP registered, clinical supervisor" />
        <meta property="og:title" content="Christina Hutchings | Counsellor & Psychotherapist in Devon" />
        <meta property="og:description" content="Professional counselling and psychotherapy services in Devon with Christina Hutchings, MBACP Registered Counsellor and Psychotherapist." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://christinahutchings.uk" />
        <link rel="canonical" href="https://christinahutchings.uk" />
      </Helmet>
      <Navigation />
      <main className="flex-1">
        <PageBanner 
          title="Professional Counselling & Psychotherapy" 
          subtitle="Expert therapeutic support to help you navigate life's challenges"
        />
        <Hero />
        <AboutSection />
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
