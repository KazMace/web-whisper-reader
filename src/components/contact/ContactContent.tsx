
import React from "react";
import { ContactInformationCard } from "./ContactInformationCard";
import { ContactForm } from "./ContactForm";

export const ContactContent = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <ContactInformationCard />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
