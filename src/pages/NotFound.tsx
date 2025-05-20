
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-enigma-pink mb-4">404</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-enigma-pink to-enigma-teal mx-auto mb-6"></div>
        <p className="text-xl text-white mb-8">Oops! Page not found</p>
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button 
            className="bg-gradient-to-r from-enigma-pink to-enigma-teal text-white"
          >
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
