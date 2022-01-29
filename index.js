const { default: Resolution } = require('@unstoppabledomains/resolution');
const resolution = new Resolution();

function resolveIpfsHash(domain) {
    resolution
        .ipfsHash(domain)
        .then((hash) =>
            window.open(`https://cloudflare-ipfs.com/ipfs/${hash}`,"_blank"),
        )
        .catch(console.error);
}

resolveIpfsHash(document.location.pathname.trim(1, document.location.pathname.length));