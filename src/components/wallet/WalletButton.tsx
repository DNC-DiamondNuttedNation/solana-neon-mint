import { FC, useCallback, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@/components/ui/button';
import { ChevronDown, Wallet, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const WalletButton: FC = () => {
  const { wallet, publicKey, disconnect, connected, connecting } = useWallet();
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const handleDisconnect = useCallback(async () => {
    if (!connected) return;
    
    setIsDisconnecting(true);
    try {
      console.log('Attempting to disconnect wallet...');
      await disconnect();
      toast.success('Wallet disconnected successfully');
      console.log('Wallet disconnected successfully');
    } catch (error) {
      console.error('Disconnect error:', error);
      toast.error(`Failed to disconnect: ${error.message || 'Unknown error'}`);
    } finally {
      setIsDisconnecting(false);
    }
  }, [connected, disconnect]);

  if (!connected) {
    return (
      <div className="wallet-adapter-button-wrapper">
        <WalletMultiButton className="neon-button !bg-gradient-primary hover:shadow-glow-accent !border-neon-purple !text-white" />
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="neon-border bg-card/50 hover:bg-card/80 text-foreground flex items-center gap-2"
          disabled={connecting || isDisconnecting}
        >
          <Wallet className="h-4 w-4" />
          <span className="hidden sm:inline">
            {publicKey ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}` : 'Connected'}
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="neon-border bg-card">
        <DropdownMenuItem className="text-muted-foreground cursor-default">
          <Wallet className="h-4 w-4 mr-2" />
          {wallet?.adapter.name || 'Unknown Wallet'}
        </DropdownMenuItem>
        <DropdownMenuItem className="text-muted-foreground cursor-default text-xs">
          {publicKey?.toString()}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleDisconnect}
          disabled={isDisconnecting}
          className="text-destructive hover:bg-destructive/10 cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2" />
          {isDisconnecting ? 'Disconnecting...' : 'Disconnect'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};