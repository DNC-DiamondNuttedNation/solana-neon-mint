import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@/components/ui/button';

export const WalletButton: FC = () => {
  const { wallet, connect, disconnect, connecting, connected } = useWallet();

  return (
    <div className="wallet-adapter-button-wrapper">
      <WalletMultiButton className="neon-button !bg-gradient-primary hover:shadow-glow-accent !border-neon-purple" />
    </div>
  );
};