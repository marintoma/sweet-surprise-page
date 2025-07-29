import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  onTimeReached: () => void;
}

export const CountdownTimer = ({ targetDate, onTimeReached }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isTimeReached, setIsTimeReached] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (!isTimeReached) {
          setIsTimeReached(true);
          onTimeReached();
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onTimeReached, isTimeReached]);

  if (isTimeReached) {
    return null;
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="text-center space-y-8">
      <h2 className="text-2xl md:text-4xl font-bold text-primary mb-8 heart-pulse">
        Your surprise is coming soon... 💕
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="bg-card border-2 border-primary/20 rounded-2xl p-6 countdown-pulse"
          >
            <div className="text-3xl md:text-5xl font-bold text-primary">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base text-muted-foreground font-medium mt-2">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
        Just a little bit longer, my love... ✨<br />
        Something special is waiting for you! 💖
      </p>
    </div>
  );
};