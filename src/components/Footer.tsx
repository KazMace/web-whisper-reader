
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-[0.02]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white text-xl font-display font-medium mb-5">Christina Hutchings</h3>
            <p className="mb-2 opacity-90">MBACP Registered</p>
            <p className="opacity-90">Counsellor, Psychotherapist and Clinical Supervisor</p>
            <div className="mt-6 flex items-center">
              <img 
                src="/lovable-uploads/62e8f537-2d5e-466d-9d25-81bece9f2bdc.png" 
                alt="Professional Standards Authority Accredited Register & BACP Registered Member" 
                className="h-14 object-contain"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-display font-medium mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 opacity-90">
                <MapPin className="h-5 w-5 mt-0.5 text-white/80" />
                <span>Morchard Bishop, Devon, UK</span>
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <Phone className="h-5 w-5 text-white/80" />
                <a href="tel:+447890624645" className="hover:text-white transition-colors">
                  07890 624645
                </a>
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <Mail className="h-5 w-5 text-white/80" />
                <a href="mailto:Christina_Hutchings@hotmail.com" className="hover:text-white transition-colors">
                  Christina_Hutchings@hotmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-display font-medium mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 hover:text-white transition-colors inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 hover:text-white transition-colors inline-block">About</Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 hover:text-white transition-colors inline-block">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 hover:text-white transition-colors inline-block">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-8 text-sm text-center md:flex md:justify-between opacity-80">
          <p>© {currentYear} Christina Hutchings. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
