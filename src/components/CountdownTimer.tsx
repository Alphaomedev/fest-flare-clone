
import { useState, useEffect } from 'react';

// Set the festival date (May 27, 2025)
const FEST_DATE = new Date('2025-05-27T09:00:00').getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = FEST_DATE - now;
      
      if (distance < 0) {
        // Festival has started
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
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div 
          key={label} 
          className="flex flex-col items-center bg-enigma-purple/30 backdrop-blur-sm rounded-lg border border-enigma-purple/40 px-3 sm:px-5 py-3 min-w-[90px]"
        >
          <div className="text-2xl sm:text-4xl font-bold text-white mb-1">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm uppercase text-gray-300 tracking-wider">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
