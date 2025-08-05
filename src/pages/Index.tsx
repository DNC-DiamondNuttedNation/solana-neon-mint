import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { MintCard } from '@/components/mint/MintCard';

const Index = () => {
  const [candyMachineId, setCandyMachineId] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        
        {/* Mint Section */}
        <section id="mint-section" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-glow text-neon-pink">
                Mint Your NFTs
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enter your Candy Machine ID and Collection Address to start minting your exclusive Diamond Gifted Chain NFTs.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <MintCard 
                candyMachineId={candyMachineId}
                collectionAddress={collectionAddress}
                onCandyMachineUpdate={setCandyMachineId}
                onCollectionUpdate={setCollectionAddress}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
