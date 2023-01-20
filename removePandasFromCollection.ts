// takes an array of NFTs which is the same NFT custom object type, and removes any 
// nfts that have Panda in their name, and returns the new array with no pandas in it.

type NFT = {
    imageURL: string;
    name: string;
};

let containsValue: boolean;
function removePandasFromCollection(collection: NFT[], nftName: string) {
    // containsvalue find if any NFT in the collection contains an nft witha specific name at all, and if so returns true
    containsValue = collection.filter(obj => obj.name === nftName).length > 0;

    // while containsValue is true, cycle through the collection and remove nfts one by one
    while (containsValue === true) {
        // console.log(containsValue); // true
        let index = collection.findIndex(obj => obj.name === nftName);
        if (index !== -1) {
            collection.splice(index, 1);
        }
        containsValue = collection.filter(obj => obj.name === nftName).length > 0;

   
    }
   
    if (containsValue === false) {
     
        return true;
    }
   
}
export default removePandasFromCollection

