
const buffer = Buffer.from("Hilmi Hilmi AM", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("SGlsbWkgSGlsbWkgQU0=", "base64");
console.info(bufferBase64.toString("utf8"));
console.info(bufferBase64.toString("base64url"))
console.info(bufferBase64.toString("utf16le"))
