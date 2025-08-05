import { ExternalLink, Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-card/10 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-neon-purple mb-4">
              Diamond Nutted Nation
            </h3>
            <p className="text-muted-foreground text-sm">
              Premium NFT collection for the ultimate play-to-earn card battle experience on Solana.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neon-cyan mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#mint" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Mint NFTs
                </a>
              </li>
              <li>
                <a href="#collection" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  View Collection
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neon-pink mb-4">
              Community
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-neon-pink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Diamond Nutted Nation. Built on Solana Devnet.</p>
        </div>
      </div>
    </footer>
  );
};