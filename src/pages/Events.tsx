
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EventCard, { EventProps } from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Events = () => {
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");

  const day1Events: EventProps[] = [
    {
      title: "Ribbon Cutting Ceremony",
      time: "9:30 AM",
      type: "Formal",
      openToAll: true,
      icon: "ribbon",
      description: "The official inauguration ceremony of the fest.",
    },
    {
      title: "Talents Day",
      time: "10:00 AM – 11:30 AM",
      mode: "Offline",
      team: "Solo/Group",
      openToAll: false,
      icon: "microphone",
      description: "BCA Students Only - Showcase your talent through dance, music, or any performing art.",
    },
    {
      title: "Video Shoot Competition",
      time: "10:00 AM – 2:00 PM",
      mode: "Offline",
      team: "2 members",
      regFee: "₹50/team",
      prize: "₹500",
      openToAll: false,
      icon: "video",
      description: "SDM Students Only - Create a short video showcasing SDM college.",
    },
    {
      title: "Craft Competition",
      time: "10:45 AM – 1:15 PM",
      mode: "Offline",
      team: "Solo or Team",
      regFee: "₹30",
      prize: "Gift hamper",
      openToAll: false,
      icon: "scissors",
      description: "SDM Students Only - Create art using recycled materials or festive decorations.",
    },
    {
      title: "Hackathon: Tech for Tomorrow",
      time: "12:00 AM (Online via Google Meet)",
      mode: "Online & Offline",
      team: "1-4 members",
      regFee: "₹250/team",
      prize: "₹3000 + Certificates",
      openToAll: true,
      icon: "computer",
      description: "Day 1 Ideation - Develop tech solutions for chosen themes.",
    },
    {
      title: "Free Fire Tournament",
      time: "1:30 PM – 3:00 PM",
      team: "Squad of 4",
      regFee: "₹100/team",
      prize: "₹2000 + Trophy",
      openToAll: false,
      icon: "gamepad",
      description: "SDM Students Only - Battle in teams in this exciting esports tournament.",
    },
    {
      title: "Treasure Hunt",
      time: "3:00 PM onwards",
      team: "6 members",
      openToAll: false,
      icon: "mapPin",
      description: "BCA Students Only - Follow clues around campus to find the hidden treasure.",
    },
  ];

  const day2Events: EventProps[] = [
    {
      title: "Formal Inauguration",
      time: "9:30 AM – 10:00 AM",
      openToAll: true,
      icon: "microphone",
      description: "The official opening ceremony for the main day of the fest.",
    },
    {
      title: "Photography Contest",
      time: "9:00 AM – 2:30 PM",
      regFee: "₹50",
      prize: "₹500 + Insta Feature",
      openToAll: true,
      icon: "camera",
      description: "Capture the essence of the fest through your lens.",
    },
    {
      title: "Hackathon (Build Phase)",
      time: "10:00 AM – 3:00 PM",
      openToAll: true,
      icon: "computer",
      description: "Day 2 Build Phase - Implement your solutions and prepare for final presentations.",
    },
    {
      title: "Quiz Competition",
      time: "10:30 AM – 3:00 PM",
      team: "2 members",
      regFee: "₹30/team",
      prize: "₹1000 + Certificates",
      openToAll: true,
      icon: "quiz",
      description: "Test your knowledge across various categories in this exciting quiz.",
    },
    {
      title: "Canva Design Challenge",
      time: "10:30 AM – 1:30 PM",
      team: "2 members",
      regFee: "₹50/team",
      prize: "₹500 + Certificates",
      openToAll: true,
      icon: "canva",
      description: "Showcase your graphic design skills using Canva.",
    },
    {
      title: "Game Stalls",
      time: "Throughout Day 2",
      regFee: "₹10-₹30 per game",
      openToAll: true,
      icon: "gamepad",
      description: "Enjoy various fun games and activities throughout the day.",
    },
    {
      title: "Food Stalls",
      time: "All Day",
      openToAll: true,
      icon: "food",
      description: "A variety of food options available throughout the day.",
    },
  ];

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
          <div className="bg-moonstone-purple/20 backdrop-blur-sm p-1 rounded-lg flex">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === "all" ? "bg-moonstone-purple text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              All Events
            </button>
            <button 
              onClick={() => setFilter("open")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === "open" ? "bg-moonstone-teal text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Open to All
            </button>
            <button 
              onClick={() => setFilter("closed")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === "closed" ? "bg-moonstone-pink text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Restricted Events
            </button>
          </div>
        </div>
        
        {/* Events Tabs */}
        <Tabs defaultValue="day1" className="mb-12">
          <TabsList className="w-full bg-moonstone-purple/20 backdrop-blur-sm justify-center mb-6">
            <TabsTrigger value="day1" className="data-[state=active]:bg-moonstone-pink data-[state=active]:text-white">
              Day 1 Events
            </TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-moonstone-teal data-[state=active]:text-white">
              Day 2 Events
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="day1" className="mt-0">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Day 1: May 20, 2025</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDay1.map((event, index) => (
                <motion.div 
                  key={index}
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
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Day 2: May 21, 2025</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDay2.map((event, index) => (
                <motion.div 
                  key={index}
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
        <div className="text-center bg-gradient-to-r from-moonstone-pink/10 to-moonstone-teal/10 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Participate?</h3>
          <p className="text-gray-300 mb-6">
            Register now to participate in these exciting events and make the most of MOONSTONE Fest!
          </p>
          <Link to="/register">
            <Button 
              className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white px-6 py-2 rounded-md hover:shadow-lg hover:shadow-moonstone-pink/20"
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
