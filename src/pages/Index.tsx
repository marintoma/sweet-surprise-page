import { useState, useEffect } from 'react';
import { CountdownTimer } from '@/components/CountdownTimer';
import { GiftBox } from '@/components/GiftBox';
import { LoveMessage } from '@/components/LoveMessage';
import { FloatingHearts } from '@/components/FloatingHearts';

type PageState = 'gift' | 'message';

const Index = () => {
  const [pageState, setPageState] = useState<PageState>('gift');

  const handleGiftOpened = () => {
    setPageState('message');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto">
          {pageState === 'countdown' && (
            <CountdownTimer 
              targetDate={august1st} 
              onTimeReached={handleTimeReached}
            />
          )}

          {pageState === 'gift' && (
            <GiftBox onOpen={handleGiftOpened} />
          )}

          {pageState === 'message' && (
            <LoveMessage />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
