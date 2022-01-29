const { default: Resolution } = require('@unstoppabledomains/resolution');
const resolution = new Resolution();

function resolveIpfsHash(domain) {
    resolution
        .ipfsHash(domain)
        .then((hash) =>
            window.open(`https://cloudflare-ipfs.com/ipfs/${hash}`, "_self"),
        )
        .catch(console.error);
}

resolveIpfsHash(window.prompt("Enter the NFT Domain:", "cixastra.nft"));