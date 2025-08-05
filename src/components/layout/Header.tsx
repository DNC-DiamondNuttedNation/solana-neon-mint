import { WalletButton } from '@/components/wallet/WalletButton';

export const Header = () => {
  return (
    <header className="border-b border-border/20 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/51d61718-d4ab-4a58-b680-79ceab752c71.png" 
            alt="Diamond Collection Logo" 
            className="h-12 w-12 rounded-full neon-border"
          />
          <div>
            <h1 className="text-2xl font-bold neon-glow text-neon-purple">
              Diamond Nutted Nation
            </h1>
            <p className="text-sm text-muted-foreground">
              Premium NFT Collection on Solana
            </p>
          </div>
        </div>
        
        <WalletButton />
      </div>
    </header>
  );
};