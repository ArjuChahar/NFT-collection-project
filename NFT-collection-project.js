// create a variable to hold your NFTs
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, year, description) {
    // Create an NFT object with the provided metadata
    let nft = {
        name: name,
        artist: artist,
        year: year,
        description: description
    };

    // Store the NFT object in the nftCollection array
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    // Loop through the nftCollection array and print metadata of each NFT
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Name: " + nftCollection[i].name);
        console.log("Artist: " + nftCollection[i].artist);
        console.log("Year: " + nftCollection[i].year);
        console.log("Description: " + nftCollection[i].description);
        console.log("------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line

// Mint some NFTs
mintNFT("CryptoPunk", "Larva Labs", 2017, "One of the earliest NFTs on Ethereum.");
mintNFT("Bored Ape", "Yuga Labs", 2021, "A unique collectible from the Bored Ape Yacht Club.");
mintNFT("Beeple's Everydays", "Beeple", 2021, "A collection of digital art by Beeple.");

// List all NFTs
listNFTs();

// Print the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());
