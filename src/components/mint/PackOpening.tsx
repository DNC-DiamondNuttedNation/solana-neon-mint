import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Sparkles } from 'lucide-react';

interface PackOpeningProps {
  isOpen: boolean;
  onClose: () => void;
  mintedNfts: Array<{
    mint: string;
    metadata: {
      name: string;
      symbol: string;
      image: string;
    };
  }>;
}

export const PackOpening = ({ isOpen, onClose, mintedNfts }: PackOpeningProps) => {
  const [animationPhase, setAnimationPhase] = useState<'pack' | 'opening' | 'revealed'>('pack');
  
  if (!isOpen) return null;

  const handlePackClick = () => {
    if (animationPhase === 'pack') {
      setAnimationPhase('opening');
      // After opening animation, show the cards
      setTimeout(() => {
        setAnimationPhase('revealed');
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-4">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Pack Opening Animation */}
        {animationPhase === 'pack' && (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neon-purple neon-glow mb-8">
              Pack Opening Time!
            </h2>
            <div 
              className="relative mx-auto w-48 h-64 cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={handlePackClick}
            >
              {/* Pack Card */}
              <div className="w-full h-full bg-gradient-primary rounded-2xl neon-border shadow-glow-accent">
                <div className="flex flex-col items-center justify-center h-full p-6">
                  <img 
                    src="/lovable-uploads/51d61718-d4ab-4a58-b680-79ceab752c71.png"
                    alt="Diamond Pack"
                    className="w-20 h-20 rounded-full mb-4 pulse-glow"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Diamond Pack
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Contains 3 NFTs
                    </p>
                    <Badge className="bg-neon-yellow text-black px-3 py-1">
                      Click to Open!
                    </Badge>
                  </div>
                </div>
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute inset-0 pointer-events-none">
                <Sparkles className="absolute top-2 right-2 h-6 w-6 text-neon-cyan animate-pulse" />
                <Sparkles className="absolute bottom-4 left-2 h-4 w-4 text-neon-pink animate-pulse delay-150" />
                <Sparkles className="absolute top-1/3 left-1/4 h-5 w-5 text-neon-purple animate-pulse delay-300" />
              </div>
            </div>
            <p className="text-white/60 mt-4">Click the pack to reveal your NFTs!</p>
          </div>
        )}

        {/* Opening Animation */}
        {animationPhase === 'opening' && (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-neon-cyan neon-glow mb-8 animate-pulse">
              Opening Pack...
            </h2>
            <div className="relative mx-auto w-48 h-64">
              <div className="w-full h-full bg-gradient-primary rounded-2xl animate-pulse shadow-glow-accent">
                <div className="flex items-center justify-center h-full">
                  <div className="w-16 h-16 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              
              {/* Explosion effect */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Sparkles 
                    key={i}
                    className={`absolute h-6 w-6 text-neon-yellow animate-ping`}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Revealed NFTs */}
        {animationPhase === 'revealed' && (
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-neon-green neon-glow mb-8">
              Pack Opened! 🎉
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {mintedNfts.map((nft, index) => (
                <Card 
                  key={nft.mint} 
                  className="neon-border bg-card/80 backdrop-blur-sm animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-full h-48 bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/51d61718-d4ab-4a58-b680-79ceab752c71.png"
                        alt={nft.metadata.name}
                        className="w-24 h-24 rounded-full neon-glow"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-neon-purple mb-2">
                      {nft.metadata.name}
                    </h3>
                    <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan">
                      {nft.metadata.symbol}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button 
              onClick={onClose}
              className="neon-button px-8 py-3"
              size="lg"
            >
              Awesome! Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};