
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const Schedule = () => {
  const day1Schedule = [
    { time: "9:30 AM", event: "Ribbon Cutting Ceremony", location: "Main Entrance" },
    { time: "10:00 AM - 11:30 AM", event: "Talents Day (BCA Only)", location: "Auditorium" },
    { time: "10:00 AM - 2:00 PM", event: "Video Shoot Competition (SDM Only)", location: "Campus Grounds" },
    { time: "10:45 AM - 1:15 PM", event: "Craft Competition (SDM Only)", location: "Creative Arts Room" },
    { time: "12:00 PM", event: "Hackathon: Tech for Tomorrow (Kickoff)", location: "Online via Google Meet" },
    { time: "1:30 PM - 3:00 PM", event: "Free Fire Tournament (SDM Only)", location: "Gaming Lab" },
    { time: "3:00 PM onwards", event: "Treasure Hunt (BCA Only)", location: "Entire Campus" }
  ];

  const day2Schedule = [
    { time: "9:00 AM - 2:30 PM", event: "Photography Contest", location: "Campus Grounds" },
    { time: "10:00 AM - 3:00 PM", event: "Hackathon (Build Phase)", location: "Computer Lab" },
    { time: "10:30 AM - 3:00 PM", event: "Quiz Competition", location: "Seminar Hall" },
    { time: "10:30 AM - 1:30 PM", event: "Canva Design Challenge", location: "Digital Arts Lab" },
    { time: "11:00 AM - 5:00 PM", event: "Game Stalls", location: "College Grounds" },
    { time: "11:00 AM - 5:00 PM", event: "Food Stalls", location: "Food Court Area" },
    { time: "4:00 PM - 5:00 PM", event: "Award Ceremony", location: "Main Stage" }
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Event Schedule</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Plan your two days at ENIGMA* Fest with our comprehensive schedule of all events and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Day 1 Schedule */}
          <div>
            <div className="mb-6 flex items-center">
              <Calendar className="mr-3 text-enigma-pink" size={24} />
              <h2 className="text-2xl font-bold text-white">Day 1: May 29, 2025</h2>
            </div>

            <motion.ul 
              className="relative border-l border-enigma-pink/30 ml-3 space-y-8"
              variants={timelineVariants}
              initial="hidden"
              animate="show"
            >
              {day1Schedule.map((item, index) => (
                <motion.li key={index} className="ml-6" variants={itemVariants}>
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-enigma-pink rounded-full -left-3">
                    <Clock size={12} className="text-white" />
                  </span>
                  <div className="event-card p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.event}</h3>
                    <p className="text-enigma-pink text-sm mb-1">{item.time}</p>
                    <p className="text-gray-400 text-sm">{item.location}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Day 2 Schedule */}
          <div>
            <div className="mb-6 flex items-center">
              <Calendar className="mr-3 text-enigma-teal" size={24} />
              <h2 className="text-2xl font-bold text-white">Day 2: May 30, 2025</h2>
            </div>

            <motion.ul 
              className="relative border-l border-enigma-teal/30 ml-3 space-y-8"
              variants={timelineVariants}
              initial="hidden"
              animate="show"
            >
              {day2Schedule.map((item, index) => (
                <motion.li key={index} className="ml-6" variants={itemVariants}>
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-enigma-teal rounded-full -left-3">
                    <Clock size={12} className="text-white" />
                  </span>
                  <div className="event-card p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.event}</h3>
                    <p className="text-enigma-teal text-sm mb-1">{item.time}</p>
                    <p className="text-gray-400 text-sm">{item.location}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-16 bg-enigma-purple/20 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Important Notes:</h3>
          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>All participants must register before the events.</li>
            <li>Arrive at least 15 minutes before the scheduled time for each event.</li>
            <li>Events marked as "SDM Only" or "BCA Only" are restricted to those specific department students.</li>
            <li>ID cards are required for entry to all events.</li>
            <li>For team events, all team members must be present during registration.</li>
            <li>Schedule is subject to minor changes. Please check back for any updates.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
