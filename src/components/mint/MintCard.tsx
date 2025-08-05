import { useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Loader2, Zap, Shield, Coins, Package } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { PackOpening } from './PackOpening';

export const MintCard = () => {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);
  const [packQuantity, setPackQuantity] = useState(1);
  const [showPackOpening, setShowPackOpening] = useState(false);
  const [mintedNfts, setMintedNfts] = useState<any[]>([]);

  const handleMint = async () => {
    if (!connected || !publicKey) {
      toast.error('Please connect your wallet first');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Starting pack minting process...');
      
      // Call the backend edge function to handle pack minting (3 NFTs per pack)
      const { data, error } = await supabase.functions.invoke('mint-nft', {
        body: {
          walletAddress: publicKey.toString(),
          packQuantity: packQuantity
        }
      });

      if (error) {
        throw new Error(error.message || 'Pack minting failed');
      }

      if (!data.success) {
        throw new Error(data.error || 'Pack minting failed');
      }

      console.log('Pack mint successful:', data.data);
      setMintedNfts(data.data.mintedNfts);
      setShowPackOpening(true);
      
    } catch (error) {
      console.error('Pack mint failed:', error);
      toast.error(`Pack minting failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card className="neon-border bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl neon-glow text-neon-purple">
            Open Diamond Packs
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Each pack contains 3 random NFTs from the Diamond Nutted Nation collection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Pack Quantity - Smaller UI */}
          <div className="space-y-2">
            <Label htmlFor="packs" className="text-foreground text-sm">
              Number of Packs (3 NFTs each)
            </Label>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPackQuantity(Math.max(1, packQuantity - 1))}
                disabled={packQuantity <= 1}
                className="neon-border w-10 h-10"
              >
                -
              </Button>
              <span className="text-2xl font-bold text-neon-purple w-12 text-center">
                {packQuantity}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPackQuantity(Math.min(5, packQuantity + 1))}
                disabled={packQuantity >= 5}
                className="neon-border w-10 h-10"
              >
                +
              </Button>
            </div>
          </div>

        {/* Stats - Removed Rarity */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 rounded-lg bg-muted/20 neon-border">
            <Package className="h-6 w-6 text-neon-cyan mx-auto mb-1" />
            <div className="text-sm text-muted-foreground">Pack Price</div>
            <div className="font-bold text-neon-cyan">0.3 SOL</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/20 neon-border">
            <Shield className="h-6 w-6 text-neon-green mx-auto mb-1" />
            <div className="text-sm text-muted-foreground">Packs Left</div>
            <div className="font-bold text-neon-green">333</div>
          </div>
        </div>

        {/* Connection Status */}
        {connected ? (
          <div className="flex items-center justify-center space-x-2">
            <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green">
              Connected: {publicKey?.toString().slice(0, 8)}...
            </Badge>
          </div>
        ) : (
          <div className="text-center">
            <Badge variant="destructive" className="bg-destructive/20">
              Wallet Not Connected
            </Badge>
          </div>
        )}

        {/* Mint Button */}
        <Button
          onClick={handleMint}
          disabled={!connected || isLoading}
          className="w-full neon-button h-12 text-lg font-bold"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              Opening Packs...
            </>
          ) : (
            <>
              <Package className="h-5 w-5 mr-2" />
              Open {packQuantity} Pack{packQuantity > 1 ? 's' : ''} ({packQuantity * 3} NFTs)
            </>
          )}
        </Button>
      </CardContent>
    </Card>

    {/* Pack Opening Modal */}
    <PackOpening 
      isOpen={showPackOpening}
      onClose={() => setShowPackOpening(false)}
      mintedNfts={mintedNfts}
    />
  </div>
  );
};