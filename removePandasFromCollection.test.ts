import removePandasFromCollection from "./removePandasFromCollection";

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

let collection: NFT[] = [NFT1, NFT2, NFT3, NFT4, NFT5];

test("check if an array of nfts contains nfts with a specific name and removes them. returns true if all nfts have been removed", function () {

    expect(removePandasFromCollection(collection, "NGMIPandas")).toBe(true)

})
