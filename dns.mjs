import dns from "dns/promises";

const address = await dns.lookup("reimiii.github.io");

console.info(address.address);
console.info(address.family);
