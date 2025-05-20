
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-enigma-dark border-t border-enigma-purple/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="text-3xl font-bold text-white mb-4">
              MOON<span className="text-enigma-pink">STONE</span>
            </div>
            <p className="text-gray-400 mb-6">
              The biggest college fest of the year. Two days of competitions, fun activities, and amazing experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-white/70 hover:text-enigma-pink transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-white/70 hover:text-enigma-pink transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-white/70 hover:text-enigma-pink transition-colors">
                <Twitter size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Events', 'Schedule', 'Register', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-enigma-pink transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Events</h3>
            <ul className="space-y-3">
              {['Hackathon', 'Quiz Competition', 'Photography Contest', 'Canva Challenge', 'Game Stalls', 'Food Festival'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/events"
                    className="text-gray-400 hover:text-enigma-pink transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-enigma-pink mt-1 mr-3" />
                <span className="text-gray-400">SDM College Campus, College Road, Main Street, City, State 123456</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-enigma-pink mt-1 mr-3" />
                <span className="text-gray-400">info@enigma.edu</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-enigma-pink mt-1 mr-3" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-enigma-purple/20 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ENIGMA* Festival. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
