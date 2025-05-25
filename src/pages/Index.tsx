
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getFeaturedEvents } from "@/utils/eventUtils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const highlightedEvents = getFeaturedEvents();

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Events</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of our highlighted events for this year's fest. Don't miss these exciting opportunities!
            </p>
          </motion.div>

          <div className="mb-12">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="py-4">
                {highlightedEvents.map((event, index) => (
                  <CarouselItem key={event.id || index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="h-full p-1">
                      <EventCard {...event} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex items-center justify-center mt-4">
                <CarouselPrevious className="relative -left-0 mr-2 bg-enigma-purple/30 border-enigma-pink/50 text-white hover:bg-enigma-purple/50" />
                <CarouselNext className="relative -right-0 ml-2 bg-enigma-purple/30 border-enigma-pink/50 text-white hover:bg-enigma-purple/50" />
              </div>
            </Carousel>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/events">
                <Button 
                  variant="outline" 
                  className="border border-enigma-pink/50 text-white hover:border-enigma-pink hover:bg-enigma-pink/10"
                >
                  View All Events
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-enigma-purple/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About ENIGMA*</h2>
              <p className="text-gray-300 mb-6">
                ENIGMA* is the annual technical festival of BCA Department at SDM College, bringing together students from all over the uttar kannada region to showcase their talents, skills, and creativity.
              </p>
              <p className="text-gray-300 mb-6">
                For two exciting days, our campus transforms into a hub of activities, competitions, and fun. From technical events like hackathons to cultural showcases, ENIGMA* has something for everyone.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/about">
                  <Button
                    variant="default"
                    className="bg-gradient-to-r from-enigma-pink to-enigma-teal text-white rounded-md hover:shadow-lg hover:shadow-enigma-pink/20"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl shadow-enigma-purple/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 25px -5px rgba(255, 47, 142, 0.1), 0 10px 10px -5px rgba(255, 47, 142, 0.04)"
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1662&q=80" 
                alt="College Fest" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-enigma-pink/30 to-enigma-teal/30 opacity-20"></div>
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Fun?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Don't miss out on the biggest college fest of the year. Register now to participate in our exciting events and competitions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/register">
                <Button
                  className="bg-gradient-to-r from-enigma-pink to-enigma-teal text-white px-8 py-6 rounded-md hover:shadow-lg hover:shadow-enigma-pink/20 transition-all duration-300 text-lg"
                >
                  Register Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
