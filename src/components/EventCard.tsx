
import { Book, Clock, Calendar, Trophy, Users, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface EventProps {
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
}

const iconMapping = {
  ribbon: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  camera: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  video: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  scissors: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  computer: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  gamepad: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  mapPin: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  microphone: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  calendar: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  trophy: <Trophy className="h-8 w-8 text-moonstone-pink" />,
  canva: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  food: <Calendar className="h-8 w-8 text-moonstone-pink" />,
  quiz: <Book className="h-8 w-8 text-moonstone-pink" />,
};

const EventCard: React.FC<EventProps> = ({
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
    <div className="event-card rounded-xl p-6 overflow-hidden relative transition group">
      <div className="absolute inset-0 bg-gradient-to-r from-moonstone-pink/10 to-moonstone-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-moonstone-purple/40 p-3 backdrop-blur-sm">
          {iconMapping[icon]}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <Badge 
              className={`${openToAll ? 'bg-moonstone-teal hover:bg-moonstone-teal/90' : 'bg-moonstone-pink hover:bg-moonstone-pink/90'} text-white`}
            >
              {openToAll ? 'Open to All' : 'Restricted'}
            </Badge>
          </div>
          
          {description && <p className="text-gray-300 text-sm mb-3">{description}</p>}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4">
            <div className="flex items-center text-sm text-gray-300">
              <Clock size={16} className="mr-2 text-moonstone-pink" />
              <span>{time}</span>
            </div>
            
            {date && (
              <div className="flex items-center text-sm text-gray-300">
                <Calendar size={16} className="mr-2 text-moonstone-pink" />
                <span>{date}</span>
              </div>
            )}
            
            {type && (
              <div className="flex items-center text-sm text-gray-300">
                <Book size={16} className="mr-2 text-moonstone-pink" />
                <span>{type}</span>
              </div>
            )}
            
            {mode && (
              <div className="flex items-center text-sm text-gray-300">
                <Calendar size={16} className="mr-2 text-moonstone-pink" />
                <span>{mode}</span>
              </div>
            )}
            
            {team && (
              <div className="flex items-center text-sm text-gray-300">
                <Users size={16} className="mr-2 text-moonstone-pink" />
                <span>{team}</span>
              </div>
            )}
            
            {regFee && (
              <div className="flex items-center text-sm text-gray-300">
                <DollarSign size={16} className="mr-2 text-moonstone-pink" />
                <span>{regFee}</span>
              </div>
            )}
            
            {prize && (
              <div className="flex items-center text-sm text-gray-300">
                <Trophy size={16} className="mr-2 text-moonstone-pink" />
                <span>{prize}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
