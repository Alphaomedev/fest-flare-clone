
import { Book, Clock, Calendar, Trophy, Users, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Organizer {
  id: string;
  name: string;
  phone: string;
  initials: string;
  image?: string;
}
export interface EventProps {
  id?: string;
  title: string;
  time: string;
  date?: string;
  type?: string;
  mode?: string;
  team?: string;
  regFee?: string;
  prize?: string;
  openToAll: boolean;
  icon: keyof typeof iconMapping;
  description?: string;
  detailedDescription?: string;
  organizers?: Organizer[];
}

const iconMapping = {
  ribbon: <Calendar className="h-8 w-8 text-enigma-pink" />,
  camera: <Calendar className="h-8 w-8 text-enigma-pink" />,
  video: <Calendar className="h-8 w-8 text-enigma-pink" />,
  scissors: <Calendar className="h-8 w-8 text-enigma-pink" />,
  computer: <Calendar className="h-8 w-8 text-enigma-pink" />,
  gamepad: <Calendar className="h-8 w-8 text-enigma-pink" />,
  mapPin: <Calendar className="h-8 w-8 text-enigma-pink" />,
  microphone: <Calendar className="h-8 w-8 text-enigma-pink" />,
  calendar: <Calendar className="h-8 w-8 text-enigma-pink" />,
  trophy: <Trophy className="h-8 w-8 text-enigma-pink" />,
  canva: <Calendar className="h-8 w-8 text-enigma-pink" />,
  food: <Calendar className="h-8 w-8 text-enigma-pink" />,
  quiz: <Book className="h-8 w-8 text-enigma-pink" />,
};

const EventCard: React.FC<EventProps> = ({
  id,
  title,
  time,
  date,
  type,
  mode,
  team,
  regFee,
  prize,
  openToAll,
  icon,
  description
}) => {
  return (
    <Link to={`/event/${id}`} className="block">
      <div className="event-card rounded-xl p-6 overflow-hidden relative transition group hover:scale-[1.02] duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-enigma-pink/10 to-enigma-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-enigma-purple/40 p-3 backdrop-blur-sm">
            {iconMapping[icon]}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <Badge 
                className={`${openToAll ? 'bg-enigma-teal hover:bg-enigma-teal/90' : 'bg-enigma-pink hover:bg-enigma-pink/90'} text-white`}
              >
                {openToAll ? 'Open to All' : 'Restricted'}
              </Badge>
            </div>
            
            {description && <p className="text-gray-300 text-sm mb-3">{description}</p>}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4">
              <div className="flex items-center text-sm text-gray-300">
                <Clock size={16} className="mr-2 text-enigma-pink" />
                <span>{time}</span>
              </div>
              
              {date && (
                <div className="flex items-center text-sm text-gray-300">
                  <Calendar size={16} className="mr-2 text-enigma-pink" />
                  <span>{date}</span>
                </div>
              )}
              
              {type && (
                <div className="flex items-center text-sm text-gray-300">
                  <Book size={16} className="mr-2 text-enigma-pink" />
                  <span>{type}</span>
                </div>
              )}
              
              {mode && (
                <div className="flex items-center text-sm text-gray-300">
                  <Calendar size={16} className="mr-2 text-enigma-pink" />
                  <span>{mode}</span>
                </div>
              )}
              
              {team && (
                <div className="flex items-center text-sm text-gray-300">
                  <Users size={16} className="mr-2 text-enigma-pink" />
                  <span>{team}</span>
                </div>
              )}
              
              {regFee && (
                <div className="flex items-center text-sm text-gray-300">
                  <DollarSign size={16} className="mr-2 text-enigma-pink" />
                  <span>{regFee}</span>
                </div>
              )}
              
              {prize && (
                <div className="flex items-center text-sm text-gray-300">
                  <Trophy size={16} className="mr-2 text-enigma-pink" />
                  <span>{prize}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
