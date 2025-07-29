import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  size: number;
  delay: number;
  color: string;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const colors = ['text-primary', 'text-accent', 'text-pink-400', 'text-red-400'];
      return {
        id: Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 20 + 16,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Initial hearts
    const initialHearts = Array.from({ length: 8 }, createHeart);
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prevHearts => {
        const newHeart = createHeart();
        const updatedHearts = [...prevHearts, newHeart];
        
        // Keep only the last 12 hearts to prevent memory issues
        return updatedHearts.slice(-12);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute heart-float ${heart.color} opacity-70`}
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          <Heart fill="currentColor" />
        </div>
      ))}
    </div>
  );
};
