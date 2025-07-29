import { useState } from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';

interface GiftBoxProps {
  onOpen: () => void;
}

export const GiftBox = ({ onOpen }: GiftBoxProps) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      onOpen();
    }, 500);
  };

  return (
    <div className="text-center space-y-8">
      <h2 className="text-3xl md:text-5xl font-bold text-primary heart-pulse">
        Your surprise is ready! 🎁
      </h2>
      
      <div className="relative inline-block">
        {/* Sparkles around the gift */}
        <div className="absolute -top-4 -left-4 text-accent sparkle">
          <Sparkles size={24} />
        </div>
        <div className="absolute -top-2 -right-6 text-primary sparkle" style={{ animationDelay: '0.5s' }}>
          <Sparkles size={20} />
        </div>
        <div className="absolute -bottom-2 -left-6 text-accent sparkle" style={{ animationDelay: '1s' }}>
          <Sparkles size={18} />
        </div>
        <div className="absolute -bottom-4 -right-4 text-primary sparkle" style={{ animationDelay: '1.5s' }}>
          <Sparkles size={22} />
        </div>

        {/* Gift box */}
        <div
          onClick={handleClick}
          className={`relative cursor-pointer transform transition-all duration-300 hover:scale-110 ${
            isShaking ? 'gift-shake' : ''
          }`}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 gradient-romantic rounded-3xl shadow-2xl flex items-center justify-center border-4 border-white/30">
            <Gift size={80} className="text-white drop-shadow-lg" />
          </div>
          
          {/* Ribbon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-6 bg-accent opacity-80 rounded-full"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center rotate-90">
            <div className="w-full h-6 bg-accent opacity-80 rounded-full"></div>
          </div>
          
          {/* Bow */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-6 bg-accent rounded-full shadow-lg"></div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
        Click the gift to unwrap your surprise! 🎀
      </p>
      
      <div className="flex justify-center space-x-2">
        <Heart className="text-primary heart-pulse" size={24} />
        <Heart className="text-accent heart-pulse" size={20} style={{ animationDelay: '0.3s' }} />
        <Heart className="text-primary heart-pulse" size={24} style={{ animationDelay: '0.6s' }} />
      </div>
    </div>
  );
};