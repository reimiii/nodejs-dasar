import util from "util";

const firstName = "Me";
const lastName = "Am";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Zero",
    lastName: "Two"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
