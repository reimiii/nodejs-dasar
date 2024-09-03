import https from "https";

const endpoint = "https://eneflupoi6tzb.x.pipedream.net/";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "ME",
    lastName: "AM",
})

request.write(body);
request.end();
