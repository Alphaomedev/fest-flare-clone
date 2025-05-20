
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';
import { motion } from 'framer-motion';
import { Star, Music, Code, Trophy, Camera, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-moonstone-pink/20 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-moonstone-teal/20 blur-[120px] animate-pulse-glow"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[Star, Music, Code, Trophy, Camera, Zap].map((Icon, index) => (
          <motion.div 
            key={index}
            className="absolute text-moonstone-teal/30"
            initial={{ 
              x: Math.random() * 100 - 50, 
              y: Math.random() * 100 - 50,
              scale: 0.5 + Math.random() * 1.5
            }}
            animate={{ 
              x: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50
              ],
              y: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50
              ],
              rotate: [0, 45, -45, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 15 + Math.random() * 20,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          >
            <Icon size={24 + Math.random() * 24} />
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="block glow-text-teal"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              MOONSTONE
            </motion.span>
            <span className="block mt-2 bg-gradient-to-r from-moonstone-pink to-moonstone-teal bg-clip-text text-transparent">COLLEGE FEST 2025</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Two days of competitions, fun activities, and amazing experiences. Join us on May 20-21, 2025 for the biggest college event of the year.
          </motion.p>
          
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CountdownTimer />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link to="/register">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button 
                  className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white px-8 py-6 rounded-md hover:shadow-lg hover:shadow-moonstone-pink/20 transition-all duration-300 text-lg"
                >
                  Register Now
                </Button>
              </motion.div>
            </Link>
            <Link to="/events">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button 
                  variant="outline" 
                  className="bg-transparent border border-moonstone-pink/50 text-white px-8 py-6 rounded-md hover:border-moonstone-pink hover:bg-moonstone-pink/10 transition-all duration-300 text-lg"
                >
                  Explore Events
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
