const { default: Resolution } = require('@unstoppabledomains/resolution');
const resolution = new Resolution();
var err;
function resolveIpfsHash(domain, link) {
    resolution
        .ipfsHash(domain)
        .then((hash) =>
            window.open(`https://cloudflare-ipfs.com/ipfs/${hash}/${link}`, "_self"),
        )
        .catch(err => errorhandle(err));
}
resolveIpfsHash(document.location.pathname.slice(5, document.location.pathname.indexOf("/", 0)), document.location.pathname.slice(document.location.pathname.indexOf("/", 0), document.location.pathname.length));
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