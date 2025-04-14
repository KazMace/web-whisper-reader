
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
          </div>
        </section>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p>
                  This privacy policy outlines how Christina Hutchings Counselling & Psychotherapy collects, uses, and protects your personal information.
                </p>
                
                <h2>Information Collection</h2>
                <p>
                  I collect personal information such as your name, contact details, and relevant health information necessary for providing therapy services. This information is collected directly from you during our initial consultation and throughout our therapeutic relationship.
                </p>
                
                <h2>Use of Information</h2>
                <p>
                  The information I collect is used solely for the purpose of providing therapy services, including:
                </p>
                <ul>
                  <li>Contacting you regarding appointments</li>
                  <li>Maintaining appropriate clinical records</li>
                  <li>Providing effective therapeutic support</li>
                </ul>
                
                <h2>Data Storage and Security</h2>
                <p>
                  All personal information is stored securely in accordance with data protection regulations. Digital records are password-protected and encrypted, while any paper records are kept in locked storage.
                </p>
                
                <h2>Confidentiality</h2>
                <p>
                  As a BACP registered therapist, I adhere to strict confidentiality guidelines. Information shared during therapy sessions remains confidential with few exceptions:
                </p>
                <ul>
                  <li>When there is risk of harm to yourself or others</li>
                  <li>When required by law or court order</li>
                  <li>During professional supervision (client identities remain anonymous)</li>
                </ul>
                
                <h2>Data Retention</h2>
                <p>
                  I retain client records for a period of 7 years after the end of therapy, as recommended by professional guidelines and insurance requirements. After this period, records are securely destroyed.
                </p>
                
                <h2>Your Rights</h2>
                <p>
                  Under data protection law, you have rights including:
                </p>
                <ul>
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Erasure of your information in certain circumstances</li>
                </ul>
                
                <h2>Contact</h2>
                <p>
                  If you have any questions about this privacy policy or wish to exercise your data protection rights, please contact me at christina@christinahutchings.uk.
                </p>
                
                <p>
                  This privacy policy was last updated on April 14, 2025.
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

export default PrivacyPolicy;
