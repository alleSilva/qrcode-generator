const qr = require("qrcode");
const excel = require("xlsx");

//String(42).padStart(5, '0');

function createQr(filename, data) {
    qr.toFile("images/" + filename + ".svg", data, { width: 400 });
}

//const ws = excel.readFile("file.xlsx").Sheets["Página1"];
//const data = excel.utils.sheet_to_json(ws);
//console.log(data);

createQr("qr", "BBA0001");