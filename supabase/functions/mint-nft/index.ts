import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { walletAddress, packQuantity } = await req.json();

    console.log(`Pack mint request received for wallet: ${walletAddress}, packs: ${packQuantity}`);

    if (!walletAddress) {
      throw new Error('Wallet address is required');
    }

    if (!packQuantity || packQuantity < 1 || packQuantity > 5) {
      throw new Error('Invalid pack quantity. Must be between 1 and 5');
    }

    // Backend pack configuration
    const PACK_CONFIG = {
      candyMachineId: "YOUR_CANDY_MACHINE_ID_HERE", // Replace with your actual candy machine ID
      collectionAddress: "YOUR_COLLECTION_ADDRESS_HERE", // Replace with your actual collection address
      packPrice: 0.3, // SOL per pack
      nftsPerPack: 3, // Each pack contains 3 NFTs
      maxSupply: 1000, // Total packs available
      maxPerWallet: 5 // Max packs per wallet
    };

    console.log('Using pack configuration:', PACK_CONFIG);

    // Calculate total NFTs to mint (packs * 3 NFTs per pack)
    const totalNfts = packQuantity * PACK_CONFIG.nftsPerPack;
    // Here you would implement the actual Metaplex pack opening logic
    // For now, we'll simulate the pack opening process
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate successful pack opening with 3 NFTs per pack
    const mintResult = {
      success: true,
      transactionSignature: `simulated_pack_tx_${Date.now()}`,
      packsOpened: packQuantity,
      mintedNfts: Array.from({ length: totalNfts }, (_, i) => ({
        mint: `simulated_mint_${Date.now()}_${i}`,
        tokenAccount: `simulated_token_${Date.now()}_${i}`,
        metadata: {
          name: `Diamond Nutted Nation #${Math.floor(Math.random() * 10000)}`,
          symbol: "DNN",
          image: "https://your-metadata-url.com/image.png",
          rarity: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'][Math.floor(Math.random() * 5)]
        }
      })),
      totalCost: PACK_CONFIG.packPrice * packQuantity,
      candyMachineId: PACK_CONFIG.candyMachineId
    };

    console.log('Pack opening successful:', mintResult);

    return new Response(
      JSON.stringify({
        success: true,
        data: mintResult
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Mint error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Unknown error occurred'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
})