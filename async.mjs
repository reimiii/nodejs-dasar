function getData() {
    return Promise.resolve("Mee");
}

const data = await getData();
console.info(data);