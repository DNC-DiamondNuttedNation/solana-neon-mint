import { useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Loader2, Zap, Shield, Coins } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export const MintCard = () => {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);
  const [mintQuantity, setMintQuantity] = useState(1);

  const handleMint = async () => {
    if (!connected || !publicKey) {
      toast.error('Please connect your wallet first');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Starting mint process...');
      
      // Call the backend edge function to handle minting
      const { data, error } = await supabase.functions.invoke('mint-nft', {
        body: {
          walletAddress: publicKey.toString(),
          quantity: mintQuantity
        }
      });

      if (error) {
        throw new Error(error.message || 'Minting failed');
      }

      if (!data.success) {
        throw new Error(data.error || 'Minting failed');
      }

      console.log('Mint successful:', data.data);
      toast.success(`Successfully minted ${mintQuantity} NFT${mintQuantity > 1 ? 's' : ''}!`, {
        description: `Transaction: ${data.data.transactionSignature.slice(0, 20)}...`
      });
      
    } catch (error) {
      console.error('Mint failed:', error);
      toast.error(`Minting failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="neon-border bg-card/50 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl neon-glow text-neon-purple">
          Mint Your NFTs
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Mint exclusive NFTs for your play-to-earn card battle game
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Mint Quantity */}
        <div className="space-y-2">
          <Label htmlFor="quantity" className="text-foreground">
            Quantity to Mint
          </Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            max="10"
            value={mintQuantity}
            onChange={(e) => setMintQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="neon-border bg-input/50"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg bg-muted/20 neon-border">
            <Coins className="h-6 w-6 text-neon-cyan mx-auto mb-1" />
            <div className="text-sm text-muted-foreground">Price</div>
            <div className="font-bold text-neon-cyan">0.1 SOL</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/20 neon-border">
            <Shield className="h-6 w-6 text-neon-green mx-auto mb-1" />
            <div className="text-sm text-muted-foreground">Remaining</div>
            <div className="font-bold text-neon-green">1,000</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/20 neon-border">
            <Zap className="h-6 w-6 text-neon-pink mx-auto mb-1" />
            <div className="text-sm text-muted-foreground">Rarity</div>
            <div className="font-bold text-neon-pink">Epic</div>
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
              Minting...
            </>
          ) : (
            <>
              <Zap className="h-5 w-5 mr-2" />
              Mint {mintQuantity} NFT{mintQuantity > 1 ? 's' : ''}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};