type NFT = {
    imageURL: string;
    name: string;
};

function collectionHasNFT(collection:NFT[], nft: NFT): boolean {
    if (collection.includes(nft)) {
        return true
    } else {
        return false
    }
}
export default collectionHasNFT