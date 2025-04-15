
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white border-b py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-display font-semibold text-primary">Christina Hutchings</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" className="text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-[62px] z-50 bg-gray-800 text-white animate-in">
                <nav className="container mx-auto px-4 py-8">
                  <ul className="flex flex-col space-y-6">
                    {menuItems.map((item) => (
                      <li key={item.name} className="text-center">
                        <Link 
                          to={item.path} 
                          className={`text-lg font-medium transition-colors relative ${
                            location.pathname === item.path 
                              ? 'text-primary after:content-[""] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-primary' 
                              : 'text-white hover:text-primary'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-4">
                      <Button asChild className="w-full rounded-full">
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
                    className={`text-sm font-medium transition-colors relative ${
                      location.pathname === item.path 
                        ? 'text-primary after:content-[""] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-primary' 
                        : 'hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button asChild className="rounded-full">
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
