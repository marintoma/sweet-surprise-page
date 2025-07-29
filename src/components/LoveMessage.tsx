import { Heart, Sparkles } from 'lucide-react';

export const LoveMessage = () => {
  return (
    <div className="text-center space-y-8 animate-in fade-in duration-1000">
      <div className="relative">
        {/* Sparkles around the message */}
        <div className="absolute -top-8 -left-8 text-accent sparkle">
          <Sparkles size={32} />
        </div>
        <div className="absolute -top-4 -right-12 text-primary sparkle" style={{ animationDelay: '0.5s' }}>
          <Sparkles size={28} />
        </div>
        <div className="absolute -bottom-6 -left-12 text-accent sparkle" style={{ animationDelay: '1s' }}>
          <Sparkles size={24} />
        </div>
        <div className="absolute -bottom-8 -right-8 text-primary sparkle" style={{ animationDelay: '1.5s' }}>
          <Sparkles size={30} />
        </div>

        <div className="bg-card border-4 border-primary/30 rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto backdrop-blur-sm">
          <div className="space-y-6">
            <div className="text-6xl md:text-8xl">💕</div>
            
            <h1 className="text-4xl md:text-6xl font-bold gradient-romantic bg-clip-text text-transparent leading-tight">
              I Love You!
            </h1>
            
            <div className="flex justify-center space-x-3">
              <Heart className="text-primary heart-pulse" size={32} />
              <Heart className="text-accent heart-pulse" size={28} style={{ animationDelay: '0.2s' }} />
              <Heart className="text-primary heart-pulse" size={32} style={{ animationDelay: '0.4s' }} />
              <Heart className="text-accent heart-pulse" size={28} style={{ animationDelay: '0.6s' }} />
              <Heart className="text-primary heart-pulse" size={32} style={{ animationDelay: '0.8s' }} />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
              You are very special to me and I wanted to create something just for you. 
              I love you sweet Mico! 💖
            </p>
            
            <div className="text-5xl">✨💝✨</div>
          </div>
        </div>
      </div>
    </div>
  );
};