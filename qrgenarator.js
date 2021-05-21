const qr = require("qrcode");
const excel = require("xlsx");

//String(42).padStart(5, '0');

function createMany(prefix, lastNumber) {
  for (i = 1; i <= lastNumber; i++) {
    let sufix = String(i).padStart(4, '0');
    qr.toFile(`images/BBA/${prefix}${sufix}.svg`, `${prefix}${sufix}`, {width: 110});
  }
}

function createQr(filename, data) {

    qr.toFile("images/" + filename + ".svg", data, { width: 110 });
}

//const ws = excel.readFile("file.xlsx").Sheets["Página1"];
//const data = excel.utils.sheet_to_json(ws);
//console.log(data);

//createQr("qr_150", "BBA0001");
createMany("BBA", 600);
