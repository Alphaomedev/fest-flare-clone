
import { Users, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Organizer {
  id: string;
  name: string;
  phone: string;
  initials: string;
  image?: string;
}

interface EventOrganizersProps {
  organizers?: Organizer[];
}

const EventOrganizers = ({ organizers }: EventOrganizersProps) => {
  // Default organizers if none provided
  const defaultOrganizers: Organizer[] = [
    {
      id: "1",
      name: "Ravi devadiga",
      phone: "+91 87228 46337", 
      initials: "RD",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "2", 
      name: "Abhishek naik",
      phone: "+91 734 901 7610",
      initials: "AB",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const displayOrganizers = organizers || defaultOrganizers;

  return (
    <Card className="bg-enigma-purple/30 border-enigma-purple/40">
      <CardContent className="pt-6">
        <div className="flex items-center mb-6">
          <Users className="h-6 w-6 text-enigma-pink mr-2" />
          <h3 className="text-xl font-semibold text-white">Event Organizers</h3>
        </div>
        
        <div className="space-y-4">
          {displayOrganizers.map((organizer) => (
            <div 
              key={organizer.id}
              className="flex items-center p-4 bg-enigma-purple/20 rounded-lg border border-enigma-purple/30"
            >
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={organizer.image} alt={organizer.name} />
                <AvatarFallback className="bg-enigma-pink text-white font-semibold">
                  {organizer.initials}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h4 className="font-medium text-white">{organizer.name}</h4>
                <div className="flex items-center mt-1">
                  <Phone className="h-4 w-4 text-enigma-teal mr-2" />
                  <span className="text-gray-300 text-sm">{organizer.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventOrganizers;
export type { Organizer };
