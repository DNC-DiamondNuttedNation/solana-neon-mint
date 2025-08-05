import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Zap, Shield } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-30" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-neon-purple/20 text-neon-purple border-neon-purple">
          <Sparkles className="h-4 w-4 mr-2" />
          Premium NFT Collection
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow pulse-glow text-transparent bg-clip-text bg-gradient-primary">
          Diamond Nutted Nation
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Mint exclusive NFTs for the ultimate play-to-earn card battle experience. 
          Each diamond represents power, strategy, and endless possibilities in our gaming universe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="neon-button text-lg px-8 py-4 h-auto"
            onClick={() => document.getElementById('mint-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="h-5 w-5 mr-2" />
            Start Minting
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="neon-border bg-transparent text-lg px-8 py-4 h-auto hover:bg-neon-cyan/10"
          >
            <Shield className="h-5 w-5 mr-2" />
            View Collection
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 neon-border">
            <div className="text-3xl font-bold text-neon-cyan mb-2">10,000</div>
            <div className="text-muted-foreground">Unique NFTs</div>
          </div>
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 neon-border">
            <div className="text-3xl font-bold text-neon-purple mb-2">0.1 SOL</div>
            <div className="text-muted-foreground">Mint Price</div>
          </div>
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 neon-border">
            <div className="text-3xl font-bold text-neon-pink mb-2">Epic</div>
            <div className="text-muted-foreground">Rarity Level</div>
          </div>
        </div>
      </div>
    </section>
  );
};