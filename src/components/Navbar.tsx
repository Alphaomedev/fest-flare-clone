
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'py-3 bg-enigma-dark/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'
  }`;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white uppercase tracking-wider">
            MOON<span className="text-enigma-pink">STONE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase font-medium tracking-wider transition-colors duration-300 hover:text-enigma-pink ${
                location.pathname === link.path ? 'text-enigma-pink' : 'text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/register">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-enigma-pink to-enigma-teal text-white rounded-md hover:shadow-lg hover:shadow-enigma-pink/20 transition-all duration-300"
            >
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-enigma-dark/95 backdrop-blur-lg absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase font-medium tracking-wider py-2 transition-colors duration-300 hover:text-enigma-pink ${
                  location.pathname === link.path ? 'text-enigma-pink' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/register" className="py-2">
              <Button 
                variant="default" 
                className="w-full bg-gradient-to-r from-enigma-pink to-enigma-teal text-white rounded-md"
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
