
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Christina Hutchings</h3>
            <p className="mb-2">MBACP Registered</p>
            <p>Counsellor, Psychotherapist and Clinical Supervisor</p>
            <div className="mt-4 flex items-center">
              <img 
                src="/lovable-uploads/62e8f537-2d5e-466d-9d25-81bece9f2bdc.png" 
                alt="Professional Standards Authority Accredited Register & BACP Registered Member" 
                className="h-12 object-contain"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contact</h3>
            <p className="mb-2">Devon, UK</p>
            <p className="mb-2">
              <a href="tel:+447890624645" className="hover:text-white transition-colors">
                07890 624645
              </a>
            </p>
            <p>
              <a href="mailto:christina@christinahutchings.uk" className="hover:text-white transition-colors">
                christina@christinahutchings.uk
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center md:flex md:justify-between">
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
