
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'border-b'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-primary">Christina Hutchings</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-[62px] z-50 bg-white animate-in">
                <nav className="container mx-auto px-4 py-8">
                  <ul className="flex flex-col space-y-6">
                    {menuItems.map((item) => (
                      <li key={item.name} className="text-center">
                        <Link 
                          to={item.path} 
                          className={`text-lg font-medium transition-colors ${location.pathname === item.path ? 'text-primary' : 'hover:text-primary'}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-4">
                      <Button asChild className="w-full">
                        <Link to="/contact">Book a Session</Link>
                      </Button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav>
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-primary' : 'hover:text-primary'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button asChild>
                  <Link to="/contact">Book a Session</Link>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
