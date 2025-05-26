
import { useState, useEffect } from 'react';

interface EventCountdownProps {
  targetDate: string;
}

const EventCountdown = ({ targetDate }: EventCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;
      
      if (distance < 0) {
        // Event has started/passed
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        // Calculate time left
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 mb-8">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div 
          key={label} 
          className="flex flex-col items-center bg-enigma-purple/40 backdrop-blur-sm rounded-lg border border-enigma-purple/60 px-4 py-3 min-w-[80px]"
        >
          <div className="text-2xl font-bold text-white mb-1">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase text-gray-300 tracking-wider">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCountdown;
