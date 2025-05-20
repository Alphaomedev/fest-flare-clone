
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';
import { motion } from 'framer-motion';
import { Star, Music, Code, Trophy, Camera, Zap, Sparkles, Heart, Gift, Award } from 'lucide-react';

const HeroSection = () => {
  const floatingIcons = [Star, Music, Code, Trophy, Camera, Zap, Sparkles, Heart, Gift, Award];
  
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-moonstone-pink/20 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-moonstone-teal/20 blur-[120px] animate-pulse-glow"></div>
        <motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-moonstone-purple/20 blur-[150px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        ></motion.div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {floatingIcons.map((Icon, index) => (
          <motion.div 
            key={index}
            className="absolute text-moonstone-teal/30"
            initial={{ 
              x: Math.random() * 100 - 50, 
              y: Math.random() * 100 - 50,
              scale: 0.5 + Math.random() * 1.5,
              rotate: Math.random() * 360
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
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8]
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
            <Icon 
              size={24 + Math.random() * 24} 
              className="transition-colors duration-1000"
              style={{ 
                filter: "drop-shadow(0 0 8px rgba(89, 216, 255, 0.3))"
              }}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Shooting Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-px bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 80}px`,
            transformOrigin: 'left',
            zIndex: 1,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: [-10, 100],
            y: [-10, 100],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            repeatDelay: 10 + Math.random() * 20,
            ease: 'easeOut',
          }}
        />
      ))}
      
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
              animate={{ 
                scale: [1, 1.02, 1],
                textShadow: [
                  "0 0 7px rgba(89, 216, 255, 0.6)",
                  "0 0 10px rgba(89, 216, 255, 0.8)",
                  "0 0 7px rgba(89, 216, 255, 0.6)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              MOONSTONE
            </motion.span>
            <motion.span 
              className="block mt-2 bg-gradient-to-r from-moonstone-pink to-moonstone-teal bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              COLLEGE FEST 2025
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span 
              className="inline-block"
              whileInView={{
                color: ["#a1a1aa", "#ffffff", "#a1a1aa"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Two days of competitions, fun activities, and amazing experiences.
            </motion.span>{" "}
            Join us on May 20-21, 2025 for the biggest college event of the year.
          </motion.p>
          
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CountdownTimer />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link to="/register">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.97 }}
                initial={{ boxShadow: "0 0 0 rgba(255, 47, 142, 0)" }}
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(255, 47, 142, 0.5)",
                  transition: { duration: 0.2 }
                }}
              >
                <Button 
                  className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white px-8 py-6 rounded-md hover:shadow-lg hover:shadow-moonstone-pink/20 transition-all duration-300 text-lg"
                >
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Register Now
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
            <Link to="/events">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.97 }}
                initial={{ boxShadow: "0 0 0 rgba(255, 47, 142, 0)" }}
                whileHover={{ 
                  boxShadow: "0 0 15px rgba(255, 47, 142, 0.2)",
                  transition: { duration: 0.2 }
                }}
              >
                <Button 
                  variant="outline" 
                  className="bg-transparent border border-moonstone-pink/50 text-white px-8 py-6 rounded-md hover:border-moonstone-pink hover:bg-moonstone-pink/10 transition-all duration-300 text-lg relative group"
                >
                  <motion.span
                    className="relative z-10"
                    animate={{ color: ["#fff", "#fff"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Explore Events
                  </motion.span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-moonstone-pink/0 to-moonstone-teal/0 rounded-md opacity-0 group-hover:opacity-10"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
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
