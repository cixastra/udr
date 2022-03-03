const Resolution = require('@unstoppabledomains/resolution');
const resolution = new Resolution();
var locations = document.location.pathname.split("/")
function resolveIpfsHash(domain, link) {
    resolution
        .ipfsHash(domain)
        .then((hash) =>
            window.open(`https://cloudflare-ipfs.com/ipfs/${hash}/${link}`, "_self")
        )
        .catch(err => errorhandle(err));
}
resolveIpfsHash(locations[2],locations[3]?.toString());
function errorhandle(err) {
    document.getElementById("message").remove();
    var perror = document.createTextNode("Error");
    var divheader = document.createElement("div");
    divheader.classList.add("message-header");
    divheader.appendChild(perror);
    var divbody = document.createElement("div");
    divbody.classList.add("message-body");
    divbody.innerText = err.toString();
    var error = document.createElement("article");
    error.classList.add("message", "is-danger", "mb-0");
    error.appendChild(divheader);
    error.appendChild(divbody);
}
