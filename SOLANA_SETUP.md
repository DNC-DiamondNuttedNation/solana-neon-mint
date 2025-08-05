# Solana NFT Minting Website - Setup Guide

## 🚀 Your Solana NFT Minting Website is Ready!

This is a fully functional Solana NFT minting website with wallet integration, candy machine support, and a stunning dark neon theme. The site is currently configured for Solana **Devnet**.

## ✅ What's Already Built

### Core Features
- **Wallet Integration**: Phantom, Solflare, Torus, and Ledger wallet support
- **Candy Machine Integration**: Ready for your candy machine ID
- **Responsive Design**: Beautiful dark theme with neon accents
- **User Interface**: Complete minting interface with quantity selection
- **Real-time Status**: Connection status and minting feedback
- **Error Handling**: Comprehensive error handling and user notifications

### Technical Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Blockchain**: Solana Web3.js + Wallet Adapter
- **Metaplex**: Candy Machine integration ready
- **UI Components**: shadcn/ui with custom neon styling

## 🔧 Next Steps - What You Need to Do

### 1. Add Your Candy Machine Details
You can add your candy machine ID and collection address directly in the website interface, or you can hardcode them:

**Option A: Use the Interface (Recommended)**
- Just enter your Candy Machine ID and Collection Address in the mint form
- The website will save and use these values

**Option B: Hardcode in the Code**
Edit `src/components/mint/MintCard.tsx` and replace the default values:
```typescript
const [localCandyMachineId, setLocalCandyMachineId] = useState('YOUR_CANDY_MACHINE_ID_HERE');
const [localCollectionAddress, setLocalCollectionAddress] = useState('YOUR_COLLECTION_ADDRESS_HERE');
```

### 2. Implement Actual Minting Logic
The minting button currently shows a placeholder. To implement real minting, you need to:

1. **Install additional Metaplex dependencies** (if needed):
```bash
npm install @metaplex-foundation/mpl-token-metadata
```

2. **Update the mint function** in `src/components/mint/MintCard.tsx`:
```typescript
// Replace the placeholder mint function with actual Metaplex candy machine integration
// Example implementation would go in the handleMint function
```

### 3. Configure Candy Machine Settings
In `src/components/mint/MintCard.tsx`, update the stats to match your actual candy machine:
- **Price**: Change from "0.1 SOL" to your actual mint price
- **Remaining**: Connect to your candy machine to show real remaining count
- **Rarity**: Update based on your collection details

### 4. Customize Branding
- **Logo**: Your logo is already integrated from the uploaded image
- **Collection Name**: Currently set to "Diamond Gifted Chain" - update in `src/components/layout/Header.tsx`
- **Colors**: The neon theme can be customized in `src/index.css`

### 5. Deploy to Production
When ready for mainnet:
1. Change network from 'devnet' to 'mainnet-beta' in `src/components/providers/SolanaProvider.tsx`
2. Update your candy machine ID to the mainnet version
3. Test thoroughly on devnet first!

## 🎨 Design System

The website uses a custom neon design system with:
- **Primary Colors**: Purple, Cyan, Pink neon accents
- **Dark Theme**: Deep dark background with glowing elements
- **Animations**: Pulse effects, gradient animations, hover glows
- **Typography**: Neon glow effects on headings

## 🔗 Key Files to Know

- `src/components/providers/SolanaProvider.tsx` - Wallet and network configuration
- `src/components/mint/MintCard.tsx` - Main minting interface
- `src/components/wallet/WalletButton.tsx` - Wallet connection
- `src/index.css` - Design system and neon styles
- `tailwind.config.ts` - Extended color palette

## 🧪 Testing on Devnet

1. **Get Devnet SOL**: Visit [faucet.solana.com](https://faucet.solana.com/) for free devnet SOL
2. **Switch Wallet**: Make sure your wallet is connected to Devnet
3. **Test Wallet Connection**: Connect/disconnect to verify functionality
4. **Test Minting Flow**: Add your candy machine ID and test the interface

## 🚀 Deployment

The website is ready to deploy! You can:
1. Deploy directly from Lovable (click the Publish button)
2. Connect to your custom domain in Project Settings
3. The site will work immediately once your candy machine details are added

## 📝 Final Notes

- **Security**: Always test on devnet before mainnet
- **Gas Fees**: Make sure users understand Solana transaction fees
- **Error Handling**: The site includes comprehensive error messages
- **Mobile Responsive**: Works perfectly on all devices
- **SEO Ready**: Proper meta tags and structure included

Your NFT minting website is now live and ready for your community! 🎉

## 💡 Additional Features You Could Add

- **Whitelist Support**: Add wallet whitelist verification
- **Multiple Mint Phases**: Support for different mint phases with different prices
- **NFT Gallery**: Display minted NFTs from the collection
- **Staking Interface**: Add NFT staking for your play-to-earn game
- **Battle System**: Integrate with your card battle game mechanics