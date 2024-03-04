import React from "react";

const MintNFT = () => {
    const handleMintNFT = async () => {
        try {
        //
        const nftId = await wagmiMintNFT();

        // Handle the successful minting of the NFT
        console.log('NFT minted successfully! NFT ID: ${nftId}');
        } catch (error) {
            // Handle any errors that occur during the minting process
            console.error('Error minting NFT:', error);
        }
    };
    
    return (
        <div>
            <button onClick={handleMintNFT}>Mint NFT</button>
        </div>
    );
};

export default MintNFT;