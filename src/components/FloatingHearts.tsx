import { useEffect, useState } from 'react';
import { Heart, Cat, Flower, Flower2 } from 'lucide-react';

interface FloatingElement {
  id: number;
  left: number;
  size: number;
  delay: number;
  color: string;
  type: 'heart' | 'cat' | 'flower' | 'flower2';
}

export const FloatingHearts = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const createElement = () => {
      const colors = ['text-primary', 'text-accent', 'text-pink-400', 'text-red-400', 'text-purple-400', 'text-rose-400'];
      const types: ('heart' | 'cat' | 'flower' | 'flower2')[] = ['heart', 'cat', 'flower', 'flower2'];
      return {
        id: Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 20 + 16,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
      };
    };

    // Initial elements
    const initialElements = Array.from({ length: 8 }, createElement);
    setElements(initialElements);

    // Add new elements periodically
    const interval = setInterval(() => {
      setElements(prevElements => {
        const newElement = createElement();
        const updatedElements = [...prevElements, newElement];
        
        // Keep only the last 12 elements to prevent memory issues
        return updatedElements.slice(-12);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderIcon = (element: FloatingElement) => {
    switch (element.type) {
      case 'heart':
        return <Heart fill="currentColor" />;
      case 'cat':
        return <Cat fill="currentColor" />;
      case 'flower':
        return <Flower fill="currentColor" />;
      case 'flower2':
        return <Flower2 fill="currentColor" />;
      default:
        return <Heart fill="currentColor" />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute heart-float ${element.color} opacity-70`}
          style={{
            left: `${element.left}%`,
            animationDelay: `${element.delay}s`,
            fontSize: `${element.size}px`,
          }}
        >
          {renderIcon(element)}
        </div>
      ))}
    </div>
  );
};
