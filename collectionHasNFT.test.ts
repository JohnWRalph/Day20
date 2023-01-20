import collectionHasNFT from "./collectionHasNFT";
type NFT = {
    imageURL: string;
    name: string;
};

test("check if a collection of nfts contains a specific nft, and if so, returns true. else returns false.", function () {

    type NFT = {
        imageURL: string;
        name: string;
    };
    
    const NFT1: NFT = {
        imageURL: "https://ngmipandas.com/images/special/420.jpg",
        name: "NGMIPandas",
    
    };
    
    const NFT2: NFT = {
        imageURL: "https://ngmipandas.com/images/special/fast-shitcoiner.jpg",
        name: "NGMIPandas",
    
    };
    
    const NFT3: NFT = {
        imageURL: "https://ngmipandas.com/images/special/GMI.jpg",
        name: "NGMIPandas",
    
    };
    
    const NFT4: NFT = {
        imageURL: "https://ngmipandas.com/images/special/ice-cold.jpg",
        name: "NGMIPandas",
    
    };
    const NFT5: NFT = {
        imageURL: "Image5",
        name: "Birb #0",
    };
    
const collection = [ NFT2, NFT3, NFT4];
expect(collectionHasNFT(collection,NFT3)).toBe(true)
})