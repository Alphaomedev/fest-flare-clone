
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Book, 
  Clock, 
  Calendar, 
  Trophy, 
  Users, 
  DollarSign, 
  ArrowLeft,
  MapPin
} from 'lucide-react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { getEventById } from "@/utils/eventUtils";
import { EventProps } from "@/components/EventCard";
import { Skeleton } from "@/components/ui/skeleton";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Small delay to simulate data fetching
      const timer = setTimeout(() => {
        const foundEvent = getEventById(id);
        setEvent(foundEvent);
        setLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full mb-8" />
            <Skeleton className="h-[300px] w-full mb-8 rounded-xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-moonstone-pink mb-4">Event Not Found</h1>
          <p className="text-gray-300 mb-6">Sorry, we couldn't find the event you're looking for.</p>
          <Link to="/events">
            <Button className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white">
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/events" className="inline-flex items-center text-moonstone-pink hover:text-moonstone-teal mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Events
          </Link>

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{event.title}</h1>
            <Badge 
              className={`${event.openToAll ? 'bg-moonstone-teal hover:bg-moonstone-teal/90' : 'bg-moonstone-pink hover:bg-moonstone-pink/90'} text-white`}
            >
              {event.openToAll ? 'Open to All' : 'Restricted'}
            </Badge>
          </div>
          
          {/* Event banner/image */}
          <div className="mb-8 rounded-xl overflow-hidden bg-gradient-to-r from-moonstone-pink/10 to-moonstone-teal/10 p-10 flex items-center justify-center">
            <div className="rounded-full bg-moonstone-purple/40 p-6 backdrop-blur-sm">
              {/* Use larger icon here */}
              <Calendar className="h-24 w-24 text-moonstone-pink" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card className="bg-moonstone-purple/30 border-moonstone-purple/40">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Event Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-moonstone-pink mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium text-white">Time:</span>
                      <p className="text-gray-300">{event.time}</p>
                    </div>
                  </li>
                  
                  {event.date && (
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-moonstone-pink mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium text-white">Date:</span>
                        <p className="text-gray-300">{event.date}</p>
                      </div>
                    </li>
                  )}
                  
                  {event.mode && (
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-moonstone-pink mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium text-white">Mode:</span>
                        <p className="text-gray-300">{event.mode}</p>
                      </div>
                    </li>
                  )}
                  
                  {event.type && (
                    <li className="flex items-start">
                      <Book className="h-5 w-5 text-moonstone-pink mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium text-white">Type:</span>
                        <p className="text-gray-300">{event.type}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-moonstone-purple/30 border-moonstone-purple/40">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Participation Info</h3>
                <ul className="space-y-4">
                  {event.team && (
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-moonstone-pink mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium text-white">Team Size:</span>
                        <p className="text-gray-300">{event.team}</p>
                      </div>
                    </li>
                  )}
                  
                  {event.regFee && (
                    <li className="flex items-start">
                      <DollarSign className="h-5 w-5 text-moonstone-pink mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium text-white">Registration Fee:</span>
                        <p className="text-gray-300">{event.regFee}</p>
                      </div>
                    </li>
                  )}
                  
                  {event.prize && (
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-moonstone-pink mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium text-white">Prize:</span>
                        <p className="text-gray-300">{event.prize}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Event Description */}
          {event.description && (
            <Card className="bg-moonstone-purple/30 border-moonstone-purple/40 mb-10">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                <p className="text-gray-300">{event.description}</p>
              </CardContent>
            </Card>
          )}

          {/* Registration CTA */}
          <div className="text-center bg-gradient-to-r from-moonstone-pink/10 to-moonstone-teal/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Participate?</h3>
            <p className="text-gray-300 mb-6">
              Register now to participate in this exciting event and showcase your talent at MOONSTONE Fest!
            </p>
            <Link to="/register">
              <Button 
                className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white px-6 py-2 rounded-md hover:shadow-lg hover:shadow-moonstone-pink/20"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetail;
