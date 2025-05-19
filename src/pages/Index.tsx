
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getFeaturedEvents } from "@/utils/eventUtils";

const Index = () => {
  const highlightedEvents = getFeaturedEvents();

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Events</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of our highlighted events for this year's fest. Don't miss these exciting opportunities!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {highlightedEvents.map((event, index) => (
              <motion.div
                key={event.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <Button 
                variant="outline" 
                className="border border-moonstone-pink/50 text-white hover:border-moonstone-pink hover:bg-moonstone-pink/10"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-moonstone-purple/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About MOONSTONE</h2>
              <p className="text-gray-300 mb-6">
                MOONSTONE is the annual cultural and technical festival of SDM College, bringing together students from all over the region to showcase their talents, skills, and creativity.
              </p>
              <p className="text-gray-300 mb-6">
                For two exciting days, our campus transforms into a hub of activities, competitions, and fun. From technical events like hackathons to cultural showcases, MOONSTONE has something for everyone.
              </p>
              <Link to="/about">
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white rounded-md hover:shadow-lg hover:shadow-moonstone-pink/20"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl shadow-moonstone-purple/20">
              <img 
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1662&q=80" 
                alt="College Fest" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-moonstone-pink/30 to-moonstone-teal/30 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Fun?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Don't miss out on the biggest college fest of the year. Register now to participate in our exciting events and competitions.
            </p>
            <Link to="/register">
              <Button
                className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white px-8 py-6 rounded-md hover:shadow-lg hover:shadow-moonstone-pink/20 transition-all duration-300 text-lg"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
