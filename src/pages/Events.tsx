
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { getDay1Events, getDay2Events } from "@/utils/eventUtils";

const Events = () => {
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");

  const day1Events = getDay1Events();
  const day2Events = getDay2Events();

  const filteredDay1 = filter === "all" 
    ? day1Events 
    : filter === "open" 
      ? day1Events.filter(event => event.openToAll) 
      : day1Events.filter(event => !event.openToAll);

  const filteredDay2 = filter === "all" 
    ? day2Events 
    : filter === "open" 
      ? day2Events.filter(event => event.openToAll) 
      : day2Events.filter(event => !event.openToAll);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore all the exciting events happening during our two-day festival. From competitions to performances, there's something for everyone!
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-enigma-purple/20 backdrop-blur-sm p-1 rounded-lg flex">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === "all" ? "bg-enigma-purple text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              All Events
            </button>
            <button 
              onClick={() => setFilter("open")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === "open" ? "bg-enigma-teal text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Open to All
            </button>
            <button 
              onClick={() => setFilter("closed")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === "closed" ? "bg-enigma-pink text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Restricted Events
            </button>
          </div>
        </div>
        
        {/* Events Tabs */}
        <Tabs defaultValue="day1" className="mb-12">
          <TabsList className="w-full bg-enigma-purple/20 backdrop-blur-sm justify-center mb-6">
            <TabsTrigger value="day1" className="data-[state=active]:bg-enigma-pink data-[state=active]:text-white">
              Day 1 Events
            </TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-enigma-teal data-[state=active]:text-white">
              Day 2 Events
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="day1" className="mt-0">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Day 1: May 27, 2025</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDay1.map((event, index) => (
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

            {filteredDay1.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No events match your current filter. Please try another filter.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="day2" className="mt-0">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Day 2: May 28, 2025</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDay2.map((event, index) => (
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

            {filteredDay2.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No events match your current filter. Please try another filter.
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Registration CTA */}
        <div className="text-center bg-gradient-to-r from-enigma-pink/10 to-enigma-teal/10 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Participate?</h3>
          <p className="text-gray-300 mb-6">
            Register now to participate in these exciting events and make the most of ENIGMA* Fest!
          </p>
          <Link to="/register">
            <Button 
              className="bg-gradient-to-r from-enigma-pink to-enigma-teal text-white px-6 py-2 rounded-md hover:shadow-lg hover:shadow-enigma-pink/20"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
