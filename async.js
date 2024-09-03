async function fetchData() {
    console.log("Mulai mengambil data..."); // 1
    await new Promise(resolve => setTimeout(resolve("MEE"), 5000));
    console.log("Data sudah diambil"); // 3 (Setelah 2 detik)
}

console.log("Kode lain jalan..."); // 2

// fetchData().then(() => console.info("Fetch data....."));
async function run() {
    const ngambilName = await fetchData();
    console.info(ngambilName)
}

run();

console.log("Lanjut dengan kode lainnya..."); // 4
