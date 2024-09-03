import readline from "readline/promises";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const answer = await input.question("What is your name?")
input.close();
console.info(`oh your name is ${answer}`)

