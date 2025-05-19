
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-moonstone-pink/20 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-moonstone-teal/20 blur-[120px] animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block glow-text-teal">MOONSTONE</span>
            <span className="block mt-2 bg-gradient-to-r from-moonstone-pink to-moonstone-teal bg-clip-text text-transparent">COLLEGE FEST 2025</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Two days of competitions, fun activities, and amazing experiences. Join us on May 20-21, 2025 for the biggest college event of the year.
          </p>
          
          <div className="mb-10">
            <CountdownTimer />
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register">
              <Button 
                className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white px-8 py-6 rounded-md hover:shadow-lg hover:shadow-moonstone-pink/20 transition-all duration-300 text-lg"
              >
                Register Now
              </Button>
            </Link>
            <Link to="/events">
              <Button 
                variant="outline" 
                className="bg-transparent border border-moonstone-pink/50 text-white px-8 py-6 rounded-md hover:border-moonstone-pink hover:bg-moonstone-pink/10 transition-all duration-300 text-lg"
              >
                Explore Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
