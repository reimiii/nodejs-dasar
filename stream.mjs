import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Hil\n");
writer.write("Me\n");
writer.write("Am\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});
