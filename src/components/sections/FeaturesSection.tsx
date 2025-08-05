import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Trophy, Coins, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'Play-to-Earn Gaming',
    description: 'Use your NFTs in epic card battles and earn rewards for your victories.',
    color: 'text-neon-purple'
  },
  {
    icon: Trophy,
    title: 'Competitive Tournaments',
    description: 'Participate in tournaments with your collection and compete for prizes.',
    color: 'text-neon-cyan'
  },
  {
    icon: Coins,
    title: 'Staking Rewards',
    description: 'Stake your NFTs to earn passive income while building your deck.',
    color: 'text-neon-pink'
  },
  {
    icon: Shield,
    title: 'Verified on Solana',
    description: 'Secure, fast, and eco-friendly blockchain technology.',
    color: 'text-neon-green'
  },
  {
    icon: Zap,
    title: 'Instant Battles',
    description: 'Lightning-fast gameplay with instant transactions on Solana.',
    color: 'text-neon-blue'
  },
  {
    icon: Users,
    title: 'Growing Community',
    description: 'Join thousands of players in our expanding gaming ecosystem.',
    color: 'text-neon-purple'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-glow text-neon-cyan">
            Why Choose Diamond Nutted Nation?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our NFTs aren't just collectibles – they're your gateway to an immersive gaming experience 
            with real utility and earning potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="neon-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 hover:shadow-glow-secondary">
              <CardHeader>
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                <CardTitle className="text-xl text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};